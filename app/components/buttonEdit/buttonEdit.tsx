'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function buttonEdit() {

    const searchParams = useSearchParams()
    console.log(searchParams.get('blogById'))
    return (
        <div>buttonEdit</div>
    )
}
