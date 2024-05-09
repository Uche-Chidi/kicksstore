import Link from 'next/link'
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";




export const TopNavbar = () => {
  return (
    <nav className='bg-[#159A9C] text-white py-2 flex justify-between items-center text-lg px-16'>
        <ul className='flex gap-2 text-2xl'>
            <li>
                <Link href='tel:+2348103172537'>Call Us: +2348103172537</Link>
            </li>
            <li>
                <Link href='mailto:geoegeogwara@gmail.com'>Email: geoegeogwara@gmail.com</Link>
            </li>
        </ul>
        <ul className='flex gap-1 text-2lg'>
            <li>
                <Link href='http://www.instagram.com'>
                    <FaInstagram />
                </Link>
            </li>
            <li>
                <Link href='http://www.x.com'>
                    <FaTwitter />
                </Link>
            </li>
            <li>
                <Link href='http://www.youtube.com'>
                    <FaYoutube />
                </Link>
            </li>
            <li>
                <Link href='http://www.linkedin.com'>
                    <FaLinkedin />
                </Link>
            </li>
            <li>
                <Link href='http://www.github.com'>
                    <FaGithub />
                </Link>
            </li>
        </ul>
    </nav>
  )
}
