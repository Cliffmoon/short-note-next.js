'use client'
import axios from "axios"
import { use, useState } from "react"

interface Imagedata {
    image: {
        data: {},
    };
    caption: [
        {
            children: [
                {
                    text: string,
                }
            ]
        }
    ];
}

interface BlogData {
    Title: '',
    nameTH: '',
    nameENG: '',
    Course_Code: '',
    Teacher: '',
    University: '',
    Year: number,
    Term: number,
    Description: '',
    imagedata: Imagedata[]
}

const initialBlogData: BlogData = {
    Title: '',
    nameTH: '',
    nameENG: '',
    Course_Code: '',
    Teacher: '',
    University: '',
    Year: 0,
    Term: 0,
    Description: '',
    imagedata: [],
}

export default function Write() {
    const [formWrite, setFormWrite] = useState<BlogData>(initialBlogData)

    const handleChangeCaption = (e, index) => {
        let newformWrite = {
            ...formWrite,
        }
        newformWrite.imagedata[index].caption[0].children[0].text = e.target.value
        setFormWrite(newformWrite)
    }

    const handleChange = ({ target: { name, value } }) => {
        setFormWrite(prev => (
            {
                ...prev,
                [name]: value
            }
        ))
    }

    const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://127.0.0.1:1337/api/blogs?populate[images][populate]=*/", {
                data: formWrite,
            })
            console.log(res)
        }
        catch (error) {
            console.log('error', error)
        }
    }

    const removeImage = (index: number) => {
        const newImages = [...formWrite.imagedata];
        newImages.splice(index, 1);
        setFormWrite({ ...formWrite, imagedata: newImages });
    };


    const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('upload', e.target.files)

        var formData = new FormData();
        formData.append('files', e.target.files[0], e.target.files[0].name);


        let { data } = await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/upload`, formData)

        console.log('data', data)
        let newimagedata = formWrite.imagedata

        newimagedata.push(
            {
                "image": data[0],
                "caption": [
                    {
                        "type": "paragraph",
                        "children": [
                            {
                                "type": "text",
                                "text": ""
                            }
                        ]
                    }
                ]
            }
        )
        let newformWrite = {
            ...formWrite,
            imagedata: newimagedata
        }

        setFormWrite(newformWrite)

        console.log('formWrite', newformWrite)

    }

    return (
        <div className="container mx-auto px-4">
            เขียนสรุป
            <form onSubmit={handleSubmit} className="grid w-1/2 mx-2 mb-12 gap-4">
                <div className="mb-2">
                    <label htmlFor="Title" className="block text-gray-600">ชื่อเอกสาร</label>
                    <input type="text" id="title" name="Title" onChange={handleChange} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" placeholder="ชื่อเอกสาร" />
                </div>
                <div className="mb-2">
                    <label htmlFor="Course name TH" className="block text-gray-600">ชื่อรายวิชาภาษาไทย</label>
                    <input type="text" id="name TH" onChange={handleChange} name="nameTH" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" placeholder="ชื่อรายวิชาภาษาไทย" />
                </div>
                <div className="mb-2">
                    <label htmlFor="Course name ENG" className="block text-gray-600">ชื่อรายวิชาภาษาอังกฤษ</label>
                    <input type="text" id="name ENG" name="nameENG" onChange={handleChange} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" placeholder="ชื่อรายวิชาภาษาอังกฤษ" />
                </div>
                <div className="mb-2">
                    <label htmlFor="Course code" className="block text-gray-600">รหัสวิชา</label>
                    <input type="text" id="Course code" name="Course_Code" onChange={handleChange} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" placeholder="รหัสวิชา" />
                </div>
                <div className="mb-2">
                    <label htmlFor="Teacher name" className="block text-gray-600">ชื่อผู้สอน</label>
                    <input type="text" id="teacher" name="Teacher" onChange={handleChange} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" placeholder="ชื่อผู้สอน" />
                </div>
                <div className="mb-2">
                    <label htmlFor="University" className="block text-gray-600">มหาวิทยาลัย</label>
                    <input type="text" id="university" name="University" onChange={handleChange} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" placeholder="มหาวิทยาลัย" />
                </div>
                <div className="mb-2">
                    <label htmlFor="Year" className="block text-gray-600">ปีการศึกษา</label>
                    <input type="number" id="Year" name="Year" onChange={handleChange} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" placeholder="ปีการศึกษา" />
                </div>
                <div className="mb-2">
                    <label htmlFor="Term" className="block text-gray-600">เทอม</label>
                    <input type="number" id="term" name="Term" onChange={handleChange} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" placeholder="เทอม" />
                </div>
                <div className="mb-2">
                    <label htmlFor="Detail" className="block text-gray-600">รายละเอียดสรุป</label>
                    <textarea id="detail" name="Description" onChange={handleChange} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" placeholder="รายละเอียดสรุป" />
                </div>
                <div>
                    <label htmlFor="UploadFile" className="block text-gray-600">อัปโหลดสรุป</label>
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input onChange={uploadImage} id="dropzone-file" type="file" name="images" className="hidden" />
                    </label>
                    {formWrite.imagedata.map((x, index) => x.image?.formats?.thumbnail.url &&
                        <div key={index}>
                            {x.image?.formats?.thumbnail.url}
                            <img src={process.env.NEXT_PUBLIC_STRAPI_BASE_URL + x.image?.formats?.thumbnail.url}
                                className="my-2"
                            />
                            <div className="my-2">
                                <input
                                    type="text"
                                    value={x.caption[0].children[0].text}
                                    id="images"
                                    name="images"
                                    onChange={(e) => handleChangeCaption(e, index)}
                                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                    autoComplete="off"
                                    placeholder="แคปชั่น" />
                            </div>
                            {index}
                            <button
                                className="bg-red-500 text-white"
                                onClick={() => removeImage(index)} >
                                Remove
                            </button>
                        </div>

                    )}
                    <div className="flex justify-end gap-4">
                        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                            ยกเลิก
                        </button>
                        <button type="submit" className="bg-blue-400 hover:bg-white hover:text-blue-400 text-white font-semibold py-2 px-4 border border-blue-400 rounded shadow">
                            เขียนสรุป
                        </button>
                    </div>
                </div>

            </form>
        </div>
    )
}