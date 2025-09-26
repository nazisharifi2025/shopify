import React, { useState } from 'react'

function Prouduct() {
    const text =[
        {
            h1 : "Do you have eco-friendly furniture ?",
            p : "Ultrices dui sapien eget mi. Quam viverra orci sagittis eu volutpat odio. Bibendum neque egestas congue quisque egestas diam in arcu cursus. A pellentesque sit amet porttitor. Aliquet lectus proin nibh nisl condimentum id.Ridiculus mus mauris vitae ultricies leo integer."
        },
        {
            h1 : "For furniture purchases, do you have financing options ?",
            p : "Dolor sit amet consectetur adipiscing. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis. Ultricies tristique nulla aliquet enim tortor at auctor urna nunc.Volutpat diam ut venenatis tellus. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet."
        },
        {
            h1 : "Is it possible to follow the delivery of my furniture ?",
            p : "Ultrices dui sapien eget mi. Quam viverra orci sagittis eu volutpat odio. Bibendum neque egestas congue quisque egestas diam in arcu cursus. A pellentesque sit amet porttitor. Aliquet lectus proin nibh nisl condimentum id.Ridiculus mus mauris vitae ultricies leo integer."
        },
        {
            h1 : "Do you offer design consultations?",
            p : "Ultrices dui sapien eget mi. Quam viverra orci sagittis eu volutpat odio. Bibendum neque egestas congue quisque egestas diam in arcu cursus. A pellentesque sit amet porttitor. Aliquet lectus proin nibh nisl condimentum id.Ridiculus mus mauris vitae ultricies leo integer."
        },
    ]
    const [isOpin , setIsOpin] = useState<number | null>(null);
    const toggelbtn = (index:number)=>{
        setIsOpin(isOpin === index ? null : index);
    }
  return (
    <div className='w-full h-fit flex lg:flex-row flex-col text-white justify-between  p-12'>
        <div className='lg:w-[60%] w-full lg:p-10 md:px-10 p-1 h-full flex flex-col gap-5 justify-center items-start'>
           <h3 className='text-amber-600'>PRODUCT RELATED QUERIES</h3>
           <h1 className='text-6xl'>Products & Service</h1>
           {text.map((item,index)=>(
           <div key={index} className='w-full p-2 flex flex-col gap-4 border-b border-gray-600 pb-5'>
            <div onClick={()=> toggelbtn(index)} className='flex justify-between items-center w-full'>
            <h1 className='text-2xl cursor-pointer font-light hover:text-amber-600'>{item.h1}</h1>
            <i className='fas fa-arrow-down cursor-pointer'></i>
            </div>
            {isOpin === index && (
            <p className=' text-gray-500 w-[90%] '>{item.p}</p>
            )}
           </div>
           ))}
        </div>
        <div className='lg:w-[40%] w-full lg:h-[100vh] my-2 md:h-[70vh] h-[40vh] overflow-hidden rounded-2xl'>
            <img src="/img/bed.jpeg" className='h-full w-full rounded-2xl hover:scale-110 transition-all duration-700' alt="" />
        </div>
    </div>
  )
}

export default Prouduct