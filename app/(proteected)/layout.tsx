'use client'
import { useContext, useEffect } from "react"
import { AuthProvider, AuthProviderContext } from "../context/AuthProvider"
import { useRouter } from "next/navigation"

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {

    const { user } = useContext(AuthProviderContext)
    const router = useRouter()
    useEffect(() => {

        if (user == null) {
            router.replace('/login')
        }
    }, [])

    return (<div>{children}</div>)
}