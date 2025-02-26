import React, { useState } from 'react';
import Boxes from './Boxes';
import axios from 'axios';

const InputTwo = () => {
  let [input, setinput] = useState('');
  let [arr, setArr] = useState([]);

  const clicks = () => {
    if (input) {
      // Add the city search to the array
      setArr(prevArr => [...prevArr, { city: input, temperature: '' }]);
      callapitwo(input);
      setinput('');
    } else {
      alert("Please fill in the input");
    }
  };

  const callapitwo = (city) => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://api.weatherapi.com/v1/current.json?key=6900f9e4faae4a3cbc3203238252201&q=${city}&aqi=no`,
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        // Update the specific city result with temperature
        setArr(prevArr => {
          return prevArr.map(item => 
            item.city === city 
              ? { ...item, temperature: response.data.current.temp_c, cityName: response.data.location.name }
              : item
          );
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className='flex justify-center items-center'>
        <input
          type="text"
          value={input}
          className='p-4 w-[50%] m-2'
          onChange={(e) => { setinput(e.target.value); }}
        />
        <button
          className='p-4 bg-[#202B3B] text-white font-bold m-2 rounded'
          onClick={clicks}
        >
          Search
        </button>
        <br />
      </div>

      {arr.map((v, i) => {
        return (
          <Boxes 
            val={v.temperature} 
            valtwo={v.cityName} 
            key={i}
          />
        );
      })}
    </>
  );
}

export default InputTwo;
