"use client";
import { useState } from "react"
import Navbar from "./navbar"

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Navbar />
        </>
    );
}