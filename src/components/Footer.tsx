import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-gray-400 py-10 button-0 left-0 w-full'>
    <div className='max-w-6x1 max-auto grid grid-col-1 sm:grid-col-2 lg:grid-col-3 gap-8 px-4 sm:px-6 lg:px-8'>
      <div>
        <h3 className='text-lgtext-left m-2 w-64 font-bold text-white mb-4 buttom-4'>About Us </h3>
        <p>Lora jshcjbu jkdhcisd jcuu</p>
      </div>
      <div>
        <h3 className='text-sm truncate  text-font-extrabold text-white '>
           Links</h3>
           <ul>
            <li><a href="/"className='hover:text-slate-300'></a>home</li>
            <li><a href="/Courses"className='hover:text-slate-300'>courses</a></li>
            <li><a href="/About"className='hover:text-slate-300'></a>about</li>
            <li><a href="/Contact"className='hover:text-slate-300'></a>contact</li>
           </ul>
      </div>
      <div>
        <h3 className='leading-7 bg-gray-300 m-2 w-64 font-bold text-white mb-4'>follow us</h3>
        <li><a href="/"className='hover:text-slate-300'></a>home</li>
            <li><a href="/Courses"className='hover:text-slate-300'></a></li>
            <li><a href="/About"className='hover:text-slate-300'></a></li>
            <li><a href="/Contact"className='hover:text-slate-300'></a></li>
      </div>
      <div>
        <h3 className='text-lg font-bold text-white mb-4'>contact us</h3>
        <p>Email<a href="/.mail@gmail.com">mazhar.iqbal223@gmail.com</a></p>
        <p>phone:<span className='hover:text-white'>03056957022</span></p>




      </div>
    </div>
    <p className='flex justify-center  p-6'></p>
    </footer>
  )
}

export default Footer