import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import image from '../../assets/404page.jpg'
const ErrorPage = () => {
  return (
    <div>
        <div className='h-[15vh]'>
        <Navbar />
        </div>
        <div className='h-[70vh]'>
            <img className='w-full h-full object-contain' src={image} alt="" />
        </div>
    </div>
  )
}

export default ErrorPage