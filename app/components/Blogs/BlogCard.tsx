'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { publicAPI } from '@/app/API/page'

export default function BlogCard({ blog }: any) {

    ///ย่อข้อความใน Blog
    const truncateBlogDesc =
        blog.attributes.Description.length > 80
            ? blog.attributes.Description.substring(0, 80) + "..."
            : blog.attributes.Description

    ///นำรูปแรกใน api มาแสดง
    const firstimageUrl = publicAPI + blog.attributes.imagedata[0].image.data.attributes.url

    console.log('blog', blog)
    return (
        <div className='rounded-lg shadow-md p-4 mb-2 overflow-hidden border border-gray-600 cursor-pointer'>
            <Link href={`/blog/${blog.id}`}>
                <div className='relative w-full h-1 z-0 ' style={{ paddingBottom: "100%" }}>
                    <Image
                        layout='fill'
                        objectFit='cover'
                        src={firstimageUrl}
                        alt={""}
                        className='rounded-t-lg'>
                    </Image>
                </div>
                <div className='p-2'>
                    <h2 className='text-xl font-semibold mb-2 overflow-ellipsis'>
                        {blog.attributes.Title}
                    </h2>
                    <p className='text-gray-600'>
                        {truncateBlogDesc}
                    </p>
                </div>
            </Link>
        </div>
    )
}
