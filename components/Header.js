import Image from 'next/image'
import logo from '@/assets/images/logo.jpeg'

const Header = () => {
  return (
    <div className='flex items-center justify-between'>
      <Image 
        src={logo}
        alt="logo"
        width={150}
        height={150}
        priority
      />
      <div className='flex items-center justify-center gap-6 divide-x'>
        <div className='lg:text-lg text-base text-white uppercase font-light cursor-pointer transform translate duration-75 delay-75 ease-in-out hover:text-gray-300'>about</div>
        <div className='lg:text-lg text-base text-white uppercase font-light pl-3 cursor-pointer transform translate duration-75 delay-75 ease-in-out hover:text-gray-300'>projects</div>
        <div className='lg:text-lg text-base text-white uppercase font-light pl-3 cursor-pointer transform translate duration-75 delay-75 ease-in-out hover:text-gray-300'>contact</div>
      </div>
    </div>
  )
}

export default Header