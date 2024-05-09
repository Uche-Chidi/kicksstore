import React from 'react'
import Link from 'next/link'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <footer className='bg-[#159A9C] px-16 py-16 text-white relative'>
            <div className='flex  justify-between items-center'>
                <ul>
                    <p className='text-5xl'>KicksStore</p>
                </ul>

                <ul className='flex gap-10 items-center'>
                    <li>
                        <Link href='/catalog'>Catalog</Link>
                    </li>
                    <li>
                        <Link href='/delivery'>Delivery</Link>
                    </li>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                    <li>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>

                <ul className='flex gap-1 text-lg items-center'>
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
            </div>
            <hr className='border-2 my-10'/>
            <p className='text-center text-white'>Created by <Link href=''>George {new Date().getFullYear()}</Link></p>
        </footer >
    )
}

export default Footer