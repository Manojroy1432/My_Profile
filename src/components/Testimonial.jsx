import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from "framer-motion"

function Testimonial() {
    return (
        <div >
            <div className='container mx-auto p-7 md:p-10 lg:p-32 flex items-center justify-center flex-col' id='Testimonials'>
                <h2 className='font-bold text-xl md:text-4xl lg:text-6xl my-3 md:my-7'>Prroject <span className='underline font-light'>Complate</span></h2>
                <p className='text-sm md:text-xl max-w-80 items-center text-gray-500 '>Let's discuss Manoj's all projects</p>
            </div>
            <motion.div 
             initial={{opacity: 0 ,x: -200}}
             transition={{duration:1}}
             whileInView={{opacity: 1 , x:0}}
             viewport={{once:true}} 
              className='flex flex-wrap justify-center gap-8'>
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>
                        <img src={testimonial.image} className='w-20 h-20 rounded-full mx-auto mb-4' />
                        <h2 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
                        <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
                        <div className='flex justify-center gap-1 text-red-500 mb-4'>
                            {Array.from({ length: testimonial.rating }, (item, index) => (
                                <img key={index} src={assets.star_icon} />
                            ))}
                        </div>
                        <p className='text-gray-400'>{testimonial.text}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default Testimonial