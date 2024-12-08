import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Card = () => {
  return (
    <div >
        <div className='flex justify-between mt-28 px-10 lg:px-16'>
            <div>
                <span className='text-lg font-semibold'>Best of Air Max</span>
            </div>

            <div className='flex items-center justify-between'>
                <span>shop</span>
                <div className='p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800 mx-3'>
                <ChevronLeft />
                </div>
                <div className='p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800'>
                <ChevronRight />
                </div>
            </div>

        </div>


        <div className='flex justify-evenly flex-wrap gap-x-4 px-8 mt-10'>
         
        <div>
             <div className='w-72 h-72 mb-6 overflow-hidden'>
                <Image
                className='hover:scale-105 duration-300'
                src={'/shoes1.png'}
                alt=''
                width={300}
                height={300}/> <br />
     
            </div>
            <div className='flex justify-between items-center px-2 pt-2'>
                  
                        <div className='text-base'>Nike Air Max Pulse</div> 
                         <div className='text'>₹ 13 995</div>
             </div>
                 
                <div>
                      
                      <span className='text-sm text-gray-700 px-2 '>Women's Shoes</span>
                </div>

        </div>


           
        <div>
             <div className='w-72 h-72 mb-6 overflow-hidden'>
                <Image
                className='hover:scale-105 duration-300'
                src={'/shoes1.png'}
                alt=''
                width={300}
                height={300}/> <br />
     
            </div>
            <div className='flex justify-between items-center px-2 pt-2'>
                  
                        <div className='text-base'>Nike Air Max Pulse</div> 
                         <div className='text'>₹ 13 995</div>
             </div>
                 
                <div>
                      
                      <span className='text-sm text-gray-700 px-2 '>Men's Shoes</span>
                </div>

        </div>



        <div>
             <div className='w-72 h-72 mb-6 overflow-hidden'>
                <Image
                className='hover:scale-105 duration-300'
                src={'/Image2.png'}
                alt=''
                width={300}
                height={300}/> <br />
     
            </div>
            <div className='flex justify-between items-center px-2 pt-2'>
                  
                        <div className='text-base'>Nike Air Max Pulse</div> 
                         <div className='text'>₹ 16 996</div>
             </div>
                 
                <div>
                      
                      <span className='text-sm text-gray-700 px-2 '>Women's Shoes</span>
                </div>

        </div>



        <div>
             <div className='w-72 h-72 mb-6 overflow-hidden'>
                <Image
                className='hover:scale-105 duration-300'
                src={'/Image2.png'}
                alt=''
                width={300}
                height={300}/> <br />
     
            </div>
            <div className='flex justify-between px-2 pt-2'>
                  
                        <div className='text-base'>Nike Air Max Pulse</div> 
                         <div className='text'>₹ 16 996</div>
             </div>
                 
                <div>
                      
                      <span className='text-sm text-gray-700 px-2 '>Men's Shoes</span>
                </div>

        </div>
           
            

            
        </div>


    </div>
  )
}

export default Card