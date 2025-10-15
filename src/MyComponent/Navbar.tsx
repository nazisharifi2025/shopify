import   { useState } from 'react'

function Navbar() {
  const [opin,setopin] = useState(false);
  return (
       <div className='w-full lg:p-4 md:p-4 p-2 flex z-50 justify-between lg:px-6 md:px-6 px-1 items-center fixed bg-white/20'>
        <img src="/img/logo (1).svg" className='lg:h-12 md:h-10 h-8' alt="" />
        <ul className='lg:flex hidden gap-6 text-white font-medium '>
          <li className='hover:line-through transition-all text-xl font-light duration-500 ease-initial'><a href="/">Home</a></li>
          <li className='hover:line-through transition-all text-xl font-light duration-500 ease-initial'><a href="/">Colaction</a></li>
          <li className='hover:line-through transition-all text-xl font-light duration-500 ease-initial'><a href="/">Blog</a></li>
          <li className='hover:line-through transition-all text-xl font-light duration-500 ease-initial'><a href="/">About Us</a></li>
          <li className='hover:line-through transition-all text-xl font-light duration-500 ease-initial'><a href="/">Contact</a></li>
        </ul>
         <ul className={`flex ${opin? 'ml-0': '-ml-[60%]'}  lg:hidden bg-black h-screen w-[60%]  float-left items-start p-4 absolute top-0 left-0 gap-12 text-white font-medium  lg:flex-row flex-col`}>
          <button onClick={()=> setopin(!opin)} className='w-full border-b py-4 text-right'>
            <i className='fas fa-times text-2xl'></i>
          </button>
          <li className='hover:line-through transition-all text-xl font-light duration-500 ease-initial'><a href="/">Home</a></li>
          <li className='hover:line-through transition-all text-xl font-light duration-500 ease-initial'><a href="/">Colaction</a></li>
          <li className='hover:line-through transition-all text-xl font-light duration-500 ease-initial'><a href="/">Blog</a></li>
          <li className='hover:line-through transition-all text-xl font-light duration-500 ease-initial'><a href="/">About Us</a></li>
          <li className='hover:line-through transition-all text-xl font-light duration-500 ease-initial'><a href="/">Contact</a></li>
        </ul>
        <div className='flex space-x-6 text-white text-xl'>
          <i onClick={()=> setopin(!opin)} className={` fas fa-bars lg:hidden block`} ></i>
          <i className='fas fa-magnifying-glass'></i>
          <i className='fas fa-heart'></i>
          <i className='fas fa-arrows-rotate'></i>
          <button className='lg:flex md:flex space-x-4 hidden '>
          <i className='fas fa-cart-shopping '></i>
          <i className='fas fa-download '></i>
          </button>
        </div>
      </div>
      
  )
}

export default Navbar