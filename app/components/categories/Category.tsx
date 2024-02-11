'use client'

import React from 'react'

export default function Category({ cat }: any) {
    return (
        <div
            onClick={() => { }}
            className='bg-[#af8533] p-4 rounded-lg shadow-md cursor-pointer'>
            title
            {cat.attributes.Title}
        </div>
    )
}
