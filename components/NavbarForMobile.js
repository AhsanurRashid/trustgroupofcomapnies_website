"use client";
import { useState } from "react";

const NavabarForMobile = () => {
  const [showNavbars, setShowNavbars] = useState(false)

  const handShowNavbars = () => {
    setShowNavbars((prevShowNavbars) => !prevShowNavbars)
  }

  const hanldeClickAboutSection = () => {
    const bannerSection = document.getElementById("about-section")
    if (bannerSection) {
      bannerSection.scrollIntoView({ behavior: "smooth" })
      handShowNavbars()
    }
  }

  const hanldeClickProjectSection = () => {
    const bannerSection = document.getElementById("projects-section")
    if (bannerSection) {
      bannerSection.scrollIntoView({ behavior: "smooth" })
      handShowNavbars()
    }
  }

  const hanldeClickContacttSection = () => {
    const bannerSection = document.getElementById("contact-section")
    if (bannerSection) {
      bannerSection.scrollIntoView({ behavior: "smooth" })
      handShowNavbars()
    }
  }

  return (
    <div className="lg:hidden block">
      {showNavbars ? null : (
        <div onClick={handShowNavbars} className="text-white cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      )}
      {showNavbars ? (
        <div className="fixed flex items-center justify-center bg-blur-four inset-0 w-full h-screen z-60">
          <div
            onClick={handShowNavbars}
            className="text-white cursor-pointer absolute top-10 right-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <div onClick={hanldeClickAboutSection} className="lg:text-lg text-base text-white uppercase font-light cursor-pointer transform translate duration-75 delay-75 ease-in-out hover:text-gray-300 border-b border-transparent hover:border-green-500">
              about
            </div>
            <div onClick={hanldeClickProjectSection} className="lg:text-lg text-base text-white uppercase font-light pl-3 cursor-pointer transform translate duration-75 delay-75 ease-in-out hover:text-gray-300 border-b border-transparent hover:border-green-500">
              projects
            </div>
            <div onClick={hanldeClickContacttSection} className="lg:text-lg text-base text-white uppercase font-light pl-3 cursor-pointer transform translate duration-75 delay-75 ease-in-out hover:text-gray-300 border-b border-transparent hover:border-green-500">
              contact
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavabarForMobile;
