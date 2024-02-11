export default function Login() {
    return (
        <div className="bg-gray-100 flex justify-center items-center h-screen">
            <div className="w-1/2 h-screen hidden lg:block">
                <img src="https://placehold.co/800x/667fff/ffffff.png?text=Your+Image&font=Montserrat" alt="Placeholder Image" className="object-cover w-full h-full" />
            </div>
            <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <h1 className="text-2xl font-semibold mb-4">ยินดีต้อนรับสู่ Short Note</h1>
                <h1 className="text-2xl font-semibold mb-4">เข้าสู่ระบบ</h1>
                <form action="#" method="POST">
                    <div className="mb-4">
                        <label htmlFor="Email" className="block text-gray-600">อีเมล</label>
                        <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" placeholder="อีเมล" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600">รหัสผ่าน</label>
                        <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" placeholder="รหัสผ่าน" />
                    </div>
                    <div className="mb-4 flex items-center">
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




