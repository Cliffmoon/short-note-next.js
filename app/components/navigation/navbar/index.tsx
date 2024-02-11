'User clinet'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Button from "./Button";
import Image from 'next/image'


export default function Navbar() {
    return (
        <div className="sticky top-0 w-[100%] shadow bg-white">
            <div className="header flex w-[80%] justify-between m-auto py-[15px]">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between py-4">
                        <Link href="/">
                            <Image
                                src={'/images/Logo - Short note.png'}
                                alt="Logo"
                                width={100}
                                height={50}
                            />

                        </Link>
                        <ul className="hidden sm:flex sm:items-center">
                            <li><Link href="/read" className="text-gray-800 text-sm font-semibold hover:text-blue-600 mr-14">อ่านสรุป</Link></li>
                            <li><Link href="/write" className="text-gray-800 text-sm font-semibold hover:text-blue-600 mr-14">เขียนสรุป</Link></li>
                            <li><Link href="/help" className="text-gray-800 text-sm font-semibold hover:text-blue-600 mr-14">ช่วยเหลือ</Link></li>
                            <Button />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}