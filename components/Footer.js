import Image from 'next/image'
import logo from '@/assets/images/logo.jpeg'

const Footer = () => {
  return (
    <div className='bg_banner'>
        <div className='bg-blur-four'>
            <div className='grid grid-cols-3 w-[80%] mx-auto gap-12 py-20'>
                <div className='flex items-center justify-start'>
                    <Image 
                        src={logo}
                        alt="logo"
                        width={150}
                        height={150}
                        priority
                    />
                </div>
                
                <div>
                    <ul className='flex flex-col gap-6 text-xl uppercase font-extralight'>
                        <li className='text-white text-center cursor-pointer transform translate duration-75 delay-75 ease-in-out hover:text-gray-300'>
                            <a href=''>about us</a>
                        </li>
                        <li className='text-white text-center cursor-pointer transform translate duration-75 delay-75 ease-in-out hover:text-gray-300'>
                            <a href=''>projects</a>
                        </li>
                        <li className='text-white text-center cursor-pointer transform translate duration-75 delay-75 ease-in-out hover:text-gray-300'>
                            <a href=''>organizations</a>
                        </li>
                        <li className='text-white text-center cursor-pointer transform translate duration-75 delay-75 ease-in-out hover:text-gray-300'>
                            <a href=''>team</a>
                        </li>
                        <li className='text-white text-center cursor-pointer transform translate duration-75 delay-75 ease-in-out hover:text-gray-300'>
                            <a href=''>contact</a>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center justify-end gap-4'>
                    <div className='w-16 h-16 cursor-pointer'>
                    <svg className='w-full h-full' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
                    <linearGradient id="awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1" x1="6.228" x2="42.077" y1="4.896" y2="43.432" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0d61a9"></stop><stop offset="1" stop-color="#16528c"></stop></linearGradient><path fill="url(#awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1)" d="M42,40c0,1.105-0.895,2-2,2H8c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h32	c1.105,0,2,0.895,2,2V40z"></path><path d="M25,38V27h-4v-6h4v-2.138c0-5.042,2.666-7.818,7.505-7.818c1.995,0,3.077,0.14,3.598,0.208	l0.858,0.111L37,12.224L37,17h-3.635C32.237,17,32,18.378,32,19.535V21h4.723l-0.928,6H32v11H25z" opacity=".05"></path><path d="M25.5,37.5v-11h-4v-5h4v-2.638c0-4.788,2.422-7.318,7.005-7.318c1.971,0,3.03,0.138,3.54,0.204	l0.436,0.057l0.02,0.442V16.5h-3.135c-1.623,0-1.865,1.901-1.865,3.035V21.5h4.64l-0.773,5H31.5v11H25.5z" opacity=".07"></path><path fill="#fff" d="M33.365,16H36v-3.754c-0.492-0.064-1.531-0.203-3.495-0.203c-4.101,0-6.505,2.08-6.505,6.819V22h-4v4	h4v11h5V26h3.938l0.618-4H31v-2.465C31,17.661,31.612,16,33.365,16z"></path>
                    </svg>
                    </div>
                    <div className='w-16 h-16 cursor-pointer'>
                    <svg className='w-full h-full' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
                    <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                    </svg>
                    </div>
                </div>
            </div>
            <p className='text-sm font-extralight text-gray-500 text-center py-2 border-t border-gray-800'>Copyright © 2024 Trust Group of Company.</p>
        </div>
    </div>
  )
}

export default Footer