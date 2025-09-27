export default function Footer(){
    return(
        <div className="lg:h-[80vh] h-[105vh] md:h-[60vh] w-full bg-[url(/image/a12.webp)] ">
            <div className="h-full w-full bg-[rgba(0,0,0,0.8)] lg:flex-row flex-col relative flex justify-between items-center lg:p-20 p-6 ">
                <div className="lg:h-[80%] h-fit lg:w-[40%] md:w-full flex flex-col ">
                 <img src="/img/logo (1).svg" className="h-40 w-40" alt="" />
                 <strong className="w-[60%] font-medium text-2xl text-white">c123 Example Road New York, NY 12345</strong>
                 <h1 className="text-3xl text-white">Our Email Address</h1>
                 <h1 className="text-2xl text-white">Banonazisharifi@mail.com</h1>
                 <h1 className="text-2xl text-white">RahelaQanbari@gmail.com</h1>
                </div>
                <div className="h-[80%] lg:w-[40%] w-full flex justify-between flex-wrap items-center">
                    <ul className="font-medium text-xl text-white flex flex-col gap-8">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Serveces</li>
                        <li>Project Details</li>
                    </ul>
                    <ul className="font-medium text-xl text-white flex flex-col gap-8">
                        <li>FAQ/return</li>
                        <li>Privcy</li>
                        <li>your acount </li>
                        <li>App Donlowd</li>
                        <li>Our Tem</li>
                    </ul>
                    <ul className="font-medium text-xl text-white flex flex-col gap-8">
                        <li>Hestory</li>
                        <li>
                            privese balece
                        </li>
                        <li>Blog</li>
                        <li>Internal Blog</li>
                        <li>Serveces</li>
                    </ul>
                </div>
                <h1 className="font-ply text-2xl font-medium absolute bottom-2 lg:right-[30%] md:right-24 right-0 text-white">Copyright © 2024 saastemplate. All rights reserved.</h1>
        </div>
            </div>
    )
}