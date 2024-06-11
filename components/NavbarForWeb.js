"use client"

const NavbarForWeb = () => {
    const hanldeClickAboutSection = () => {
        const bannerSection = document.getElementById('about-section');
        if (bannerSection) {
            bannerSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    const hanldeClickProjectSection = () => {
        const bannerSection = document.getElementById('projects-section');
        if (bannerSection) {
            bannerSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    const hanldeClickContacttSection = () => {
        const bannerSection = document.getElementById('contact-section');
        if (bannerSection) {
            bannerSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <div className='lg:flex hidden items-center justify-center gap-6 divide-x'>
            <div onClick={hanldeClickAboutSection} className='lg:text-lg text-base text-white uppercase font-light cursor-pointer transform translate duration-75 delay-75 ease-in-out hover:text-gray-300'>about</div>
            <div onClick={hanldeClickProjectSection} className='lg:text-lg text-base text-white uppercase font-light pl-3 cursor-pointer transform translate duration-75 delay-75 ease-in-out hover:text-gray-300'>projects</div>
            <div onClick={hanldeClickContacttSection} className='lg:text-lg text-base text-white uppercase font-light pl-3 cursor-pointer transform translate duration-75 delay-75 ease-in-out hover:text-gray-300'>contact</div>
        </div>
    )
}

export default NavbarForWeb