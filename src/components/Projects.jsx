import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from "framer-motion"

function Projects() {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [cardToShow, setCardToShow] = useState(1)

    const nextProjext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
    }
    const prevProject = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1)
    }

    useEffect(() => {
        const updateCardsToShow = () => {
            if (window.innerWidth >= 1024) {
                setCardToShow(projectsData.length)
            } else {
                setCardToShow(1)
            }
        }
        updateCardsToShow()
        window.addEventListener('resize', updateCardsToShow)
        return () => window.removeEventListener('resize', updateCardsToShow)

    }, [])

    return (
        <div >
            <div className='container mx-auto p-7 md:p-10 lg:p-32 flex items-center justify-center flex-col' id='Project'>
                <h2 className='font-bold text-xl md:text-4xl lg:text-6xl my-3 md:my-7'>Prroject <span className='underline font-light'>Complate</span></h2>
                <p className='text-sm md:text-xl max-w-80 items-center text-gray-500 '>Let's discuss Manoj's all projects</p>
            </div>
            {/*Slider bottons */}
            <div className='flex container items-center justify-end mb-8'>
                <button onClick={prevProject} className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Project'>
                    <img src={assets.left_arrow} className='' />
                </button>
                <button onClick={nextProjext} className='p-3 bg-gray-200 rounded ' aria-label='Next Project'>
                    <img src={assets.right_arrow} className='' />
                </button>
            </div>
            <motion.div 
             initial={{opacity: 0 ,x: 200}}
             transition={{duration:1}}
             whileInView={{opacity: 1 , x:0}}
             viewport={{once:true}} 
            className='overflow-hidden px-2 md:container mx-auto'>
                <div className='flex gap-8 transition-transform duration-500 ease-in-out'
                    style={{ transform: `translateX(-${(currentIndex * 100) / cardToShow}%)` }}>
                    {projectsData.map((project, index) => (
                        <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                            <img src={project.image} className='w-full h-auto mb-14' />
                            <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                                <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                    <h2 className='text-xl font-semibold text-gray-800'>{project.title}</h2>
                                    <p>
                                        {project.price}<span>|</span>{project.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        </motion.div>

        </div >
    )
}

export default Projects