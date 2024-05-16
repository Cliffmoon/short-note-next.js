'use client'

import { useContext, useState } from "react"
import { useRouter } from "next/navigation"
import { AuthProvider, AuthProviderContext } from "../context/AuthProvider"
import Image from 'next/image'
import LoginImage from "@/assets/loginPageImage.jpg"


export default function Login() {
    const initState = {
        messge: null
    }
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
    })

    const { user, login, loginState } = useContext(AuthProviderContext)
    const router = useRouter()

    const formAction = async (e: React.FormEventHandler<HTMLFormElement>) => {
        e.preventDefault();
        console.log("formACtion = ", loginForm)
        await login(loginForm)
    }

    const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="bg-gray-100 flex justify-center items-center h-screen">
            <div className="w-1/2 h-screen hidden lg:block">
                <Image
                    src={LoginImage}
                    alt="Picture of the author"
                    className="object-cover w-full h-full"
                >
                </Image>
            </div>
            <div className="lg:p-36 md:p-52 sm:20 p-8 w-1/2 lg:w-1/2">
                <h1 className="text-2xl font-semibold mb-2">ยินดีต้อนรับสู่ Short Note</h1>
                <h1 className="text-2xl font-semibold mb-2">เข้าสู่ระบบ</h1>
                <form onSubmit={formAction} method="POST">
                    <div className="mb-2">
                        <label htmlFor="Email" className="block text-gray-600">อีเมล</label>
                        <input type="text" id="email" name="email" onChange={handleForm} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" placeholder="อีเมล" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="block text-gray-600">รหัสผ่าน</label>
                        <input type="password" id="password" name="password" onChange={handleForm} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" placeholder="รหัสผ่าน" />
                    </div>
                    <div className="mb-2 flex items-center">
                        <input type="checkbox" id="remember" name="remember" className="text-blue-500" />
                        <label htmlFor="remember" className="text-gray-600 ml-2">จดจำฉันไว้</label>
                    </div>
                    <div className="mb-6 text-blue-500">
                        <a href="#" className="hover:underline">ลืมรหัสผ่าน?</a>
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">เข้าสู่ระบบ</button>
                </form>
                <div className="mt-6 text-blue-500 text-center">
                    <a href="../register" className="hover:underline">ลงทะเบียนที่นี่</a>
                </div>
            </div>
        </div>
    )
}




