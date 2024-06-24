import React from 'react'
import Index1 from './firstsheet/Index1'
import Navbar from './firstsheet/Navbar'





const Main = () => {
  return (
    <div>
        <Navbar />
      <div className='lg:max-w-[998px]  lg:mx-auto mx-1 font-noto transition-all duration-300'>
      <Index1 />
      </div>
     
     



    </div>
  )
}

export default Main