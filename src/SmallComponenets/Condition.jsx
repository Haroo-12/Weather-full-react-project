import React, { useContext } from 'react'
import { MYCONTEXT } from '../Config/CreateContext'

const Condition = () => {
  let {one ,setone} = useContext(MYCONTEXT)
    let {winds ,setwinds} = useContext(MYCONTEXT)
    let {uv ,setuv} = useContext(MYCONTEXT)
  return (
    <div className='border-2 border-white mt-8 text-white'>
        <h1 className='font-bold text-[40px] text-white p-7'>Air Condition</h1>

      <div className="flex justify-center items-center flex-wrap w-[100%]">
      <div className=' w-[45%] m-2 p-3 lg:w-[35%] sm:[w-60%]'>
    <div className='m-3 bg-[#202B3B] w-[95%] rounded sm:w-[95%] lg:w-[90%] '>
    <h1 className='p-2 font-bold text-xl lg:text-3xl sm:text-xl'>Reel Feel</h1>
    <h1 className='p-2 font-bold text-xl lg:text-3xl sm:text-xl'>{one} c</h1>
    </div>
    <div className='m-3 bg-[#202B3B] w-[95%] rounded sm:w-[95%] lg:w-[90%] '>
    <h1 className='p-2 font-bold text-xl lg:text-3xl sm:text-xl'>Wind</h1>
    <h1 className='p-2 font-bold text-xl lg:text-3xl sm:text-xl'>{winds} Km/h</h1>
    </div>
</div>
<div className=' w-[45%] m-2 p-3 lg:w-[35%] sm:[w-60%]'>
<div className='m-3 bg-[#202B3B] w-[95%] rounded sm:w-[95%] lg:w-[90%] '>
    <h1 className='p-2 font-bold text-xl lg:text-3xl sm:text-xl'>Chance of rain</h1>
    <h1 className='p-2 font-bold text-xl lg:text-3xl sm:text-xl'>0%</h1>
    </div>
    <div className='m-3 bg-[#202B3B] w-[95%] rounded sm:w-[95%] lg:w-[90%] '>
    <h1 className='p-2 font-bold text-xl lg:text-3xl sm:text-xl'>Uv Index</h1>
    <h1 className='p-2 font-bold text-xl lg:text-3xl sm:text-xl'>{uv}</h1>
    </div>
</div>

      </div>
    </div>
  )
}

export default Condition
