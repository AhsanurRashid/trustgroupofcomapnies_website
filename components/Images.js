import Image from 'next/image'

import mainSliderImages from '@/utils/slider'

const Images = () => {
  return (
    <div className="flex items-center justify-center overflow-hidden">
        {
            mainSliderImages.map((item, index) => {
                return (
                    <div className='relative overflow-hidden w-[16.66%]  hover:w-[60%] h-[500px] transform transition duration-500 hover:scale-[1.05]' key={`${item}_two_${index}`}>
                        <Image 
                            src={item?.src}
                            alt={item?.alt}
                            className='object-fill z-10'
                            fill
                            priority
                            placeholder='blur'
                        />
                        <div className='absolute indent-0 w-full h-full bg-blur-three z-20 cursor-pointer'></div>
                        <div className='absolute inset-x-0 top-24 z-30 w-full border-t-2 border-green-500'>
                            <h2 className='ml-4 mt-4 text-xl font-extralight uppercase text-white'>{item?.title}</h2>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Images