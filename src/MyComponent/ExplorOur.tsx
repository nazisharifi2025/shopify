
import Slider from 'react-slick';
import type { Settings } from "react-slick";
function ExplorOur() {
      const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
};
    const data = [
        {
            img: "/img/shop-4-01.webp",
            p : "OFFICE DECORATION",
            h1: "ROUND Wood Table",
            h3 : "Rs. 3,500.00",
            bg : "/img/shop-4-02.webp",
        },
        {
            img: "/img/bg2.webp",
            p : "INDOOR DECORATION",
            h1: "Modern Ceramic Lamp",
            h3 : "Rs. 3,500.00",
            bg : "/img/shop-5-03.webp",
        },
        {
            img: "/img/shop-6-02.webp",
            p : "OUTDOOR DECORATION",
            h1: "Indoor Plant Pot",
            h3 : "Rs. 3,500.00",
            bg : "/img/shop-11-02.webp",
        },
        {
            img: "/img/shop-12-01.webp",
            p : "INDOOR DECORATION",
            h1: "Round steel Tea Table",
            h3 : "Rs. 3,500.00",
            bg : "/img/shop-12-04.webp",
        },
        {
            img: "/img/shop-1-02_555ec476-4523-46a5-9357-e86e9085385b.webp",
            p : "INDOOR DECORATION",
            h1: "Round steel Tea Table",
            h3 : "Rs. 3,500.00",
            bg : "/img/shop-8-01.webp",
        },
    ]
  return (
   <div className='h-fit p-12 w-full flex flex-col justify-center items-center gap-5'>
  <h3 className='text-amber-600'>EXPLORE OUR</h3>
  <h1 className='lg:text-5xl md:text-4xl text-2xl text-white'>Luxurious Haven Collection</h1>

  <div className='w-full'>
    <Slider {...settings} className='w-full'>
      {data.map((item, index) => (
        <div
          key={index}
          className='h-[500px] w-full transition-all duration-700 ease-linear rounded-2xl flex flex-col justify-center group relative items-center gap-3'
        >
          <img src={item.img} className='w-full h-[350px] rounded-2xl' alt='' />
          <p className='text-gray-600 text-center'>{item.p}</p>
          <h1 className='text-2xl text-white text-center'>{item.h1}</h1>
          <h3 className='text-white text-center'>{item.h3}</h3>
          <div
            className='h-[350px] w-full rounded-2xl flex-col hidden group-hover:flex items-end bg-cover absolute top-0 transition-all duration-700 ease-linear right-0 bg-no-repeat'
            style={{ backgroundImage: `url(${item.bg})` }}
          >
            <div className='flex flex-col items-end gap-2 p-4 text-white text-xl'>
              <i className='p-3 rounded-full bg-gray-500/50 fas fa-magnifying-glass'></i>
              <i className='p-3 rounded-full bg-gray-500/50 fas fa-heart'></i>
              <i className='p-3 rounded-full bg-gray-500/50 fas fa-arrows-rotate'></i>
              <i className='p-3 rounded-full bg-gray-500/50 fas fa-cart-shopping'></i>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>

  )
}

export default ExplorOur