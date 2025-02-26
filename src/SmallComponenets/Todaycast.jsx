import React, { useContext } from 'react'
import { MYCONTEXT } from '../Config/CreateContext'

const Todaycast = () => {
   let {one ,setone} = useContext(MYCONTEXT)
   let {two ,settwo} = useContext(MYCONTEXT)
   let {three ,setthree} = useContext(MYCONTEXT)
   let {four ,setfour} = useContext(MYCONTEXT)
  return (
    <div className=' border-2 border-blue-50  mt-7 text-white'>
        <h1 className='font-bold text-[40px] text-white p-7'>Todays Forecast </h1>
    <div className='w-[100%] flex-wrap flex justify-center items-center  sm:flex-col lg:w-[100%] lg:flex lg:justify-center lg:items-center lg:flex-row'>
    <div className='lg:w-[40%] sm:w-[100%] flex justify-center items-center'>
<div className="rounded bg-[#202B3B] w-[50%]  m-5  sm:w-[30%] lg:w-[40%] ">
    <p className='font-bold text-xl text-center'>1:00 pm</p>
    <img src="https://png.pngtree.com/png-vector/20241225/ourmid/pngtree-single-fluffy-cloud-with-a-soft-aesthetic-floating-alone-png-image_14862594.png" alt=""  />
    <h1 className='text-xl font-bold text-center'>{one}c</h1>
</div>
<div className=" rounded bg-[#202B3B] w-[50%]  m-5  sm:w-[30%] lg:w-[40%]">
    <p className='font-bold text-xl text-center'>9:00 am</p>
    <img src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather07-512.png" alt=""  />
    <h1 className='text-xl font-bold text-center '>{two}c</h1>
</div>
</div>

<div className='lg:w-[40%] sm:w-[100%] flex justify-center items-center'>
<div className=" rounded bg-[#202B3B] text-center w-[50%]  m-5 sm:w-[30%] lg:w-[40%]">
    <p className='font-bold text-xl'>5:00 pm</p>
    <img src="https://cdn-icons-png.flaticon.com/512/2930/2930120.png" alt=""  />
    <h1 className='text-xl font-bold'>{three}c</h1>
</div>
<div className=" rounded bg-[#202B3B] text-center w-[50%]  m-5 sm:w-[30%] lg:w-[40%]">
    <p className='font-bold text-xl'>12:00 am</p>
    <img src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png" alt=""  />
    <h1 className='text-xl font-bold'>{four}c</h1>
</div>
</div>

    </div>
    </div>
  )
}

export default Todaycast
