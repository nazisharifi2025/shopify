import React from 'react'

function HOMEDECOR() {
  return (
    <div className='h-fit w-full mx-auto my-24 gap-6 flex lg:flex-row flex-col justify-between items-center  p-12'>
      <div className='lg:w-[45%] w-full h-full flex flex-col gap-6 justify-center items-start'>
      <div className='w-full flex flex-col gap-6 justify-center items-start'>
        <h3 className='text-xl text-amber-600 font-bold'>Home Decor HUB</h3>
        <h1 className='text-3xl text-white'>Exceptional Furniture's For Indoor & Outdoor</h1>
        <p className=' text-gray-400 w-[95%]'>Ut eleifend mattis ligula, porta finibus urna gravida at. Aenean vehicula sodales arcu non mattis. Integer dapibus ac dui pretium blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
      </div>
      <div className='w-full rounded-2xl lg:h-[90vh] h-[60vh] overflow-hidden'>
        <img src="/img/img-1.webp" className='h-full hover:scale-125 transition-all duration-700 w-full rounded-2xl' alt="" />
      </div>
      </div>
      {/* div 1 endded */}
      <div className='lg:w-[45%] w-full h-full flex flex-col gap-6 justify-center items-start'>
         <div className='w-full rounded-2xl h-[60vh] overflow-hidden'>
        <img src="/img/img-2.webp" className='lg:h-full h-full hover:scale-125 transition-all duration-700 w-full rounded-2xl' alt="" />
      </div>
      <div className='w-full flex flex-col gap-6 justify-center items-start'>
        <h1 className='text-3xl text-white'>Discover Endless Designs</h1>
        <p className=' text-gray-400 w-[95%]'>Integer dapibus ac dui pretium blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut eleifend mattis ligula, porta finibus urna gravida at. Aenean vehicula sodales arcu non mattis.</p>
      </div>
      </div>
     </div>
  )
}

export default HOMEDECOR