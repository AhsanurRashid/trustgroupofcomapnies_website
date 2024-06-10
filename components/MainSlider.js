"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';

import Image from 'next/image'

import mainSliderImages from '@/utils/slider'

const MainSlider = () => {
  return (
    <>
    <Swiper slidesPerView={1}
        spaceBetween={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true} 
        effect={'fade'}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
    >
      { mainSliderImages.map((item, index) => {
        return (
          <SwiperSlide key={`${item}_${index}`}>
            <div className='relative w-full xl:h-[100vh] lg:h-[80vh] md:h-[70vh] sm:h-[60vh] h-[50vh]'>
              <Image 
                src={item?.src}
                alt={item?.alt}
                className='object-fill z-10'
                fill
                priority
                placeholder='blur'
              />
              <div className='absolute indent-0 w-full h-full bg-blur-two z-20'></div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  </>
  )
}

export default MainSlider