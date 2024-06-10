import Image from 'next/image'
import logo from '@/assets/images/logo.jpeg'

import NavbarForMobile from '@/components/NavbarForMobile'

const Header = () => {
  return (
    <div className='flex items-center justify-between'>
      <Image 
        className='lg:block hidden'
        src={logo}
        alt="logo"
        width={100}
        height={100}
        priority
      />
      <Image 
        className='lg:hidden block'
        src={logo}
        alt="logo"
        width={60}
        height={60}
        priority
      />
      <div className='lg:flex hidden items-center justify-center gap-6 divide-x'>
        <div className='lg:text-lg text-base text-white uppercase font-light cursor-pointer transform translate duration-75 delay-75 ease-in-out hover:text-gray-300'>about</div>
        <div className='lg:text-lg text-base text-white uppercase font-light pl-3 cursor-pointer transform translate duration-75 delay-75 ease-in-out hover:text-gray-300'>projects</div>
        <div className='lg:text-lg text-base text-white uppercase font-light pl-3 cursor-pointer transform translate duration-75 delay-75 ease-in-out hover:text-gray-300'>contact</div>
      </div>
      <NavbarForMobile />
    </div>
  )
}

export default Header