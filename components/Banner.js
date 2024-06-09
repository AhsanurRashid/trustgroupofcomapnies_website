import React from 'react'

const Banner = () => {
  return (
    <div className='bg_banner relative w-full h-80'>
        <div className='bg-blur absolute inset-0 flex items-center justify-center w-full h-full'>
            <div className='mr-12'>
                <h1 className='text-8xl text-end font-extralight'>TRUST</h1>
                <p className='text-3xl text-end font-extralight'>GROUP OF COMPANY</p>
            </div>
            <div className='h-44 w-[1px] bg-green-500'></div>
            <div className='ml-12'>
                <h3 className='text-3xl text-end font-extralight'>Your Trust is Our Priority</h3>
            </div>
        </div>
    </div>
  )
}

export default Banner