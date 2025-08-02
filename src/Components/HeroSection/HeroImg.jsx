import React from 'react'

const HeroImg = () => {
  return (
    <div className='flex justify-center items-center relative'>
        <div className='rounded-full overflow-hidden flex justify-center items-center bg-red-300 md:w-80 md:h-80 max-md:w-70 max-md:h-70'>
            <img className='h-full w-full object-cover' src='/Pic.jpg' alt=''/>
        </div>
        <div className='absolute inset-0 rounded-full z-15 shadow-[inset_0_0_40px_rgba(0,0,0,1)]'/>
        <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-10 md:w-82 md:h-82 max-md:w-70 max-md:h-70 bg-gradient-to-r from-[#E8AA14] to-blue-600 bg-rainbow rounded-full blur-sm animate-[spin_10s_linear_infinite]'></div>
    </div>
  )
}

export default HeroImg