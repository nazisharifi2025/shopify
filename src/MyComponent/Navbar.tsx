import React from 'react'

function Navbar() {
  return (
       <div className='w-full p-4 flex z-50 justify-between px-6 items-center fixed bg-transparent'>
        <img src="public/img/logo (1).svg" className='h-12' alt="" />
        <ul className='flex gap-6 text-white font-medium'>
          <li className='hover:line-through transition-all text-xl font-light duration-500 ease-initial'><a href="/">Home</a></li>
          <li className='hover:line-through transition-all text-xl font-light duration-500 ease-initial'><a href="/">Colaction</a></li>
          <li className='hover:line-through transition-all text-xl font-light duration-500 ease-initial'><a href="/">Blog</a></li>
          <li className='hover:line-through transition-all text-xl font-light duration-500 ease-initial'><a href="/">About Us</a></li>
          <li className='hover:line-through transition-all text-xl font-light duration-500 ease-initial'><a href="/">Contact</a></li>
        </ul>
        <div className='flex space-x-6 text-white text-xl'>
          <i className='fas fa-magnifying-glass'></i>
          <i className='fas fa-heart'></i>
          <i className='fas fa-arrows-rotate'></i>
          <i className='fas fa-cart-shopping'></i>
          <i className='fas fa-download'></i>
        </div>
      </div>
  )
}

export default Navbar