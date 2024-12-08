import { SlidersHorizontal } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Store = () => {
  return (
<div  className="max-w-screen-2xl mx-auto">
    <div className='  flex justify-center lg:justify-between '>
        <div className='pt-8 px-10 '>{/*daddy div for left side content */}
            <div className=''>
                <span className='text-2xl font-semibold my-6'>Find a Nike Store</span>
            </div>

            <div className="flex items-center gap-x-4 pr-4 ">

            {/* input div  */}
            <div className=" flex my-8 items-center"> 
                
            <input className="store-inp outline-none w-96 text-center  py-3 rounded-lg relative " type="text" placeholder="Search Location"/>


            <svg className="absolute pl-2  block text-gray-500 " width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_20)">
            <path d="M13.962 16.296C12.916 16.9224 11.7192 17.2521 10.5 17.25C9.6134 17.2512 8.7353 17.0772 7.91618 16.7379C7.09707 16.3986 6.35308 15.9008 5.72701 15.273C5.09924 14.6469 4.6014 13.9029 4.26212 13.0838C3.92284 12.2647 3.7488 11.3866 3.75001 10.5C3.75001 8.63601 4.50501 6.94901 5.72701 5.72701C6.35308 5.09924 7.09707 4.6014 7.91618 4.26212C8.7353 3.92284 9.6134 3.7488 10.5 3.75001C12.364 3.75001 14.051 4.50501 15.273 5.72701C15.9008 6.35308 16.3986 7.09707 16.7379 7.91618C17.0772 8.7353 17.2512 9.6134 17.25 10.5C17.2517 11.6974 16.9338 12.8736 16.329 13.907C15.812 14.789 15.895 15.895 16.618 16.618L20.471 20.471" stroke="#111111" stroke-width="1.5"/>
            </g>
            <defs>
            <clipPath id="clip0_1_20">
            <rect width="24" height="24" fill="white"/>
            </clipPath>
            </defs>
            </svg>

            </div>

         </div>


              <div className='flex justify-between items-center pb-5 px-4 py-2'>
                <div>
                    <span className='text-gray-500'>15 Stores Near You</span>
                </div>
                <div className='filter flex  items-center'>
                    <div><span className='pr-4'>Filter</span> </div>
                    <div className='text-sm'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sliders-horizontal"><line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/></svg>
                    </div>


            </div>
               
            </div>
                <hr />

                <div className='my-5'>
                    <span className='font-semibold '>Nike NYC - House of Innovation 000</span><br />
                    <span className='text-gray-500'>650 5th Ave.</span><br />
                    <span className='text-gray-500'>New York, NY, 10019, US</span><br />
                    <span className='text-red-500'>Closed <span className='text-gray-500'>• Opens at 11:00 am</span></span>
                </div>
                <hr />



                <div className='my-7'>
                    <span className='font-semibold '>Nike NYC - House of Innovation 000</span><br />
                    <span className='text-gray-500'>650 5th Ave.</span><br />
                    <span className='text-gray-500'>New York, NY, 10019, US</span><br />
                    <span className='text-red-500'>Closed <span className='text-gray-500'>• Opens at 11:00 am</span></span>
                </div>
                <hr />



                <div className='my-5'>
                    <span className='font-semibold '>Nike By Upper East Side</span><br />
                    <span className='text-gray-500'>1131 3rd Ave.</span><br />
                    <span className='text-gray-500'>New York, NY, 10065, US</span><br />
                    <span className='text-red-500'>Closed <span className='text-gray-500'>• Opens at 11:00 am</span></span>
                </div>
                <hr />



                <div className='my-5'>
                    <span className='font-semibold '>Nike By Flatiron </span><br />
                    <span className='text-gray-500'>156 Fifth Ave.</span><br />
                    <span className='text-gray-500'>New York, NY, 10010, US</span><br />
                    <span className='text-red-500'>Closed <span className='text-gray-500'>• Opens at 11:00 am</span></span>
                </div>
                <hr />
                
                <div className='my-7'>
                    <span className='underline text-black font-semibold text-lg '>View All Stores</span>
                </div>


        </div>


        <div className='mt-2'>
            <Image
            className='hidden lg:block'
            src={'/stores.png'}
            alt='maps'
            width={900}
            height={700}
            />
        </div>

     </div>

       

 </div>
  )
}

export default Store