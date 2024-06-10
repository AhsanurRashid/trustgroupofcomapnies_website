import React from 'react'

const Banner = () => {
  return (
    <div className='bg_banner relative w-full lg:h-80 md:h-60 sm:h-40 h-32'>
        <div className='bg-blur absolute inset-0 flex items-center justify-center w-full h-full'>
            <div className='lg:mr-12 md:mr-6 mr-4'>
                <h1 className='lg:text-8xl md:text-6xl sm:text-4xl text-2xl text-end font-extralight'>TRUST</h1>
                <p className='lg:text-3xl md:text-lg sm:text-base text-sm text-end font-extralight'>GROUP OF COMPANY</p>
            </div>
            <div className='lg:h-44 md:h-32 sm:h-24 h-20 w-[1px] bg-green-500'></div>
            <div className='lg:ml-12 md:ml-6 ml-4'>
                <h3 className='lg:text-3xl md:text-2xl sm:text-lg text-sm md:text-end text-start font-extralight'>Your Trust is Our Priority</h3>
            </div>
        </div>
    </div>
  )
}

export default Banner