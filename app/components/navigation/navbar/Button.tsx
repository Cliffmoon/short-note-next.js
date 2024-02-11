import Link from "next/link";

export default function Button() {
    return (
        <>
            <div className="hidden sm:flex sm:items-center">
                <a href="../../../login" className="text-gray-800 text-sm font-semibold hover:text-blue-400 mr-4">เข้าสู่ระบบ</a>
                <a href="../../../register" className="text-white bg-blue-600 text-sm font-semibold border px-4 py-2 rounded-lg hover:bg-blue-600">ลงทะเบียน</a>
            </div>
        </>

    )
}