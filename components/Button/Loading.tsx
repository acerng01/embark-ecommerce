import React from 'react'
import { BiLoader } from "react-icons/bi";

const Loading = () => {
  return (
    <div className='flex mt-24 justify-center items-center'>
        <BiLoader className='animate-spin' size={64}/>
    </div>
  )
}

export default Loading