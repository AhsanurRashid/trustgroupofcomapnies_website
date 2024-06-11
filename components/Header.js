import Image from 'next/image'
import logo from '@/assets/images/logo.jpeg'

import NavbarForMobile from '@/components/NavbarForMobile'
import NavbarForWeb from '@/components/NavbarForWeb'

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
      <NavbarForWeb />
      <NavbarForMobile />
    </div>
  )
}

export default Header