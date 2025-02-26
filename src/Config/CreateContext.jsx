import React, { createContext, useState } from 'react';

const MYCONTEXT = createContext();

const Provider = ({ children }) => {
   let [inputs ,setinput] = useState('');
   let [temp ,setTemp] = useState('25');
   let [icon ,seticon] = useState('')
   let [one ,setone] = useState('22')
   let [two ,settwo] = useState('22.4')
   let [three ,setthree] = useState('23.5')
   let [four ,setfour] = useState('25')
   let [winds ,setwinds] = useState('12')
   let [uv ,setuv] = useState('0')
  //  let [inputtwo ,setinputtwo] = useState('')
  return (
    <MYCONTEXT.Provider value={{temp,setTemp ,icon ,seticon , one ,setone , two ,settwo  ,three ,setthree, four ,setfour , inputs, setinput , winds ,setwinds, uv ,setuv}}>
      {children}
    </MYCONTEXT.Provider>
  );
}

export { Provider, MYCONTEXT };
