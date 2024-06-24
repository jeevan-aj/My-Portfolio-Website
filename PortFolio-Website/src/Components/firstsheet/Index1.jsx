import './index.css'
import Stack from './Stack'
import Data from './Data'
import { useEffect, useState } from 'react'



const Index1 = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);


  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);
  
  
  return (
    <div id='home'>
         <div className="text-black   md:pt-[4.4rem]  md:h-full  md:mb-5  mb-10">
          <div className=" flex gap-y-6  gap-1.5">
            
            <div className="flex  lg:flex-row lg:justify-between lg:gap-10 lg:items-center flex-col justify-center text-center lg:text-start  pt-[2.5rem] items-center ">
            
                <div className={isLargeScreen ? "home__img order-2":"home__imges order-2"}>
                </div>
                <div className="lg:order-1 order-2  Data min-w-[300px] md:min-w-[500px]">    <Data /></div>
                
            </div>
           
            </div>
                <Stack />
        </div>
    </div>
  )
}

export default Index1