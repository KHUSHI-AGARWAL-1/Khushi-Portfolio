import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiMenu } from 'react-icons/bi'
import { FiSun } from 'react-icons/fi'
import { MdOutlineNightlight } from 'react-icons/md'
const Navbar = ({darkMode, isOpen, toggleMenu, toggleTheme}) => {
  return (
    <div className='px-0 2xl:px-40'>
<div className="w-full items-center justify-between py-4 px-10 ">
    <div className="flex items-center justify-between w-full">
        <a href="/" className='text-2xl font-bold dark:text-slate-200 cursor-pointer'> KhushiAg</a>
        <ul className='hidden md:flex gap-10 text-xl text-slate-800 dark:text-gray-500'>
            <li className='cursor-pointer hover:text-slate-200'><a href="#home">Home</a></li>
            <li className='cursor-pointer hover:text-slate-200'><a href="#about">About</a></li>
            <li className='cursor-pointer hover:text-slate-200'><a href="#projects">Projects</a></li>
        </ul>
        <button onClick={toggleTheme} className='p-2'>
            {darkMode ? <FiSun size={24} color={"white"}/> : <MdOutlineNightlight size={24} color={"gray"}/>}
        </button>
        <div className='md:hidden'>
<button type='button' className='' aria-controls='onile-menu' aria-expanded="false" onClick={toggleMenu}>
    <BiMenu size={26} className={`${isOpen?"hidden" :"block"} text-gray-700 dark:text-gray-200`}/>

    <AiOutlineClose size={26} className={`${isOpen?"block" :"hidden"} h-6 w-6 dark:text-gray-200`}/>
</button>
        </div>
    </div>
</div>

{/* Mobile menu */}
<div className={`${isOpen ? "block pt-4" :"hidden"} md:hidden`} id='mobile-menu'>
    <div className="flex flex-col gap-4 text-md text-gray-900 dark:text-slate-200">
        <a href="#home" onClick={toggleMenu} className='cursor-pointer'>Home</a>
        <a href="#about" onClick={toggleMenu} className='cursor-pointer'>About</a>
        <a href="#projects" onClick={toggleMenu} className='cursor-pointer'>Projects</a>
    </div>
</div>
    </div>
  )
}

export default Navbar