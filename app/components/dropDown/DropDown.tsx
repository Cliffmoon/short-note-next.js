import { useState } from "react"
import { AiOutlineCaretDown } from "react-icons/ai"
import list from "./list.json"

export default function DropDown() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="relative flex flex-col items-center rounded-lg" >
            <button onClick={() => setIsOpen((prev) => !prev)} className="text-whit border-solid p-4 flex items-center border-2 justify-between focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                ล่าสุด
                {!isOpen ? (
                    <AiOutlineCaretDown className="h-8" />
                ) : (<AiOutlineCaretDown className="h-8" />)}
            </button>
            {isOpen && (
                <div className="border-solid border-2 absolute top-20 flex flex-col items-start rounded-lg p-2 w-full">
                    {list.map((item, i) => (
                        <div className="flex w-full justify-between hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-blue-300 border-l-4">
                            <h3>{item.title}</h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}