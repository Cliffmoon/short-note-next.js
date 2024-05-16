'use client';
import { createContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useCookies } from "react-cookie"
import axios, { AxiosError } from "axios"

export const AuthProviderContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loginState, setLoginState] = useState(null)

    const router = useRouter()

    const [tokenCookie, setTokenCookie, removeTokenCookie] = useCookies(['token']);

    useEffect(() => {
        console.log("use effect from auth provider")
        console.log('auth provider tokenCookie?.token', tokenCookie)
        if (tokenCookie?.token) {
            console.log("AuthProvider ", tokenCookie)
            axios.get(
                `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/users/me`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + tokenCookie.token
                    }
                }
            ).then(r => {
                console.log(r.data)
                setLoginState({
                    jwt: "",
                    user: r.data
                })
                setUser({
                    jwt: "",
                    user: r.data
                })
                axios.defaults.headers.Authorization = "Bearer " + tokenCookie.token
            }).catch(error => {
                console.log("remove token")
                removeTokenCookie("token")
                axios.defaults.headers.Authorization = null

                return error;
            })
        } else {
            axios.defaults.headers.Authorization = null
            console.log("remove token")
            removeTokenCookie("token")
            setLoginState(null)
        }

    }, [])

    const logout = async () => {
        axios.defaults.headers.Authorization = null
        removeTokenCookie("token")
        setLoginState(null)
        setUser(null)
    }

    const login = async ({ email, password }) => {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/auth/local`,
            {
                identifier: email,
                password: password
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        ).catch(error => error)

        if (response instanceof AxiosError) {
            console.log("login response = ", response)
            setLoginState(response.response?.data.error)
            setUser(null)
        } else {
            console.log("login response = ", response)
            setLoginState(response.data)
            setUser(response.data)
            setTokenCookie("token", response.data.jwt)
            router.push('/read')
        }
    }


    return (
        <AuthProviderContext.Provider value={{ user, setUser, login, loginState, logout }}>
            {children}
        </AuthProviderContext.Provider>
    )
}