'use client'
import Blogs from "../components/Blogs/Blogs";
import Categorise from "../components/categories/Categorise";
import DropDown from "../components/dropDown/DropDown";
import SearchBar from "../components/searchBar";
import axios from "axios";

const fetchCategories = async () => {
    try {
        const response = await axios.get(`${process.env.STRAPI_API_LOCAL}/api/categories`)
    } catch (error) {
        console.log('error', error)
        return []
    }
}

export default async function Read() {
    const categories = await fetchCategories()
    console.log('Categories', categories)
    return (
        <div>
            <div className="w-[80%] mx-auto my-12">
                <h1 className="text-3xl">
                    อ่านสรุป
                </h1>
                <div className="grid grid-cols-2 justify-between items-center gap-[40%] py-4">
                    <SearchBar />
                    <div className="flex gap-4 items-center">
                        จัดเรียงโดย
                        <DropDown />
                    </div>
                </div>
                <div>

                    <Categorise categories={categories} />
                </div>
                <label>ชีตทั้งหมด</label>
                <div className="flex gap-6 mb-8 border-solid border-2">
                    <div className="mt-2 mx-2">
                        <Blogs />
                    </div>
                </div>
                <div className="flex pt-4 items-center gap-4">
                    <h3>จำนวนหน้าต่อแถว</h3>
                    <button className="text-whit border-solid p-4 flex items-center border-2 justify-between focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        50
                    </button>
                </div>
            </div>
        </div>
    )
}