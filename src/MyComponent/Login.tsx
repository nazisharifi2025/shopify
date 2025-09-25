import { Send } from 'lucide-react'
import React from 'react'

function Login() {
  return (
    <div className='w-full h-[70vh] bg-cover bg-center object-cover bg-no-repeat bg-[url(/img/bg-A.jpg)] '>
      <div className='h-full w-full gap-7  text-white bg-black/70 flex justify-center items-center flex-col'>
      <h3 className='text-amber-600 font-bold'>ART OF COMFORT</h3>
      <h1 className='text-5xl'>Transforming Spaces, Transforming Style</h1>
      <div className='flex items-center justify-center gap-3 relative w-full'>
      <input type="email" className='w-[60%] border border-gray-400 rounded-full p-4 outline-0' placeholder='Your Email Adress' />
      <i className='fas fa-send '></i>
      <button className='bg-white rounded-full p-3 text-amber-600 absolute top-1 right-[21%] hover:scale-110'>
      <Send Size={24} />
      </button>
      </div>
      </div>
    </div>
  )
}

export default Login