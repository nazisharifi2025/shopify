export default function Imgpart (){
    return(
        <div className="h-screen w-full ">
            <div className="h-[70%] w-full bg-cover bg-[url(/img/b.webp)] flex flex-col items-center justify-center space-y-11">
              <div className="h-40 w-96 flex flex-col justify-center font-enter  items-center">
                    <p className="text-sm text-amber-700 pb-6">ART OF COMFORT</p>
                    <h1 className="text-4xl font-medium text-white ">Transforming Spaces,</h1>
                    <h1 className="text-4xl font-medium text-white ">Transforming Styles</h1>
            </div>
            <div className="w-full h-fit flex flex-col items-center justify-center relative">
                <input type="text" placeholder="Enter your mail id here" className="h-18 font-bold w-[50%] rounded-full text-neutral-300 text-base p-6 focus:outline-0 border border-neutral-400 " />
                <i className="fas fa-arrow-right absolute top-2 hover:bg-amber-700 text-4xl h-14 w-14 text-center p-2 right-86 bg-white rounded-full"></i>
            </div>
            <div className="  w-full h-fit flex items-center justify-center" >
                  <input className="h-5 w-5 border" type="checkbox" />
                <p className="text-neutral-400 pl-2"> Your email is safe whit us,we don't spam.</p>
                <h1 className="text-white hover:underline underline-offset-1">Privacy policy</h1>
            </div>
            </div>
            <div className="w-full h-72 "></div>
        </div>
    )
}