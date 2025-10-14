import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { Settings } from "react-slick";
function Card() {
       const settings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1500,
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
      };
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
            bg:"/img/blog.webp",
            logo:"/img/Group_25743.webp"
        },
        {
            bg:"/img/hero4.webp",
            logo:"/img/Group_25741_9ef66ca4-0f60-4e5a-9b2a-64802ff82a61.webp"
        },
        {
            bg:"/img/hero.jpg",
            logo:"/img/Group_25740.webp"
        },
    ]
  return (
    <div className='w-full  flex p-2 mt-14'>
        <Slider {...settings} className='w-full'>
        {imges.map((obj,index)=>(
        <div key={index} className='lg:h-34 h-34 lg:w-1/4 md:w-1/3 w-full bg-cover bg-no-repeat  relative bg-center group' style={{ backgroundImage: `url(${obj.bg})` }}>
            <img src={obj.bg} className='h-34 -z-50 w-55 absolute top-0 right-1' alt="" />
        <div className='h-full w-56 z-50 bg-stone-800 flex flex-col justify-center items-center p-1 ml-0 group-hover:w-0 transition-all duration-700 ease-linear  text-white'>
        
        </div>
        <img src={obj.logo} className=' absolute lg:left-10 md:top-12 top-12 lg:top-10 ' alt="" />
        </div>
        ))}
        </Slider>
    </div>
  )
}

export default Card