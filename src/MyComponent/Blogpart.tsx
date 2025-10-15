export default function Blogpart (){
    return(
        <div className=" w-full h-fit my-6 md:my-1">
                <div className="h-40 w-full flex flex-col justify-end font-enter space-y-4 pl-6">
                    <p className="text-sm text-amber-700">GET THE LATEST NEWS</p>
                    <h1 className="text-5xl font-light text-white ">Visit Our Blog</h1>
            </div>
            <div className="w-full md:h-screen h-fit md:my-5 my-6 flex lg:flex-row flex-col justify-center  items-center">
            <div className="lg:w-1/2 w-[70%] lg:py-0 py-10  flex flex-col lg:space-y-40  justify-center items-center">
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl w-[90%]" src="/img/blog-01.webp" alt="" />
                    </div>               
               <div className="text-center">
                 <p className="text-white lg:text-base text-2xl lg:pt-0 pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iusto amet fuga mollitia repudiandae! Repellat </p>
               </div>
            </div>
            <div className="lg:w-1/2 w-full lg:h-[80%] md:h-[80%] h-fit flex flex-col lg:gap-5 md:gap-9  lg:pl-0 pl-3 gap-7 ">
            <div className="flex gap-6 md:flex-row flex-col items-center">
                <div>
                    <img className="hover:scale-110 h-48 md:w-56 w-full rounded-2xl" src="/img/blog-05.jpg" alt="" />
                </div>
                <div className="flex flex-col  md:w-[50%] w-full h-48 justify-between">
                    <p className="text-sm text-amber-700">MAY 27,2024</p>
                    <h1 className="lg:text-2xl md:text-2xl text-lg  font-light text-white ">Tips For designing Reading Area Space Smartly</h1>
                    <p className="font-light text-neutral-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rerum...</p>
                </div>
            </div>
             <div className="flex gap-6 md:flex-row flex-col items-center">
                <div>
                    <img className="hover:scale-110 h-40 md:w-56 w-full rounded-2xl" src="/img/blog.webp" alt="" />
                </div>
                <div className="flex flex-col  md:w-[50%] w-full h-40 justify-between">
                    <p className="text-sm text-amber-700">MAY 27,2024</p>
                    <h1 className="lg:text-2xl md:text-2xl text-lg font-light text-white ">Easy Way To Furnish Your Home Affordably</h1>
                    <p className="font-light text-neutral-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rerum...</p>
                </div>
            </div>
             <div className="flex gap-6 md:flex-row flex-col items-center">
                <div>
                    <img className="hover:scale-110 h-40 md:w-56 w-full rounded-2xl" src="/img/newsletter.webp" alt="" />
                </div>
                <div className="flex flex-col  md:w-[50%] w-full h-40 justify-between">
                    <p className="text-sm text-amber-700">MAY 27,2024</p>
                    <h1 className="lg:text-2xl md:text-2xl text-lg  font-light text-white ">Minimalist Modern Modular Kitchen Design</h1>
                    <p className="font-light text-neutral-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rerum...</p>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}