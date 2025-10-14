

function Sleeck() {
  return (
    <div className='h-fit py-2 w-full'>
        <div className='flex justify-between md:flex-row flex-col items-center p-5'>
            <div className='md:w-[40%] w-full '>
                <h3 className='text-amber-600'>SLEEK AND STYLISH</h3>
                <h1 className='text-4xl py-3 text-white'>Stylish Furniture Designs</h1>
            </div>
            <p className='md:w-[50%] w-full text-gray-400'>
Ut eleifend mattis ligula, porta finibus urna gravida at. Aenean vehiculles arcunon mattis. Integer dapibus ac dui pretium blandit. Class aptent taciti</p>
        </div>
        <div className='lg:h-[80vh] md:h-[40vh] h-[30vh] w-full rounded-2xl overflow-hidden'>
            <img src="/img/Rectangle_38937_2.webp" className='w-full hover:scale-150 transition-all duration-700 h-full' alt="" />
        </div>
    </div>
  )
}

export default Sleeck