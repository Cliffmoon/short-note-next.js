'use client'
import axios from 'axios'
import React, { useContext } from 'react'

export default async function ButtonDelete({ params }: any) {
    const blogID = await params.id
    const handleDelete = async (blogID: any) => {

        try {
            const res = await axios.delete(`http://127.0.0.1:1337/api/blogs/${blogID}`)
            console.log('Deleted data:', res.data);
            return res.data;
        } catch (err) {
            console.log('fetch error', err)
        }
    }
    return (
        <button
            onClick={() => handleDelete(blogID)}
            className='bg-red-600 text-white'>
            ลบ
        </button>
    )
}
