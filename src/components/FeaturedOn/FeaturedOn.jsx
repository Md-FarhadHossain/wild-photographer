import React from 'react'
import featured1 from '../../assets/featured-1.png'
import featured2 from '../../assets/featured-2.png'
import featured3 from '../../assets/featured-3.png'
import featured4 from '../../assets/featured-4.png'
import featured5 from '../../assets/featured-5.png'

const FeaturedOn = () => {
  return (
    <div className='container mx-auto py-16'>
        <h1 className="text-4xl font-bold mb-8 mt-20 text-center">Featured On</h1>
        <div className='flex justify-between items-center flex-wrap'>
            <img className='w-[10rem] grayscale hover:grayscale-0' src={featured1} alt="" />
            <img className='w-[10rem] grayscale hover:grayscale-0' src={featured2} alt="" />
            <img className='w-[10rem] grayscale hover:grayscale-0' src={featured3} alt="" />
            <img className='w-[10rem] grayscale hover:grayscale-0' src={featured4} alt="" />
            <img className='w-[10rem] grayscale hover:grayscale-0' src={featured5} alt="" />
        </div>
    </div>
  )
}

export default FeaturedOn