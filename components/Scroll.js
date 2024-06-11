"use client"

const Scroll = () => {
    const scrollToBanner = () => {
        const bannerSection = document.getElementById('banner-section');
        if (bannerSection) {
          bannerSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <div onClick={scrollToBanner} className="absolute z-20 bottom-8 cursor-pointer text-white left-[50%] transform translate-x-[-50%]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
            </svg>
        </div>
    )
}

export default Scroll