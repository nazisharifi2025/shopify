export default function Blogpart (){
    return(
        <div className=" w-full">
                <div className="h-40 w-full flex flex-col justify-end font-enter space-y-4 pl-6">
                    <p className="text-sm text-amber-700">GET THE LATEST NEWS</p>
                    <h1 className="text-5xl font-light text-white ">Visit Our Blog</h1>
            </div>
            <div className="w-full h-screen flex justify-center  items-center">
            <div className="w-1/2 flex flex-col space-y-40 justify-center items-center">
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl w-[90%]" src="/img/blog-01.webp" alt="" />
                    </div>               
               <div className="text-center">
                 <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iusto amet fuga mollitia repudiandae! Repellat </p>
               </div>
            </div>
            <div className="w-1/2 h-[80%] flex flex-col gap-5">
            <div className="flex gap-6 items-center">
                <div>
                    <img className="hover:scale-110 h-48 w-56 rounded-2xl" src="/img/blog-05.jpg" alt="" />
                </div>
                <div className="flex flex-col  w-[50%] h-48 justify-between">
                    <p className="text-sm text-amber-700">MAY 27,2024</p>
                    <h1 className="text-2xl font-light text-white ">Tips For designing Reading Area Space Smartly</h1>
                    <p className="font-light text-neutral-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rerum...</p>
                </div>
            </div>
             <div className="flex gap-6 items-center">
                <div>
                    <img className="hover:scale-110 h-40 w-56 rounded-2xl" src="/img/blog.webp" alt="" />
                </div>
                <div className="flex flex-col  w-[50%] h-40 justify-between">
                    <p className="text-sm text-amber-700">MAY 27,2024</p>
                    <h1 className="text-2xl font-light text-white ">Easy Way To Furnish Your Home Affordably</h1>
                    <p className="font-light text-neutral-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rerum...</p>
                </div>
            </div>
             <div className="flex gap-6 items-center">
                <div>
                    <img className="hover:scale-110 h-40 w-56 rounded-2xl" src="/img/newsletter.webp" alt="" />
                </div>
                <div className="flex flex-col  w-[50%] h-40 justify-between">
                    <p className="text-sm text-amber-700">MAY 27,2024</p>
                    <h1 className="text-2xl font-light text-white ">Minimalist Modern Modular Kitchen Design</h1>
                    <p className="font-light text-neutral-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rerum...</p>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}