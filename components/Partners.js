"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay } from 'swiper/modules';

import Image from 'next/image'

import partners from '@/utils/partners'

const Partners = () => {
  return (
    <div className="w-[80%] mx-auto py-20">
        <div className='flex items-center justify-center'>
            <h2 className='text-3xl font-extralight text-center mb-12 border-b border-green-500 pb-2 px-4'>Sister Concern</h2>
        </div>
        
        
        <Swiper slidesPerView={3}
            spaceBetween={50}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true} 
            modules={[Autoplay]}
        >
        { partners.map((item, index) => {
            return (
            <SwiperSlide key={`${item}_partner_${index}`}>
                <Image 
                    src={item?.src}
                    alt={item?.alt}
                    className='object-cover'
                    priority
                />
                <div className='text-lg font-extralight text-center'>{item?.title}</div>
            </SwiperSlide>
            )
        })}
        </Swiper>
    </div>
  )
}

export default Partners