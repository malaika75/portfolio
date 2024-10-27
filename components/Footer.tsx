import Image from 'next/image'
import React from 'react'

function Footer() {
  return (

<footer>
<div className='flex justify-center w-full'>
    <div>
      <Image src="https://img.freepik.com/free-vector/network-mesh-wire-digital-technology-background_1017-27428.jpg?w=360" alt="footer-bg"  className='h-96' width={800} height={100}/>
        </div>
<div className='mt-16 sm:mr-20 mr-8'>
<p className='md:text-3xl font-bold'>Front-end Developer | Passionate about creating seamless user experiences.</p>
<p className='font-semibold'>connect with me: <a href='mailto:malaika57680@gmail.com'> malaika57680@gamil.com</a></p>

<div className='text-3xl space-x-4'>

<a href="https://www.linkedin.com/in/malaika-zahid-developer" target='_blank'><i className="fa-brands fa-linkedin" ></i></a>
<a href="https://github.com/malaika75" target='blank'><i className="fa-brands fa-square-github"></i></a>
  </div>
  <div className='font-semibold'>
<p className=''>Explore: <a href='/about-us' className='text-teal-600'>About</a></p>
<p>looking for colabration? let&apos;s connect!</p>
        <p className='sm:mr-12 w-12/12'>© 2024 malaika-zahid All Rights Reserved</p>
      </div>  
        </div>
    </div>
  </footer>

  )}
export default Footer

