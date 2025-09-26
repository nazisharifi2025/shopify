import { map } from 'framer-motion/client'
import React, { useState } from 'react'

function Servisec() {
      const data = [
    { icon: "fas fa-couch", title: "Sof", bg: "/img/sof.jpeg" },
    { icon: "fas fa-bed", title: "Bed", bg: "/img/collapsible-conent.webp" },
    { icon: "fas fa-boxes", title: "Shelving Units", bg: "/img/stor.jpg" },
    { icon: "fas fa-table", title: "Tea Table", bg: "/img/newsletter.webp" },
    { icon: "fas fa-kitchen-set", title: "Kitchen Furniture", bg: "/img/ash.jpg" },
    { icon: "fas fa-archive", title: "Stor Furniture", bg: "/img/s.jpg" },
    { icon: "fas fa-briefcase", title: "Office", bg: "/img/Office.jpg" },
    { icon: "fas fa-paint-roller", title: "Decors", bg: "/img/de.jpg" },
  ];
    const [bgImg, setBgImg] = useState("/img/blog-02.webp");
  return (
    <div
      className='md:h-[70vh] h-[80vh] w-full bg-cover bg-no-repeat bg-center gap-6 flex justify-between items-center'
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className='h-full flex-wrap w-full bg-black/60 flex justify-center items-center text-white gap-10'>
        {data.map((item, index) => (
          <div
            onMouseEnter={() => setBgImg(item.bg)}
            onMouseLeave={() => setBgImg("/img/blog-02.webp")}
            key={index}
            className='flex h-fit w-fit p-3 items-center space-x-5'
          >
            <i className={` ${item.icon} text-4xl text-amber-600`}></i>
            <h1 className='text-4xl font-bold'>{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Servisec