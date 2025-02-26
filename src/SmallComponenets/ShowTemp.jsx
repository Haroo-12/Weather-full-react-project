import React, { useContext } from 'react'
import { MYCONTEXT } from '../Config/CreateContext'

const ShowTemp = () => {
  let {inputs ,setinput} = useContext(MYCONTEXT)
  let {temp ,setTemp} = useContext(MYCONTEXT)
  let {icon ,seticon} = useContext(MYCONTEXT)
  return (
    <div className=' mt-7 lg:w-[100%] lg:flex lg:items-center lg:flex-row sm:flex-col sm:justify-center sm:items-center md:flex-col '>
        <div className="sm:w-[100%] sm:flex-col text-center lg:w-[50%] ">   
      <h1 className='text-[30px] text-white lg:text-[70px] font-bold '>{inputs}</h1>
      <p className='text-[20px] text-white lg:text-[40px] '>chance of rain 0 %</p>
      <h1 className='text-[30px] text-white lg:text-[70px] font-bold'>{temp}c</h1>
      </div>
      <div className="w-[100%] flex justify-center items-center lg:w-[40%] sm:w-[100%] sm:flex sm:items-center sm:justify-center">
    <img src={icon} alt="" className="w-[50%] lg:w-[40%] sm:w-[40%]" />
</div>


    </div>
  )
}

export default ShowTemp
