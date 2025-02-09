import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SignIn = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">


            <div className='img flex justify-center mt-10 mb-4'>
                <Image
                    className=''
                    src={'/signIn.png'}
                    alt='shoes banner'
                    width={450}
                    height={200}
                />
            </div>
            <div className='flex flex-col items-center place-self-center align-middle h-16 p-3 mb-6'>
            <div className=''> Your Account</div>
            <div className='flex justify-between h-auto w-auto space-x-4 '>
                <SignedIn>
                <UserButton/>
                <SignOutButton />
                </SignedIn>
            </div>
            </div>
           
            <SignedOut >
            <div className='flex justify-center'>
                <div className='form'>
                    <input className=' w-96 px-5  py-2 my-2' type="text" placeholder='Email Address' /> <br />

                    <input className=' w-96 px-5  py-2 my-2' type="text" placeholder='Password' />
                </div>
            </div>

            {/* ================more============= */}
            <div className='flex justify-center items-center '>
                <div className='flex justify-between items-center text-sm w-96'>
                    <div className='items-center flex py-4'>
                        <input type="checkbox" />
                        <span className='text-gray-500 px-2'>Keep me signed in</span>
                    </div>
                    <div>
                        <span className='text-gray-400'>Forgetton password?</span>
                    </div>
                </div>

            </div>

            <div className='flex justify-center'>
                <p className='text-gray-600 text-center text-[15px]' >By logging in, you agree to {`Nike's`} <span className='text-gray-500 underline'>Privacy Policy <br /> and Terms of Use.</span> </p>

            </div>


            <div className='flex justify-center place-self-center h-14 w-96 bg-black text-white py-3 rounded-lg mt-6 mb-3'>
                    
                        <SignInButton mode='modal'/>
                    
                 

            </div>
            <div className='flex justify-center items-center pb-5'>
                <span className='text-gray-500' >Not a member?<Link href={'/join'}><span className='text-black underline pl-1'> Join Us.</span></Link></span>
            </div>
            </SignedOut>





        </div>
    )
}

export default SignIn