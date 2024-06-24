import React from 'react'

const Howerbtn = ({icon,content}) => {
  return (
    <div>
         <div className="relative">
            <button className='group '> 
              <span className='h-[2px] absolute  w-0  bg-black transform transition-all duration-700 left-0 group-hover:w-full rounded-xl'></span>
              <span className='h-1 absolute w-0 bg-black transform transition-all duration-700 right-0 group-hover:h-full group-hover:w-[2px] rounded-xl'></span>
              <span className='h-[2px] absolute  w-0  bg-black transform transition-all duration-700 right-0 bottom-0 group-hover:w-full rounded-xl'></span>
              <span className='h-1 absolute w-0 bg-black transform transition-all duration-700 left-0 bottom-0 group-hover:h-full group-hover:w-[2px] rounded-xl'></span>
              <div className="flex justify-center  p-3 text-sm md:text-lg uppercase font-noto">
                {icon}
              {content}
              </div>

              </button>
            </div>
    </div>
  )
}

export default Howerbtn