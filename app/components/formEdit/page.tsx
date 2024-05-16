'use client'
import { fetchBlogsID, publicAPI } from "@/app/API/page";
import axios from "axios"
import React, { use, useEffect, useState } from "react"

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

export default function FormEdit({ id }: any) {
    // console.log('this is id from form companent', id)
    const [formEdit, setFormEdit] = useState<BlogData>(initialBlogData)
    const [blogDatabyID, setBlogDataById] = useState({})
    const [isLoading, setIsloading] = useState(true)

    useEffect(() => {
        async function fetchBlogDatabyId() {
            const res = await fetch(`${publicAPI}/api/blogs/${id}?populate[0]=imagedata.image`)
            const data = await res.json()
            setBlogDataById(data)
            setFormEdit(data.data.attributes)
            setIsloading(false)
        }
        fetchBlogDatabyId()

    }, [])

    if (isLoading) {
        return <h2>Loading...</h2>
    }
    // console.log('blog data by id', blogDatabyID.data.attributes.Course_Code)
    // console.log('blog data check data', blogDatabyID.data.attributes)
    console.log('formEdit', formEdit)

    const handleChange = ({ target: { name, value } }) => {
        setFormEdit(prev => (
            {
                ...prev,
                [name]: value
            }

        ))
        // console.log(value)
    }

    const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        try {
            const res = await axios.put(`${publicAPI}/api/blogs/${id}?populate[0]=imagedata.image`, {
                data: formEdit,
            })
            console.log(res)
        }
        catch (error) {
            console.log('error', error)
        }
    }

    const removeImage = (index: number) => {
        const newImages = [...formEdit.imagedata];
        newImages.splice(index, 1);
        setFormEdit({ ...formEdit, imagedata: newImages });
    };

    const handleChangeCaption = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {

        let newformWrite = {
            ...formEdit,
        }
        newformWrite.imagedata[index].caption[0].children[0].text = e.target.value
        setFormEdit(newformWrite)
    }


    const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('upload', e.target.files)
        var formData = new FormData()

        formData.append('files', e.target.files[0], e.target.files[0].name);
        let { data } = await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/upload`, formData)
        console.log('data', data)
        console.log('formData', formData)

        let newimagedata = formEdit.imagedata

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
            ...formEdit,
            imagedata: newimagedata
        }

        setFormEdit(newformWrite)

        console.log('formWrite', newformWrite)

    }
    const images =
        formEdit.imagedata?.map((x, index) => x.image?.data?.attributes.url &&
            <div key={index} className="my-2">
                {index}
                <img
                    src={publicAPI + x.image?.data.attributes.url}
                    className="my-2"
                />
                <div>
                    <input
                        type="text"
                        value={x.caption[0].children[0].text}
                        id="images"
                        name="images"
                        onChange={(e) => handleChangeCaption(e, index)}
                        className="w-full my-2 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                        autoComplete="off"
                        placeholder="แคปชั่น" />
                </div>
                <button
                    className="bg-red-500 text-white my-2"
                    onClick={() => removeImage(index)} >
                    Remove
                </button>
            </div>
        )

    return (
        <div className="container mx-auto px-4">
            เขียนสรุป
            <form onSubmit={handleSubmit} className="grid w-1/2 mx-2 mb-12 gap-4">
                <div className="mb-2">
                    <label htmlFor="Title" className="block text-gray-600">ชื่อเอกสาร</label>
                    <input type="text" id="Title" name="Title" onChange={handleChange} value={formEdit.Title} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" placeholder="ชื่อเอกสาร" />
                </div>
                <div className="mb-2">
                    <label htmlFor="nameTH" className="block text-gray-600">ชื่อรายวิชาภาษาไทย</label>
                    <input type="text" id="nameTH" name="nameTH" value={formEdit.nameTH} onChange={handleChange} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" placeholder="ชื่อรายวิชาภาษาไทย" />
                </div>
                <div className="mb-2">
                    <label htmlFor="nameENG" className="block text-gray-600">ชื่อรายวิชาภาษาอังกฤษ</label>
                    <input type="text" id="nameENG" name="nameENG" value={formEdit.nameENG} onChange={handleChange} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" placeholder="ชื่อรายวิชาภาษาอังกฤษ" />
                </div>
                <div className="mb-2">
                    <label htmlFor="Course_Code" className="block text-gray-600">รหัสวิชา</label>
                    <input type="text" id="Course_Code" name="Course_Code" value={formEdit.Course_Code} onChange={handleChange} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" placeholder="รหัสวิชา" />
                </div>
                <div className="mb-2">
                    <label htmlFor="Teacher" className="block text-gray-600">ชื่อผู้สอน</label>
                    <input type="text" id="Teacher" name="Teacher" value={formEdit.Teacher} onChange={handleChange} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" placeholder="ชื่อผู้สอน" />
                </div>
                <div className="mb-2">
                    <label htmlFor="University" className="block text-gray-600">มหาวิทยาลัย</label>
                    <input type="text" id="University" name="University" value={formEdit.University} onChange={handleChange} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" placeholder="มหาวิทยาลัย" />
                </div>
                <div className="mb-2">
                    <label htmlFor="Year" className="block text-gray-600">ปีการศึกษา</label>
                    <input type="number" id="Year" name="Year" value={formEdit.Year} onChange={handleChange} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" placeholder="ปีการศึกษา" />
                </div>
                <div className="mb-2">
                    <label htmlFor="Term" className="block text-gray-600">เทอม</label>
                    <input type="number" id="Term" name="Term" value={formEdit.Term} onChange={handleChange} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" placeholder="เทอม" />
                </div>
                <div className="mb-2">
                    <label htmlFor="Description" className="block text-gray-600">รายละเอียดสรุป</label>
                    <textarea id="Description" name="Description" value={formEdit.Description} onChange={handleChange} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" placeholder="รายละเอียดสรุป" />
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
                    {images}
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