import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <div className="max-w-3xl mx-auto p-4">
            <Link href="/read" >{"< Back"}</Link>
            <div className='relative w-full h-96 overflow-hidden rounded-lg mt-5'>
                <Image layout='fill' objectFit='cover' src={''} alt={''} ></Image>
            </div>
            <div className='mt-4'>
                <h1 className='text-3xl font-semibold'>
                    {"หัวข้อบล็อค"}
                </h1>
                <p className='text-gray-600 mt-2'>
                    {"รายละเอียด"}
                </p>
                <div className='mt-4 flex items-center text-gray-400'>
                    <span className='text-sm'>
                        Published on {""}
                        {"23-24-2323"}
                    </span>
                </div>
            </div>
        </div>
    )
}
