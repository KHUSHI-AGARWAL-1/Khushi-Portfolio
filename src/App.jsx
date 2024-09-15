import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';
import Footer from './components/Footer';
import Aos from 'aos';
import "aos/dist/aos.css";
Aos.init();
const App = () => {
  const [darkMode, setDarkmode] = useState(true);
  const [isOpen, setOpen] = useState(false)
  const toggleMenu = () => {
    setOpen((prev) => !prev)
  }
  const toggleTheme = () => {
    setDarkmode((prev) => !prev);
  }
  return (
    <div className={`w-full h-full min-h-[100vh] bg-white ${darkMode && "dark"}`}>

      <div className="w-fu;; h-full min-h-[100vh] bg-white" >
        <div className=' dark:bg-gradient-to-tr from-[#b0049c] via-[#1c0314] to-[#5b093f]'>
          <Navbar darkMode={darkMode} isOpen={isOpen} toggleMenu={toggleMenu} toggleTheme={toggleTheme} />

          <section id='home' className='px-0 lg:px-5 2xl:px-40 py-10 lg:py-0'>
            <Header />
          </section>
        </div>
        <section className='w-full bg-[#2b031f] py-20'>
          <Projects />
        </section>

        <section id='about' className='w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 dark:bg-gradient-to-br from-[#1c0314] to-[#6c0d4c]'><About />
        </section>

        <section id='skills' className='w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0  dark:bg-gradient-to-br from-[#6c0d4c] to-[#1c0314]'>
          <Skills />
        </section>

       <section id='projects' className='w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 dark:bg-gradient-to-br from-[#1c0314] to-[#6c0d4c]'>
        <Works/>
       </section>
        <div className='w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0  dark:bg-gradient-to-br from-[#6c0d4c] to-[#1c0314]'>
<Footer/>
       </div>
      </div>
    </div>
  )
}

export default App