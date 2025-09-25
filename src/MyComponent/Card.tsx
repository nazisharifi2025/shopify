import React from 'react'

function Card() {
    const imges = [
        {
            bg:"/img/img-1.webp",
            logo:"/img/Group_25739.webp"
        },
        {
            bg:"/img/img-2.webp",
            logo:"/img/Group_25738.webp"
        },
        {
            bg:"/img/hero.jpg",
            logo:"/img/Group_25740.webp"
        },
        {
            bg:"/img/blog-02.webp",
            logo:"/img/Group_25742.webp"
        },
        {
            bg:"/img/blog-04_1f730a28-ccd5-4d96-a834-b3ee4d07e036.webp",
            logo:"/img/Group_25743.webp"
        },
        {
            bg:"/img/hero4.webp",
            logo:"/img/Group_25741_9ef66ca4-0f60-4e5a-9b2a-64802ff82a61.webp"
        },
    ]
  return (
    <div className='w-full h-34 grid grid-cols-6 '>
        {imges.map((obj,index)=>(
        <div key={index} className='h-full w-55 bg-cover bg-no-repeat z-50 relative bg-center group' style={{ backgroundImage: `url(${obj.bg})` }}>
        <div className='h-full w-full bg-stone-800 flex flex-col justify-center items-center p-1 ml-0 group-hover:w-0 transition-all duration-700 ease-linear  text-white'>
        
        </div>
        <img src={obj.logo} className='z-50 absolute top-12 left-8' alt="" />
        </div>
        ))}
    </div>
  )
}

export default Card