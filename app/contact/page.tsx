"use client"
import Image from 'next/image'
import React from 'react'

function Contact() {
  return (
    <section>
    
<div className='flex justify-between'>

  <h1 className='w-20 text-3xl sm:text-5xl lg:text-9xl md:text-7xl lg:ml-24 font-bold md:mt-16 mt-20 ml-3'>GET <span className='text-teal-600'>IN</span> TOUCH</h1>
    <Image src="https://media.istockphoto.com/id/649504168/photo/contact-hanging-icons.jpg?s=612x612&w=0&k=20&c=VKmN2zZjsDT9zX8vZ5C3caT1-WwFrWC418o-WanyIr8=" alt='contact icons' width={200} height={100} quality={100} className='sm:h-80 xl:ml-80 sm:w-7/12 ml-6' unoptimized/>
</div> 
 
<div className='text-center mt-4 mb-6 lg:ml-[500px] lg:relative bottom-28'>
      <a href='mailto:malaika57680@gmail.com' className='sm:text-3xl font-mono sm:font-semibold '>malaika57680@gmail.com</a>

      <div className='md:text-6xl text-3xl space-x-6 text-center md:mt-6'>
<a href='https://www.linkedin.com/in/malaika-zahid-developer' target='_blank'><i className="fa-brands fa-linkedin"></i></a>
      <a href='https://github.com/malaika75' target='_blank'><i className="fa-brands fa-square-github"></i></a>
</div>
      </div>  
</section>
  )
}

export default Contact