import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function BlogCard() {
    return (
        <div className='rounded-lg shadow-md p-4 mb-4 overflow-hidden border border-gray-600 cursor-pointer'>
            <Link href={"/blog/23"}>
                <div>
                    <Image
                        layout='fill'
                        objectFit='cover'
                        src={""}
                        alt={''}
                        className='rounded-t-lg'>
                    </Image>
                </div>
                <div className='p-2'>
                    <h2 className='text-xl font-semibold mb-2 overflow-ellipsis'>
                        หัวข้อบล็อค
                    </h2>
                    <p className='text-gray-600'>
                        รายละเอียด
                    </p>
                </div>
            </Link>
        </div>
    )
}
