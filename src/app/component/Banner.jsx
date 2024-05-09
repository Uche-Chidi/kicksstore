import React from 'react'
import styles from './banner.module.css'

export default function Banner() {
  return (
    <div className={styles.bhead}>
        <div>
            <h2 className='text-lg py-4 text-[#002333]'>
            {new Date().getHours() >= 12 ? "Goog afternoon" : new Date().getHours() >= 16 ? "Good evening" : 'Good morning'}, welcome to the KicksStore
            </h2>

            <p className='text-5xl text-slate-900 mt-6'>Making you stand taller and your steps bolder</p>

            <button className='text-3xl rounded-full bg-[#002333] text-white mt-20 cursor-pointer'>Check Our Catalogs</button>
        </div>
    </div>
  )
}
