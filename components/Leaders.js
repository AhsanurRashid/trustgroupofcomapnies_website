import Image from 'next/image'

import Ceo from '@/assets/images/leaders/ceo.jpeg'
import Md from '@/assets/images/leaders/md.jpeg'

const Leaders = () => {
  return (
    <div className="border-t border-green-500 bg_banner">
        <div className='flex md:flex-row flex-col items-center justify-center gap-8 py-8 bg-blur'>
            <div>
                <div className='relative w-[275px] h-[340px] mb-3 leader-img'>
                    <Image 
                        src={Ceo}
                        alt="Ceo"
                        className='object-fill'
                        fill
                        priority
                    />
                </div>
                <h4 className='text-md font-semibold text-gray-800 text-center'>Advocate Kazi Shafiqul Alam (CIP)</h4>
                <p className='text-md font-light text-gray-800 text-center'>Chairman</p>  
            </div>
            <div> 
                <div className='relative w-[275px] h-[340px] mb-3 leader-img'>
                    <Image 
                        src={Md}
                        alt="Md"
                        className='object-fill'
                        fill
                        priority
                    />
                </div>
                <h4 className='text-md font-semibold text-gray-800 text-center'>Rafiqul Alam</h4>
                <p className='text-md font-light text-gray-800 text-center'>Managing Director</p> 
            </div>
        </div>
    </div>
  )
}

export default Leaders