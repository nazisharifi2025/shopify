import React from 'react'

function Hero() {
  return (
    <div className='h-screen w-[70%] mx-auto gap-6 relative flex justify-between items-center flex-wrap p-12'>
        <img src="/img/shop-4-02.webp" className='h-72 w-72 shadow-md shadow-gray-900' alt="" />
        <img src="/img/shop-5-03.webp" className='h-64 w-72 shadow-md shadow-gray-900 z-50' alt="" />
        <img src="/img/shop-1-02_555ec476-4523-46a5-9357-e86e9085385b.webp" className='h-64 w-64 shadow-md shadow-gray-900 ' alt="" />
        <img src="/img/blog-02 (1).webp" className='h-72 w-96 shadow-md shadow-gray-900' alt="" />
        <div className='h-64 w-96 bg-black/90  gap-3 absolute top-52 right-72 text-white flex flex-col justify-center px-3'>
          <h1 className='font-medium text-2xl'>Home & Furntior</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet minus, sit mollitia inventore deleniti tempora odio quas, magnam iste quae odit repellat, molestiae natus fuga ducimus aperiam nisi eos tenetur.</p>
          <button className='px-6 py-2.5 bg-white text-black font-serif w-fit '>Learn More..</button>
        </div>
    </div>
  )
}

export default Hero