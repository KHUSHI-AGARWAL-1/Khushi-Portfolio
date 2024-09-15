import React from 'react'
import { Mongodb, Nodejs, Profile, Reactjs, Javascript } from "../assets"

const Header = () => {
    return (
        <div className='w-full flex flex-col lg:flex-row px-8 md:px-10 gap-10 2xl:gap-20 py-20'>
            <div className='flex flex-col mb-20 lg:mb-0'
                data-aos='fade-down'
                data-aos-offset='100'
                data-aos-delay='50'
                data-aos-duration='1000'
                data-aos-easing='ease-in-out'>
                <span className="text-lg font-bold text-orange-800">FULL-STACK-DEVELOPER</span>

                <div className="flex gap-4 items-center my-4">
                    <h1 className='text-black-800 dark:text-neutral-100 text-5xl 2xl:text-7xl font-bold text-center'>
                        Hii, I'm a
                    </h1>
                    <div className='flex items-center justify-center text-white shadow-lg bg-[#3c0a2d] dark:bg-[#63104a1c] dark:text-[#983e7a] rounded-full'>
                        <p className='text-3xl 2xl:text-4xl font-bold px-5 py-2 pb-2 text-center'> Developer</p>
                    </div>
                </div>
                <h1 className='text-5xl 2xl:text-5xl font-extrabold text-black dark:text-neutral-100 tracking-wider'>
                    Khushi Agrawal
                </h1>
                <p className='text-xl text-black dark:text-gray-100 mt-5 2xl:mt-10'>
                    Problem- solver and  Full Stack Developer with ability to learn and collaborate in rapidly changing environments and compositions.
                </p>
                <div className="mt-10 flex gap-10">
                    <a
                        href="https://drive.google.com/file/d/1DzJQsbvDRLNm8NwVq01XNz5CRUhH8nY9/view?usp=sharing"
                        download="Resume_Khushi_Agrawal.pdf" target='_blank'
                        className='inline-block bg-orange-700 text-lg text-white font-semibold rounded-md py-3 px-5 text-center hover:bg-orange-800 transition-colors duration-300'
                    >
                        My Resume
                    </a>
                    <a
                        href="mailto:khushiag23032003@gmail.com"
                        className='inline-block bg-orange-700 text-lg text-white font-semibold rounded-md py-3 px-5 text-center  dark:bg-[#3c0a2d] hover:bg-orange-800 transition-colors duration-300'
                    >
                        Hire Me
                    </a>
                    {/* <button className='bg-orange-700 text-lg text-white font-semibold rounded-md py-3 px-5'>Hire Me</button> */}
                    <a href="#projects">
                        <button className='text-lg text-white font-semibold rounded-md py-3 px-5 bg-black dark:bg-[#3c0a2d]'>
                            Projects
                        </button>
                    </a>
                </div>
            </div>
            <div className='relative flex items-center justify-center md:mt-10 lg:mt-0'>
                <div className='w-[420px] h-[420px] md:w-[500px] md:h-[500px] 2xl:w-[500px] 2xl:h-[500px] rounded-full border border-gray-600 dark:border-gray-200 flex items-center justify-center'>
                    <img src={Profile} alt="" className='w-[75%] h-[75%] rounded-full object-cover' data-aos='fade-down'
                        data-aos-offset='200'
                        data-aos-delay='50'
                        data-aos-duration='500'
                        data-aos-easing='ease-in-out' />
                </div>
                <div className='absolute w-full h-full rounded-full' data-aos='fade-up'
                    data-aos-offset='200'
                    data-aos-delay='50'
                    data-aos-duration='1000'
                    data-aos-easing='ease-in-out'>
                    <img src={Reactjs} className='absolute top-16 md:top-20 left-0 2xl:left-0 w-16 h-16 md:w-20 md:h-20' />
                    <img src={Javascript} className='absolute bottom-16 md:bottom-11 right-0 2xl:right-0 w-12 h-12 md:w-20 md:h-20' />
                    <img src={Mongodb} className='absolute top-16 md:top-11 right-0 2xl:right-3 w-16 h-16 md:w-20 md:h-20' />
                    <img src={Nodejs} className='absolute bottom-20 md:bottom-16 left-0 2xl:left-0 w-12 h-12 md:w-20 md:h-20' />
                </div>
            </div>
        </div>
    )
}

export default Header
