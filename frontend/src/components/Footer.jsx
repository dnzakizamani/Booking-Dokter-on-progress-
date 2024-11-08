import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            {/* ---------- Left ---------- */}
            <div className="">
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 loading-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus fuga pariatur dolorum nihil debitis nam similique dicta porro eveniet saepe, doloribus laboriosam ab placeat mollitia sed. Iure dolores quae tempore?</p>
            </div>
            {/* ---------- Center ---------- */}
            <div className="">
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            {/* ---------- Right ---------- */}
            <div className="">
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>0812354984951</li>
                    <li>zakizamaniaza@gmail.com</li>
                </ul>
            </div>
        </div>
        {/* --------Copyright----------- */}
        <div className="">
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ Zaki - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer