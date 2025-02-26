import React, { useContext } from 'react'
import { MYCONTEXT } from '../Config/CreateContext'
import Navbor from '../SmallComponenets/Navbor'
import Input from '../SmallComponenets/Input'
import Boxes from '../SmallComponenets/Boxes'
import InputTwo from '../SmallComponenets/InputTwo'

const About = () => {
  let {value} = useContext(MYCONTEXT)
  return (
    <div>
<div className='bg-[#0B131E] w-[100%] h-[100vh] '>
<Navbor/>
<h1 className='font-bold text-[35px] text-white p-2'>Search The City</h1>
<InputTwo/>


</div>
    </div>
  )
}

export default About
