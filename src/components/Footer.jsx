
import React from 'react';
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';

function Footer() {
  return (
    <footer className="text-white">
      <div className="container mx-auto py-10">
        {/* Decorative HR with gradient (No blue color) */}
        <hr className="hidden dark:block w-full border-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mb-10" />
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-10 px-8 md:px-10 gap-10 lg:gap-20">
          <div className="text-lg font-semibold">
            <p className=' text-black dark:text-white'>Address:</p>
            <p className="text-gray-400">Deeg Gate, Mathura, India</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-5 md:gap-10 text-md">
            <a href="#home" className="hover:text-pink-600 dark:hover:text-pink-600 transition-colors duration-300  text-black dark:text-white ">Home</a>
            <a href="#about" className="hover:text-pink-600 dark:hover:text-pink-600 transition-colors duration-300  text-black dark:text-white">About</a>
            <a href="#projects" className="hover:text-pink-600 dark:hover:text-pink-600  transition-colors duration-300  text-black dark:text-white">Projects</a>
          </div>
          
          <div className="text-md">
            <p className="font-semibold text-black dark:text-white" >Contact:</p>
            <p className="text-gray-400">khushiag23032003@gmail.com</p>
            <p className="text-gray-400">+91 7017647664</p>
          </div>
        </div>
        
        <div className="flex flex-col gap-5 justify-center items-center py-10">
          <p className="text-lg font-semibold tracking-wider  text-black dark:text-white">Follow Us</p>
          <div className="flex gap-8 text-3xl mb-5  text-black dark:text-white">
          <a href="https://www.linkedin.com/in/khushi-agrawal-7854961b6/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors duration-300">
              <BsLinkedin />
            </a>
            <a href="https://github.com/KHUSHI-AGARWAL-1/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors duration-300">
              <BsGithub />
            </a>
         
            <a href="https://leetcode.com/u/Khushi_Agrawal-23/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600  transition-colors duration-300">
              <SiLeetcode />
            </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors duration-300">
              <BsFacebook />
            </a>
           
          </div>
          <p className="text-gray-400 text-md tracking-wider">© 2024 Khushi Agrawal</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
