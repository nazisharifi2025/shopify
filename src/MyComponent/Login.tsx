import { Send } from 'lucide-react'
import React from 'react'

function Login() {
  return (
    <div className='w-full lg:h-[70vh] md:h-[40vh] h-[30vh] bg-cover bg-center object-cover bg-no-repeat bg-[url(/img/bg-A.jpg)] '>
      <div className='h-full w-full lg:gap-7 md:gap-7 gap-2  text-white bg-black/70 flex justify-center items-center flex-col'>
      <h3 className='text-amber-600 font-bold'>ART OF COMFORT</h3>
      <h1 className='lg:text-5xl md:text-3xl text-xl '>Transforming Spaces, Transforming Style</h1>
      <div className='flex items-center justify-center gap-3 relative w-full'>
      <input type="email" className='lg:w-[60%] md:w-[60%] w-full mx-auto border border-gray-400 rounded-full p-4 outline-0' placeholder='Your Email Adress' />
      <i className='fas fa-send '></i>
      <button className='bg-white rounded-full p-3 text-amber-600 absolute top-1 lg:right-[21%] md:right-[22%] right-4 hover:scale-110'>
      <Send Size={24} />
      </button>
      </div>
       <div className="  w-full h-fit flex items-center justify-center" >
                  <input className="h-5 w-5 border" type="checkbox" />
                <p className="text-neutral-400 pl-2"> Your email is safe whit us,we don't spam.</p>
                <h1 className="text-white hover:underline underline-offset-1">Privacy policy</h1>
            </div>
      </div>
    </div>
  )
}

export default Login