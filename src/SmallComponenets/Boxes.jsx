import React, { useContext } from 'react'
import { MYCONTEXT } from '../Config/CreateContext'
    // let {inputtwo ,setinputtwo} = useContext(MYCONTEXT)

const Boxes = (props) => {

  return (

    <div className='w-[100%] flex justify-center items-center flex-col text-white '>
      <div className=" m-2 w-[95%] lg:w-[50%] bg-[#202B3B] flex justify-center p-2 rounded sm:w-[80%]">
        <div className="w-[45%] bg-[#0B131E]  m-2 p-2 text-xl rounded">
            <p>{props.valtwo}</p>
            <b>10:23</b>
        </div>
        <div className="w-[45%] bg-[#0B131E]  m-2 p-2 text-center font-bold text-3xl rounded">
           <b>{props.val}C</b>
        </div>
      </div>
    </div>
  )
}

export default Boxes
