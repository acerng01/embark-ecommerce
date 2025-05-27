'use client'
import { useSearchParams } from 'next/navigation';
import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

const SuccessPage = () => {
    // const searchParams = useSearchParams()
    // const email = searchParams.get('email')
  return (
    <section className='mt-12 flex flex-col items-center gap-4 text-center'>
        <FaCheckCircle className='text-emerald-500' size={64}/>
        <p className='text-[3rem] font-bold text-emerald-500'>Order sent successfully!</p>
        <p className='text-[1.5rem]'>Please check your email!</p>
    </section>
  )
}

export default SuccessPage 