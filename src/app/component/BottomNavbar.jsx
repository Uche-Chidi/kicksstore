import Link from 'next/link'
import React from 'react'
import { IoCartOutline } from 'react-icons/io5'

export const BottomNavbar = () => {
  const cartVal = 0
  return (
    <nav className='flex items-center justify-between  px-16 py-8'>
      <ul className='flex items-center gap-10'>
        <li className='text-5xl font-bold'>
          <Link href='/'>KicksStore</Link>
        </li>
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

      <ul className='flex gap-4 items-center text-lg'>
        <li>Cart</li>
        <li><IoCartOutline /></li>
        <li className='bg-[#159A9C] text-white rounded-full px-3 py-1 items-center font-mono'>{cartVal}</li>
      </ul>
    </nav>
  )
}