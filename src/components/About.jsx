import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "framer-motion"

function About() {
    return (
        <div>
            <div className='container mx-auto p-7 md:p-10 lg:p-32 flex items-center justify-center flex-col' id='About'>
                <h2 className='font-bold text-xl md:text-4xl lg:text-6xl my-3 md:my-7'>About <span className='underline font-light'>Our section</span></h2>
                <p className='text-sm md:text-xl max-w-80 items-center text-gray-500 '>Let's know who is Manoj?</p>
                <motion.div
        initial={{opacity: 0 ,x: 200}}
        transition={{duration:1}}
        whileInView={{opacity: 1 , x:0}}
        viewport={{once:true}} className='flex flex-col md:flex-row items-center justify-center  md:gap-10 p-3 md:p-10'>
                    <img src={assets.brand_img} className='w-full sm:w-1/2  max-w-[300px] md:m-10' />

                    <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28 m-5'>
                        <div>
                            <p className=' text-2xl sm:text-4xl font-medium text-gray-800'>10+</p>
                            <p className='text-gray-700 text-xs md:text-sm'>years of Experiacnce</p>
                        </div>
                        <div>
                            <p className=' text-2xl sm:text-4xl font-medium text-gray-800'>10+</p>
                            <p className='text-gray-700 text-xs md:text-sm'>years of Experiacnce</p>
                        </div>   <div>
                            <p className=' text-2xl sm:text-4xl font-medium text-gray-800'>10+</p>
                            <p className='text-gray-700 text-xs md:text-sm'>years of Experiacnce</p>
                        </div>   <div>
                            <p className=' text-2xl sm:text-4xl font-medium text-gray-800'>10+</p>
                            <p className='text-gray-700 text-xs md:text-sm'>years of Experiacnce</p>
                        </div>

                    </div>


                </motion.div>
                <p className='max-w-lg my-3 text-xs md:text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto a sapiente laborum doloribus. Veritatis dolor placeat repudiandae, autem aperiam molestiae laborum unde quia quaerat omnis accusantium distinctio voluptates sint obcaecati?</p>
                <button className='bg-blue-500 text-white text-xs md:text-sm rounded px-3 py-2 hover:bg-blue-600'>Learn more</button>
            </div>
        </div>
    )
}

export default About