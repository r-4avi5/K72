import React from 'react'

const Projectcard = (props) => {
  return (
        <>
         <div className='w-1/2 group h-full relative transition-all rounded-none hover:rounded-[70px] overflow-hidden'>
            <img className='h-full w-full object-cover' src={props.image1} alt="" />
            <div className='absolute opacity-0 transition-all group-hover:opacity-100 top-0 left-0 flex items-center justify-center h-full w-full bg-black/20'>
              <h2 className='text-6xl text-white pt-2 px-8 font-[font1] border-4 rounded-full'>VOIR LE PROJET</h2>
            </div>
            </div>
            <div className='w-1/2 group h-full relative transition-all rounded-none hover:rounded-[70px] overflow-hidden'>
            <img className='h-full w-full object-cover' src={props.image2} alt="" />
            <div className='absolute opacity-0 transition-all group-hover:opacity-100 top-0 left-0 flex items-center justify-center h-full w-full bg-black/20'>
              <h2 className='text-6xl text-white pt-2 px-8 font-[font1] border-4 rounded-full'>VOIR LE PROJET</h2>
            </div>
            </div>
        </>
  )
}

export default Projectcard