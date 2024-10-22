import React from 'react'

function Footer() {
  return (
      <footer className='bg-black text-gray-400 py-12 botton-0 left-0 w-ful'>
        <div className='max-w-6x1 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        <div>
        <h3 className='text-lg font-bold text-white mb-4'>About Us </h3>
        <p> Our platform offers resources, tutorials, and mentorship to guide you on your coding journey.</p>
      </div>
      <div>
        <h3 className='text-lg font-bold text-white mb-4'>
           Links</h3>
           <ul>
            <li><a href="/"className='hover:text-white-400'></a>Home</li>
            <li><a href="/Courses"className='hover:text-white-400'>About</a></li>
            <li><a href="/About"className='hover:text-white-500'></a>Servise</li>
            <li><a href="/Contact"className='hover:text-white'></a>Contact</li>
           </ul>
      </div>
      <div>
        <h3 className='text-lg font-bold text-white mb-4'>Follow us</h3>
        <li><a href="/"className='hover:text-slate-300'></a>LinkedIn</li>
            <li><a href="/Courses"className='hover:text-slate-300'>Facebook</a></li>
            <li><a href="/About"className='hover:text-slate-300'></a>Github</li>
            
      </div>
      <div>
        <h3 className='text-lg font-bold text-white mb-4'>Contact Us</h3>
        <p className='text-white'>Email</p>
        <p className='text-white'><a href="/.mail@gmail.com">muhammadmubashis6457@gmail.com</a></p>
        <p className='text-white'>Phone:<span className='hover:text-white'>03263429331</span></p>

        </div>
    </div>
    <p className='flex justify-center text-xs  pt-8'>©2024:Master Cref of Coding</p>
    </footer>
  )
}

export default Footer







        
       