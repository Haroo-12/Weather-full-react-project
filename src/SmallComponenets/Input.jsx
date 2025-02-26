import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { MYCONTEXT } from '../Config/CreateContext';
const Input = () => {
let {inputs ,setinput} = useContext(MYCONTEXT)
  let {temp ,setTemp} = useContext(MYCONTEXT)
  let {icon ,seticon} = useContext(MYCONTEXT)
  let {one ,setone} = useContext(MYCONTEXT)
  let {two ,settwo} = useContext(MYCONTEXT)
  let {three ,setthree} = useContext(MYCONTEXT)
  let {four ,setfour} = useContext(MYCONTEXT)
  let {winds ,setwinds} = useContext(MYCONTEXT)
  let {uv ,setuv} = useContext(MYCONTEXT)
  const [userInput, setUserInput] = useState('');

  const buttonclick = ()=>{
    setinput(userInput)
    setTemp(userInput)
    setone(userInput)
    settwo(userInput)
    setthree(userInput)
    setfour(userInput)
    setwinds(userInput)
    setuv(userInput)
    callapi()


  }
  


  const callapi = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      // Update the URL to use HTTPS instead of HTTP
      url: `https://api.weatherapi.com/v1/current.json?key=6900f9e4faae4a3cbc3203238252201&q=${userInput}&aqi=no`,  // Change http to https
      headers: { }
    };
  
    axios.request(config)
      .then((response) => {
        setinput((response.data).location.name);
        setTemp((response.data).current.feelslike_c);
        seticon((response.data).current.condition.icon);
        setone((response.data).current.feelslike_c);
        settwo((response.data).current.temp_c);
        setthree((response.data).current.windchill_c);
        setfour((response.data).current.heatindex_c);
        setwinds((response.data).current.wind_kph);
        setuv((response.data).current.uv);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  return (
    <div className='flex justify-center items-center'>
      <input type="text" value={userInput} className='  lg:m-2 w-[60%] border-2 border-black text-xl  rounded p-4 ' onChange={(e)=>{setUserInput(e.target.value)}} />
      <button className='p-4 bg-[#202B3B] rounded font-bold border-1 border-white text-white round m-2' onClick={()=>{buttonclick()}}>Search</button>
    </div>
  )
}

export default Input
