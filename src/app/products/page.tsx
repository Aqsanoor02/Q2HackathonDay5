import Image from 'next/image'
import React from 'react'

const Products = () => {
  return (
    <div className="max-w-screen-2xl mx-auto mb-10" >

        <div className='flex justify-between mt-16 px-5  lg:px-16 xl:px-20 mb-10'>
            <div className='text-2xl '>
                <span>New(500)</span>
            </div>
            <div className='flex   items-center'>
            <div className=' w-32 h-7 flex text-sm  md:text-base font-normal  items-center '>
                    <div><span className='pr-2'>Hide Filter</span> </div>
                    <div className='text-sm'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sliders-horizontal"><line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/></svg>
                    </div>
            </div>
            <div className=' w-24 h-7 flex text-sm  md:text-base font-normal items-center'>
                    <div><span className='pr-1'>Sort By</span> </div>
                    <div className='text-sm'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m6 9 6 6 6-6"/></svg>
                    </div>
            </div>
            </div>
        </div>


        {/* ======left side========== */}
        <div className='flex justify-center'>
            <div className='hidden md:block md:px-5 lg:px-14'>
            <section className=' w-44 lg:w-60 h-[490px] overflow-auto  px-4 '>
                <ul className='product-ul font-medium py-5'>
                    <li>Shoes</li>
                    <li>Sports Bra</li>
                    <li>Tops & T-Shirts</li>
                    <li>Hoddies & Sweetshirts</li>
                    <li>Jackets</li>
                    <li>Trousers & Tights</li>
                    <li>Shorts</li>
                    <li>Tracksuits</li>
                    <li>Jumpsuits & Rompers</li>
                    <li>Skirts & Dresses</li>
                    <li>Socks</li>
                    <li>Acccessories & Equipment</li>
                    <li>Sneaker</li>
                    <li>Toe</li>
                </ul>
            </section>

            <section className='mt-10'>
                <div className='flex justify-between border-t border-solid border-gray-300 pt-5'>
                    <div> <span className='text-lg font-medium '>Gender</span> </div>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m18 15-6-6-6 6"/></svg></span>
                </div>

                <div className='mt-6 pl-3'>
                    <input className='gender-inp' type="checkbox" name="" id="" /><span className='pl-3'>Male</span><br />
                    <input className='gender-inp' type="checkbox" name="" id="" /><span className='pl-3'>Female</span><br />
                    <input className='gender-inp' type="checkbox" name="" id="" /><span className='pl-3'>Unisex</span><br />

                </div>




                <div className='flex justify-between border-t border-solid border-gray-300 pt-5 mt-10'>
                    <div> <span className='text-lg font-medium '>Kids</span> </div>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m18 15-6-6-6 6"/></svg></span>
                </div>

                <div className='mt-6 pl-3'>
                    <input className='gender-inp' type="checkbox" name="" id="" /><span className='pl-3'>Boys</span><br />
                    <input className='gender-inp' type="checkbox" name="" id="" /><span className='pl-3'>Girls</span><br />
                   

                </div>



                <div className='flex justify-between border-t border-solid border-gray-300 pt-5 mt-10'>
                    <div> <span className='text-lg font-medium '>Shop By Price</span> </div>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m18 15-6-6-6 6"/></svg></span>
                </div>

                <div className='mt-6 pl-3'>
                    <input className='gender-inp' type="checkbox" name="" id="" /><span className='pl-3'>Under ₹ 2 500.00</span><br />
                    <input className='gender-inp' type="checkbox" name="" id="" /><span className='pl-3'>₹ 2 501.00 - ₹ </span><br />
                   

                </div>



            </section>
            </div>



            <section className='flex justify-evenly flex-wrap'>
            <Image
                src={'/shop-shoe.png'}
                alt=''
                width={250}
                height={250}/>



<Image
                src={'/Frame (1).png'}
                alt=''
                width={250}
                height={250}/>



<Image
                src={'/Frame (2).png'}
                alt=''
                width={250}
                height={250}/>



<Image
                src={'/Frame (3).png'}
                alt=''
                width={250}
                height={250}/>



<Image
                src={'/Frame (4).png'}
                alt=''
                width={250}
                height={250}/>




<Image
                src={'/Frame (5).png'}
                alt=''
                width={250}
                height={250}/>




<Image
                src={'/Frame (6).png'}
                alt=''
                width={250}
                height={250}/>





<Image
                src={'/Frame (7).png'}
                alt=''
                width={250}
                height={250}/>




<Image
                src={'/Frame (8).png'}
                alt=''
                width={250}
                height={250}/>





<Image
                src={'/Frame (9).png'}
                alt=''
                width={250}
                height={250}/>




<Image
                src={'/Frame (10).png'}
                alt=''
                width={250}
                height={250}/>





<Image
                src={'/Frame (11).png'}
                alt=''
                width={250}
                height={250}/>





<Image
                src={'/Frame (12).png'}
                alt=''
                width={250}
                height={250}/>




<Image
                src={'/Frame (13).png'}
                alt=''
                width={250}
                height={250}/>




<Image
                src={'/Frame (14).png'}
                alt=''
                width={250}
                height={250}/>



<Image
                src={'/Frame (15).png'}
                alt=''
                width={250}
                height={250}/>




<Image
                src={'/Frame (16).png'}
                alt=''
                width={250}
                height={250}/>




<Image
                src={'/Frame (17).png'}
                alt=''
                width={250}
                height={250}/>




<Image
                src={'/Frame (18).png'}
                alt=''
                width={250}
                height={250}/>



<Image
                src={'/Frame (19).png'}
                alt=''
                width={250}
                height={250}/>




<Image
                src={'/Frame (20).png'}
                alt=''
                width={250}
                height={250}/>




<Image
                src={'/Frame (21).png'}
                alt=''
                width={250}
                height={250}/>




<Image
                src={'/Frame (22).png'}
                alt=''
                width={250}
                height={250}/>




<Image
                src={'/Frame (23).png'}
                alt=''
                width={250}
                height={250}/>



<Image
                src={'/Frame (24).png'}
                alt=''
                width={250}
                height={250}/>



<Image
                src={'/Frame (25).png'}
                alt=''
                width={250}
                height={250}/>


<Image
                src={'/Frame (26).png'}
                alt=''
                width={250}
                height={250}/>



<Image
                src={'/Frame (27).png'}
                alt=''
                width={250}
                height={250}/>



<Image
                src={'/Frame (28).png'}
                alt=''
                width={250}
                height={250}/>




<Image
                src={'/Frame (29).png'}
                alt=''
                width={250}
                height={250}/>



            </section>
        </div>

    </div>
  )
}

export default Products