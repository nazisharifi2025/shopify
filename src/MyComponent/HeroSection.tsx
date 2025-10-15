import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { Settings } from "react-slick";
function HeroSection() {
    const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1500,
 responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
    },
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      initialSlide: 1,
    },
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
    },
  },
],
  };
  const Cards = [
    {
      name: "MASTERPIECE  ",
      Job : "The Art Of Beautiful Living  ",
      des : "Consectetur a erat nam at. Facilisis magna etiam tempor orci. Sem et tortor consequat id.  Fermentum egestas tellus. Nunc eu hendrerit turpis. Fusce non lectus sem. In pellentesque nunc non.  Donec pretium gravida neque et placerat.",
      imgUrl : "/img/b1.webp"
    },
    {
      name: "CRAFTSMANSHIP  ",
      Job : "Enjoy Style And Comfort  ",
      des : "Consectetur a erat nam at. Facilisis magna etiam tempor orci. Sem et tortor consequat id.  Fermentum egestas tellus. Nunc eu hendrerit turpis. Fusce non lectus sem. In pellentesque nunc non. Donec pretium gravida neque et placerat.",
      imgUrl : "/img/hero4.jpg"
    },
    {
      name: "َLUXURIOUS LIFESTYLE  ",
      Job : "Browse Living Room Pieces",
      des : "Consectetur a erat nam at. Facilisis magna etiam tempor orci. Sem et tortor consequat id. Fermentum egestas tellus. Nunc eu hendrerit turpis. Fusce non lectus sem. In pellentesque nunc non. Donec pretium gravida neque et placerat.",
      imgUrl : "/img/blog-03.webp"
    },

  ]
  return (
    <div className='lg:h-screen h-[70vh] w-full '>
      <Slider {...settings}>
        {Cards.map((card, index) => (
            <div key={index}  className='h-full w-full overflow-hidden transition-all duration-1000 ease-linear  flex flex-col relative md:flex-row  justify-center items-center  gap-6'>
              <img src={card.imgUrl} className='lg:h-full h-[80vh] hover:scale-150 transition-all duration-500 ease-linear w-full object-cover' alt="" />
              <div className='flex flex-col gap-3 md:gap-6 absolute top-[30%] w-[90%] lg:right-24 md:right-14 right-1 z-50 text-white items-center justify-center'>

                <h1 className='font-medium text-center text-amber-700 text-2xl'>{card.name}</h1>
                <h2 className='font-medium text-center text-5xl'>{card.Job}</h2>
                <p className='lg:w-[40%] w-[90%] text-center'>{card.des}</p>
                <button className='px-6 py-2.5 bg-amber-700 hover:outline-1 outline-amber-600 outline-offset-2 transition-all duration-700 text-white ease-linear font-serif w-fit '>Shop Now</button>
                </div>
            </div>
        ))}
        </Slider>
      </div>
  )
}

export default HeroSection