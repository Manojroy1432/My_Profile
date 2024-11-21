import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'

function Navber() {

const [shawmenu , setShawmenu] = useState(false)

useEffect(() =>{
  if(shawmenu){
      document.body.style.overflow = 'hidden'
  }else{
    document.body.style.overflow ='auto'
  }
  return () =>{
    document.body.style.overflow = 'auto'
  }
} , [shawmenu])


  return (
    <div className='absolute top-0 left-0 w-full z-10 '>
        <div className=' flex container mx-auto justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
            <img src={assets.logo} alt="" />
            <ul className='hidden md:flex gap-4 text-white '>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
                <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
                <a href="#Project" className='cursor-pointer hover:text-gray-400'>Projects</a>
                <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimoniors</a>
                </ul>
                <button className='hidden md:block bg-white px-8 py-2 rounded-full hover:bg-gray-100 duration-75'>Sign up</button>
                <img src={assets.menu_icon} alt="" className='md:hidden w-7' onClick={()=> setShawmenu(true)} />
        </div>

{shawmenu?<> 

        <div className='md:hidden bg-white fixed w-full right-0 top-0 bottom-0 overflow-hidden '>
          <div className='flex justify-end p-6 rounded-full cursor-pointer'>
          <span className='hover:bg-gray-50 rounded-full ' >  <img src={assets.cross_icon} className='w-6  m-3' onClick={() =>setShawmenu(false)} /></span>
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 text-lg font-medium bg-white w-full'>
            <a  onClick={() =>setShawmenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block hover:text-gray-600'>Home</a>
            <a  onClick={() =>setShawmenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block hover:text-gray-600'>About</a>
            <a  onClick={() =>setShawmenu(false)} href="#Project" className='px-4 py-2 rounded-full inline-block hover:text-gray-600'>Projects</a>
            <a  onClick={() =>setShawmenu(false)} href="#Testimonials" className='px-4 py-2 rounded-full inline-block hover:text-gray-600'>Testimonalils</a>
          </ul>
        </div>
        </>:<></>}
    </div>
  )
}

export default Navber