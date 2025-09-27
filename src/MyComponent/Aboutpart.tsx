
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { Settings } from "react-slick";
function AboutPart() {
    const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    arrows:false ,
    autoplaySpeed: 2000,
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
      name: "Rahela Qambari",
  imgUrl : "/img/1758968794785.jpg"
    },
    {
      name: "َNazi Sharifi",
    imgUrl : "/img/1758968794812.jpg"
    },

  ]
  return (
    <div className="bg-neutral-800 h-screen w-full">
      <Slider {...settings}>
        {Cards.map((card, index) => (
            <div key={index} >
                 <div className="flex flex-col items-center space-y-6 justify-center h-60 w-full">
            <p className="text-sm text-amber-700">TESTIMONIAL TIME</p>
            <h1 className="text-5xl  text-white">Our Coustomer Speak</h1>
            </div>
            <div className="flex-col w-full h-full text-center flex items-center justify-center gap-5">
                <div className='flex space-x-3 text-sm'>
          <i className='fas fa-star text-amber-600'></i>
          <i className='fas fa-star text-amber-600'></i>
          <i className='fas fa-star text-amber-600'></i>
          <i className='fas fa-star text-amber-600'></i>
          <i className='fas fa-star text-amber-800'></i>
        </div>
                <p className="  h-[60%] w-[50%]  text-white text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat laudantium praesentium in sint accusantium veniam pariatur nesciunt temporibus ut nulla impedit aperiam consequatur voluptatem assumenda, neque, expedita natus provident.</p>
                 <img src={card.imgUrl} className='h-32 w-32 rounded-full object-cover' alt="" />
                <div>
                     <h1 className="text-white text-xl">{card.name}</h1>
                 <p className="text-neutral-400">Afghanistan</p>
                </div>
            </div>
             

                </div>
            
        ))}
        </Slider>
      </div>
  )
}

export default AboutPart