import Image from 'next/image'
import React from 'react'



const Running = () => {
  return (
    <div >
        <div className='mt-28 mb-12'>
        <span className='text-xl font-semibold px-10 lg:px-16'>Featured</span>
        </div>
        <div className='flex justify-center px-10'>
        <Image
               
                src={'/running.png'}
                alt=''
                width={1200}
                height={600}/>
        </div>



        <div className='text-center text-black mt-16'>
        

        <span className=' text-3xl lg:text-5xl font-semibold uppercase '>step into what feels good</span><br /><br />

        <span>Cause everyone should know the feeling of running in that perfect pair.</span><br />

        <button className='btn '>Find Your Shoe</button>
        
    </div>








    </div>
  )
}

export default Running