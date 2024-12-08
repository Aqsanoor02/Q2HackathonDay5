import Image from 'next/image'
import React from 'react'

const Help = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className='form text-center my-6 ' >
                <span className='text-2xl font-semibold my-6 uppercase text-center'>get help</span>

                <div className='flex justify-center'>
                    <input className=' w-96 text-xs px-5  py-3 my-2  ' type="text" placeholder='What can we help you with?' /> <button className='relative right-10'>  <svg className="  pl-2 block top-3 right-[500px]  text-gray-400 " width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_20)">
                            <path d="M13.962 16.296C12.916 16.9224 11.7192 17.2521 10.5 17.25C9.6134 17.2512 8.7353 17.0772 7.91618 16.7379C7.09707 16.3986 6.35308 15.9008 5.72701 15.273C5.09924 14.6469 4.6014 13.9029 4.26212 13.0838C3.92284 12.2647 3.7488 11.3866 3.75001 10.5C3.75001 8.63601 4.50501 6.94901 5.72701 5.72701C6.35308 5.09924 7.09707 4.6014 7.91618 4.26212C8.7353 3.92284 9.6134 3.7488 10.5 3.75001C12.364 3.75001 14.051 4.50501 15.273 5.72701C15.9008 6.35308 16.3986 7.09707 16.7379 7.91618C17.0772 8.7353 17.2512 9.6134 17.25 10.5C17.2517 11.6974 16.9338 12.8736 16.329 13.907C15.812 14.789 15.895 15.895 16.618 16.618L20.471 20.471" stroke="#111111" stroke-width="1.5" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_20">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg></button>




                </div>


                <br />
            </div>

            <div className='flex'>
                <div className='faqs  px-5 lg:px-11'>

                    <div>

                        <span className='text-2xl font-semibold my-6 uppercase text-center'>WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</span><br /> <br />
                        <span >We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</span> <br /><br />

                    </div>
                    <div className='px-7 lg:px-14'>
                        <span>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</span><br /><br />
                        <span>If you enter your PAN information at checkout, `{`you'll`} be able to pay for your order with PayTM or a local credit or debit card.</span> <br /><br />
                        <span>Apple Pay</span> <br /><br />
                    </div>

                    <div>
                        <span><span className='underline font-semibold'>Nike Members</span> can store multiple debit or credit cards in their profile for faster checkout. If {`you're`} not already a Member,<br />  <span className='underline font-semibold'>join us</span> today.</span>
                    </div>
                    <div >
                        <button className="btn">JOIN US</button>
                        <button className="btn">SHOP NIKE</button>
                    </div>

                    {/* ==================faqs================= */}
                    <div className='flex'>
                        <div className='my-4 py-4'>
                            <div>

                            </div>
                            <div className='my-4'>
                                <span className='font-semibold text-xl '>FAQs</span>
                            </div>
                            <div>
                                <span className='font-semibold'>Does my card need international purchases enabled?</span><br />
                                <span>Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout <br /> if international purchases need to be enabled.</span> <br /><br />

                                <span>Please note, some banks may charge a small transaction fee for international orders.</span><br /><br />
                            </div>

                            <div>
                                <span className='font-semibold'>Can I pay for my order with multiple methods?</span><br />
                                <span>No, payment for Nike orders {`can't`} be split between multiple payment methods.</span> <br /><br />
                            </div>

                            <div>
                                <span className='font-semibold'>What payment method is accepted for SNKRS orders?</span><br />
                                <span>You can use any accepted credit card to pay for your SNKRS order.</span> <br /><br />
                            </div>

                            <div>
                                <span className='font-semibold'>Why {`don't`} I see Apple Pay as an option?</span><br />
                                <span>To see Apple Pay as an option in the Nike App or on Nike.com, {`you'll`} need to use a compatible Apple device running the latest <br /> OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, {`you'll`} need to use <br /> Safari to use Apple Pay on Nike.com.</span> <br /><br />
                            </div>

                            <div>
                                <span>Was this answer helpful?</span>
                            </div>
                            <div>
                                {/* div for thumbs Up */}
                            </div>
                            <div>
                                <span className='text-gray-500'>RELATED</span><br /><br />
                            </div>

                            <div className='underline font-semibold px-9'>
                                <span>WHAT ARE {`NIKE'S`} DELIVERY OPTIONS?</span> <br /><br />
                                <span>HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</span>
                            </div>

                        </div>

                    </div>



                </div>
                <div className='hidden lg:block'>
                    <Image
                        className=''
                        src={'/faqs.png'}
                        alt=' banner'
                        width={250}
                        height={1000}
                    />
                </div>
            </div>





        </div>
    )
}

export default Help