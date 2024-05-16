import { AuthProviderContext } from "@/app/context/AuthProvider";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

export default function LoginButton() {
    const { user, logout } = useContext(AuthProviderContext)
    console.log(user)


    return (
        <>
            <div className="hidden  sm:flex sm:items-center">
                {user != null
                    ? <div className="gap-4">
                        {user.user.username}
                        <button onClick={logout} className="bg-blue-400 text-white py-2 px-4 border border-blue-400 rounded shadow"
                        >
                            Logout
                        </button>
                    </div>
                    : <div>
                        <Link href="../../../login" className="text-gray-800 text-sm font-semibold hover:text-blue-400 mr-4">เข้าสู่ระบบ</Link>
                        <Link href="../../../register" className="text-white bg-blue-600 text-sm font-semibold border px-4 py-2 rounded-lg hover:bg-blue-600">ลงทะเบียน</Link>
                    </div>
                }
            </div>
        </>

    )
}