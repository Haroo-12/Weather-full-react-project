import React, { useContext } from 'react'
import { MYCONTEXT } from '../Config/CreateContext'
import Navbor from '../SmallComponenets/Navbor'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Contactss from '../Images/freepik__background__22915.png'
const Contact = () => {
 
  return (
    <div>
<div className='bg-[#0B131E] w-[100%] h-[100vh] '>
<Navbor/>
<div className='text-[40px] p-4 text-white font-bold'>Contact US</div>
<div className='w-[100%]  flex-col flex justify-center items-center lg:w-[100%] lg:flex-row sm:flex-col'>
<div className="w-[100%]   sm:w-[100%] lg:w-[50%]  ">
<div>
        <TextField
          required
          id="outlined-required"
          label="Name"
          defaultValue=""
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white', // White border
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white', // White border on hover
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white', // White border on focus
            },
            '& .MuiInputLabel-root': {
              color: 'white', // White label text
            },
            input: {
              color: 'white', // White input text
            },
          }}
          className='w-[100%] sm:w-[90%] lg:w-[90%]'
        />
        </div><br />
        <div>
        <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue=""
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white', // White border
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white', // White border on hover
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white', // White border on focus
            },
            '& .MuiInputLabel-root': {
              color: 'white', // White label text
            },
            input: {
              color: 'white', // White input text
            },
          }}
          className='w-[100%] sm:w-[90%] lg:w-[90%]'
        />
        </div><br />
        <div>
        <TextField
          required
          id="outlined-required"
          label="Password"
          defaultValue=""
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white', // White border
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white', // White border on hover
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white', // White border on focus
            },
            '& .MuiInputLabel-root': {
              color: 'white', // White label text
            },
            input: {
              color: 'white', // White input text
            },
          }}
          className='w-[100%] sm:w-[90%] lg:w-[90%]'
        />
        </div><br />

        <button className='bg-blue-600 font-bold rounded p-4 m-2'>Submit</button>
      
</div>

<div className="w-[100%] sm:w-[50%] lg:w-[50%]">
<img src={Contactss} alt="" />
</div>
</div>

</div>



    </div>
  )
}

export default Contact
