import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
const Todolist = () => {
let [stdname , setstdname] = useState('')
let [course ,setcourse] = useState('')
let [status ,setstatus] = useState(true)
let [indexs ,setindex] = useState()
let [arr ,setarr] = useState([
  {"studentname":"name",
  "studentcourse":"course"}
])


const btnclcik =()=>{


    let data =   {"studentname":stdname,
      "studentcourse":course
    }
    setarr([...arr,data])
    setstdname("")
    setcourse("")
    }

const deletebtn =(i)=>{
arr.splice(i,1)
setarr([...arr]);


}
const editbtn =(i)=>{
  console.log(i)
setstdname(arr[i].studentname)
setcourse(arr[i].studentcourse)
// setcourse(i)
 setindex(i)
 setstatus(false)
 
 
}
const updateclick =()=>{
console.log(indexs)
arr[indexs].studentname = stdname
arr[indexs].studentcourse = course
setstatus(true)



}
  return (
    <div>
      <h1>Todolist App</h1>
      <input type="text" value={stdname} className='p-3 m-2 w-[40%]' onChange={(e)=>{setstdname(e.target.value)}} />
      <input type="text" value={course} className='p-3 m-2 w-[40%]' onChange={(e)=>{setcourse(e.target.value)}} />
     {
     status ?
      <button className='p-3 m-2 bg-red-700'onClick={btnclcik}>Add</button>
     :
     <button className='p-3 m-2 bg-red-700' onClick={updateclick} >Update</button>

    }
      
      <ul>
  {arr.map(function(item ,index){
    return(
    <div className='bg-red-500 text-white m-2 w-[50%] flex' key={index}>
      <div className='bg-blue-500 p-4 text-xl font-bold w-[50%] '>
   <div> {item.studentname}</div>
   <div> {item.studentcourse}</div>

      </div>
      <div className='bg-red-400 p-4 text-xl font-bold w-[50%] text-center flex justify-center  '>
        
<MdDelete className=' m-2 font-bold text-3xl' onClick={()=>deletebtn(index)}/>
<MdEdit className=' m-2 font-bold text-3xl' onClick={()=>{editbtn(index)}}/>
      </div>
    </div>
    )
  })}
  </ul>
    </div>
  )
}

export default Todolist
