import React, { useState } from 'react';

const Input = (props) => {
 const [data,setdata]=useState({name:"",check:false});

  function input(e) {
    const {value}=e.target;
    console.log(value);

  setdata({name:value,check:false});
  }   

 
    return (
        <div className='max-w-md flex w-full overflow-hidden mx-auto mt-2'>
            <input onChange={input} type="text" name="inputdata"  className='w-full bg-white outline-0 p-2 rounded-l-xl' value={data.name} />
            <button  onClick={()=>props.data1(data) } className='px-3 py-2 text-white bg-blue-500 hover:shadow-2xl '>ADD</button>
        </div>
    );
};

export default Input;