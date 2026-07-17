import React from 'react'
import { Link } from 'react-router-dom'

function HomeBottomText() {
  return (
    <div className='font-[font2] flex items-center justify-center gap-5'>
      <div className='lg:h-25 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center border-3 border-white rounded-full px-2 pt-2 lg:px-8 uppercase'>
        <Link className='text-[5vw] lg:mt-3'to={'/projects'} >Projects</Link>
      </div>
      <div className='lg:h-25 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center border-3 border-white rounded-full px-2 pt-2 lg:px-8 uppercase'>
        <Link className='text-[5vw] lg:mt-3'to={'/agence'} >agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText