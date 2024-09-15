import React from 'react'
import { Profile } from '../assets'
import { FaUserAlt } from 'react-icons/fa'
import { MdOutlineAlternateEmail, MdWifiCalling } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'

function About() {
  return (
    <div className='w-full flex flex-col lg:flex-row px-8 md:px-10 gap-10 lg:gap-20 lg:py-20'>
        <div className="w-full md:h-[290px] lg:w-1/3 flex flex-col items-center border border-gray-500 dark:bg-transparent rounded-md">
        <img src={Profile} className='h-[290px] p-5 rounded-md ease-in-out duration-300 hover:scale-110 '/>
        </div>
        <div className='w-full flex flex-col'>
            <p className='text-3xl font-bold text-black dark:text-white '>About Me</p>
            <p className='text-lg text-black dark:text-gray-400 leading-10'>
            I'm Khushi Agrawal, a Full Stack Developer specializing in the MERN stack. With a focus on building scalable web applications, I excel in both frontend and backend development. My experience spans creating dynamic user interfaces with React.js and implementing robust server-side solutions using Node.js and MongoDB. Passionate about clean code and efficient architecture, I’m dedicated to leveraging my skills to solve complex problems and deliver high-quality software.Along with it I am also a keen problem-solver and has solved 400+ problems on various coding platform including leetcode and hackerrank.
            </p>
            <div className='mt-5 2xl:mt-10 flex flex-wrap gap-5'  data-aos='fade-up'
            data-aos-offset='200'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'>
              <p className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#2b031f] text-white cursor-pointer'>
                <FaUserAlt size={22}/> Khushi Agrawal
              </p>
              <p className='flex gap-3 ic justify-center rounded-full shadow-lg py-2 px-4 bg-[#2b031f] text-white cursor-pointer'>
                <MdOutlineAlternateEmail size={22}/> khushiag23032003@gmail.com
              </p>
              <p className='flex gap-3 ic justify-center rounded-full shadow-lg py-2 px-4 bg-[#2b031f] text-white cursor-pointer'>
                <BsWhatsapp size={22}/> +917017647664
              </p>
              <p className='flex gap-3 ic justify-center rounded-full shadow-lg py-2 px-4 bg-[#2b031f] text-white cursor-pointer'>
                <MdWifiCalling size={22}/> +917017647664
              </p>
            </div>
        </div>
    </div>
  )
}

export default About