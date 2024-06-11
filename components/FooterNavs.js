"use client";

const FooterNavs = () => {
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
    const hanldeClickOrganizationSection = () => {
        const bannerSection = document.getElementById('organization-section');
        if (bannerSection) {
            bannerSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    const hanldeClickTeamSection = () => {
        const bannerSection = document.getElementById('team-section');
        if (bannerSection) {
            bannerSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <ul className="flex flex-col xl:gap-6 lg:gap-4 md:gap-3 gap-2 xl:text-xl lg:text-lg sm:text-sm text-xs uppercase font-extralight">
            <li className="text-white text-center cursor-pointer transform translate duration-75 delay-75 ease-in-out hover:text-gray-300">
                <p onClick={hanldeClickAboutSection}>about us</p>
            </li>
            <li className="text-white text-center cursor-pointer transform translate duration-75 delay-75 ease-in-out hover:text-gray-300">
                <p onClick={hanldeClickProjectSection}>projects</p>
            </li>
            <li className="text-white text-center cursor-pointer transform translate duration-75 delay-75 ease-in-out hover:text-gray-300">
                <p onClick={hanldeClickOrganizationSection}>organizations</p>
            </li>
            <li className="text-white text-center cursor-pointer transform translate duration-75 delay-75 ease-in-out hover:text-gray-300">
                <p onClick={hanldeClickTeamSection}>team</p>
            </li>
            <li className="text-white text-center cursor-pointer transform translate duration-75 delay-75 ease-in-out hover:text-gray-300">
                <p onClick={hanldeClickContacttSection}>contact</p>
            </li>
        </ul>
    )
}

export default FooterNavs
