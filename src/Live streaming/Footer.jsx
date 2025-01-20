import React from 'react'
import { Link } from 'react-router-dom'

const Footer
 = () => {
  return (
    <div className='w-full h-[200px] bg-gray-900 text-white flex justify-center flex-col items-center gap-8 '>
        <h1 className='text-2xl '>For more queries feel free to get in touch with us.</h1>
       <Link to={'/Contact'}><button className='border w-[200px] h-[50px] bg-[#4A2EB0] border-none rounded  text-[20px] hover:bg-white hover:text-black  '>Contact us</button></Link> 
    </div>
  )
}

export default Footer
