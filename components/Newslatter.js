"use client"

import { useState } from "react"

const Newslatter = () => {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)

    const [errorName, setErrorName] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()

        name ? setErrorName(false) : setErrorName(true)
        email ? setErrorEmail(false) : setErrorEmail(true)

        console.log('name =>', name)
        console.log('email =>', email)
    }

    return (
        <div className='flex xl:flex-row flex-col items-center justify-center xl:py-24 lg:py-20 md:py-16 py-12 bg-white xl:gap-12 lg:gap-8 md:gap-6 gap-4 lg:px-0 px-4'>
            <h2 className='lg:text-3xl md:text-2xl sm:text-lg text-base font-extralight'>Request an introduction</h2>
            <form onSubmit={handleFormSubmit} className='flex md:flex-row flex-col items-center justify-center gap-6'>
                <div className="w-full relative">
                    <input onChange={handleChangeName} className='outline-none xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs font-extralight border-b border-green-500 p-2' placeholder='Name'/>
                    {
                        errorName ? <p className="absolute text-xs font-extralight text-red-500 mt-2">Enter your name *</p> : null
                    }
                </div>
                <div className="w-full relative">
                    <input onChange={handleChangeEmail} className='outline-none xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs font-extralight border-b border-green-500 p-2' placeholder='Email Address'/>
                    {
                        errorEmail ? <p className="absolute text-xs font-extralight text-red-500 mt-2">Enter your email *</p> : null
                    }
                </div>
                <button type="submit" className="bg-green-500 text-white px-6 lg:py-3 py-2 lg:text-lg md:text-md sm:text-sm text-xs font-extralight flex items-center justify-center gap-3 transform translate duration-150 delay-150 border border-green-500 hover:bg-transparent hover:text-green-500 xl:w-auto w-full">
                    <div>SUBMIT</div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                    </div>
                </button>
            </form>
        </div>
    )
}

export default Newslatter