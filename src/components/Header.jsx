import React from 'react'
import Navber from './Navber'
import { motion } from "framer-motion"

function Header() {
  return (
    <div
    
    
     className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage: "url('/header_img.png"}} id='Header'>
        <Navber/>
        <motion.div
        initial={{opacity: 0 ,y: 100}}
        transition={{duration:1}}
        whileInView={{opacity: 1 , x:0}}
        viewport={{once:true}}
     className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
          <h2 className='text-5xl sm:text-6xl md:text-[82] inline-block max-w-3xl font-semibold'>Explore home that fit your dream</h2>
          <div className='space-x-6 mt-16'>
            <a href="#" className='border border-white px-3 py-2 md:px-8 md:py-3 rounded text-sm md:text-lg'>Projects</a>
            <a href="#" className='bg-blue-500 md:px-8 px-3 py-2 md:py-3 rounded text-sm md:text-lg'>Contact Me</a>
          </div>
        </motion.div>
    </div>
  )
}

export default Header