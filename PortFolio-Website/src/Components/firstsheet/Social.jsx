import React from 'react'
import {RxInstagramLogo} from 'react-icons/rx'
import {CiLinkedin} from 'react-icons/ci'
import {VscGithubAlt} from 'react-icons/vsc'

const Social = () => {
  return (
    <div className='grid grid-cols-[max-content] gap-y-5 '>
         <a href="https://www.instagram.com/_shaikh_zahid/" target='_blank' rel="noopener noreferrer" ><RxInstagramLogo className='h-5 w-5 hover:iconzoom'  /></a>  
          <a href='https://www.linkedin.com/in/muhdshaikhzahid/' target='_blank' rel="noopener noreferrer"  > <CiLinkedin className='h-6 w-5 hover:iconzoom' /></a>  
          <a href='https://github.com/MUHAMMED-SHAIKH-ZAHID' target='_blank' rel="noopener noreferrer"  > <VscGithubAlt className='h-5 w-5 hover:iconzoom' /></a>  
    </div>
  )
}

export default Social