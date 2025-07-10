"use client"
import Image from 'next/image'
import React from 'react'

function Contact() {
  return (
    <section>
    
<div className='flex justify-between'>

  <h1 className='w-20 text-3xl sm:text-5xl lg:text-9xl md:text-7xl lg:ml-24 font-bold md:mt-16 mt-20 ml-3'>GET <span className='text-teal-600'>IN</span> TOUCH</h1>
    <Image src="https://t4.ftcdn.net/jpg/15/30/82/05/360_F_1530820506_uJAoXZdMuMlCDthiOe6JUanJAfSX5baJ.jpg" alt='contact icons' width={200} height={100} quality={100} className='sm:h-80 xl:ml-80 sm:w-7/12 ml-6' unoptimized/>
</div> 
 
<div className='text-center mt-4 mb-6 lg:ml-[500px] lg:relative bottom-28'>
      <a href='mailto:malaika57680@gmail.com' className='sm:text-3xl font-mono sm:font-semibold '>malaika57680@gmail.com</a>

      <div className='md:text-6xl text-3xl space-x-6 text-center md:mt-6'>
<a href='https://www.linkedin.com/in/malaika-zahid-developer' target='_blank'><i className="fa-brands fa-linkedin"></i></a>
      <a href='https://github.com/malaika75' target='_blank'><i className="fa-brands fa-square-github"></i></a>
</div>
      </div>  

<form className='mb-40 md:max-w-4xl md:mx-auto w-9/12 ml-9 flex justify-center items-center sm:ml-20'> 
<div className='shadow-[0px_0px_20px_10px_rgba(0,0,0,0.5)] md:px-20 md:py-7 md:space-x-16 bg-slate-400 p-8'>

<div className='md:flex mt-8 md:space-x-6 space-x-2'>
<input type="text" placeholder='Enter your name' required className='border-2 border-black rounded text-black md:h-14 h-10 md:w-1/2 md:p-4 ml-2 mt-2 w-9/12'/>

 <input type='email' placeholder='Enter your email' required className='border-2 border-black rounded md:h-14 md:w-1/2 md:p-4 mt-2 w-9/12 h-10'/>
    </div>    

<div className=''>
  <textarea className='block mt-16 border-2 border-black  rounded w-full md:-ml-8' rows={4} placeholder='write your message here' ></textarea>

  <button type='button' onClick={() => window.location.href = 'mailto:malaika57680@gmail.com'}
   className=' px-2 ml-4 md:text-2xl bg-slate-600 md:py-4 md:px-20 mt-10 items-center text-white font-semibold border-4 border-black font-mono hover:scale-110 md:ml20'>send message</button></div>
</div>
      
</form> 


    
    </section>
  )
}

export default Contact