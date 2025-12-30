import React from 'react'
import { Instagram,Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <div className='bg-[rgba(15,15,15,1)] backdrop-blur-[10px] inset-shadow-sm inset-shadow-[]  items-center justify-between px-3 py-3 w-full z-20 bottom-0 fixed'>
            <hr className='border-gray-800 mt-2 mb-2' />
            <div className='flex items-center justify-around'>
                <div>
                    
                    <h1 className='font-bold text-orange-500 text-lg'>Vivek Kumar</h1>
                    <p className='text-gray-300 text-sm'>Product Management & UX Strategy</p>
                </div>
                <div className='flex gap-4 text-gray-200 '>
                    <Instagram className='hover:text-orange-500'/>
                    <Linkedin className='hover:text-orange-500' />
                </div>
            </div>
             <hr className='border-gray-800 mt-3 mb-2' />
            <div>
                <p className='text-gray-300 text-sm text-center'>© 2023 Vivek Kumar</p>
            </div>
        </div>
    )
}

export default Footer
