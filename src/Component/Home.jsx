import React, { useEffect } from 'react'
import { Link } from 'react-router'
import { MYCONTEXT } from '../Config/CreateContext'
import { useContext } from 'react'
import Navbor from '../SmallComponenets/Navbor'
import Input from '../SmallComponenets/Input'
import ShowTemp from '../SmallComponenets/ShowTemp'
import Todaycast from '../SmallComponenets/Todaycast'
import Condition from '../SmallComponenets/Condition'
const Home = () => {
  return (
    <div>
<div className='bg-[#0B131E] w-[100%]'>
<Navbor/>
<Input/>
<ShowTemp/>
<Todaycast/>
<Condition/>
</div>


    </div>
  )
}

export default Home
