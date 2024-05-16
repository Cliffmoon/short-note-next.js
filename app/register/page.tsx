import Link from "next/link";
import RegisterImage from "@/assets/loginPageImage.jpg"
import Image from 'next/image'



export default function Register() {
    return (
        <div className="bg-gray-100 flex justify-center items-center h-screen">
            <div className="w-1/2 h-screen hidden lg:block">
                <Image
                    src={RegisterImage}
                    alt="Picture of the author"
                    className="object-cover w-full h-full"
                >
                </Image>
            </div>
            <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <h1 className="text-2xl font-semibold mb-2">ยินดีต้อนรับสู่ Short Note</h1>
                <h1 className="text-2xl font-semibold mb-2">สมัครสมาชิก</h1>
                <form action="#" method="POST">
                    <div className="mb-2">
                        <label htmlFor="Email" className="block text-gray-600">อีเมล</label>
                        <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" placeholder="อีเมล" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="block text-gray-600">รหัสผ่าน</label>
                        <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" placeholder="รหัสผ่าน" />
                        <h3 className="text-gray-400">รหัสผ่านควรมีความยาว 8 - 12 อักขระ ประกอบไปด้วยตัวพิมพ์ใหญ่ ตัวพิมพ์เล็ก ตัวเลขและอักขระพิเศษ</h3>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="block text-gray-600">ยืนยันรหัสผ่าน</label>
                        <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" placeholder="ยืนยันรหัสผ่าน" />
                    </div>

                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">ลงทะเบียน</button>
                </form>
                <div className="mt-6 flex gap-4">
                    <h3>มีบัญชี short note อยู่แล้ว?</h3>
                    <a href="../login" className="text-blue-500 text-center hover:underline">เข้าสู่ระบบ</a>
                </div>
            </div>
        </div >
    )
}




