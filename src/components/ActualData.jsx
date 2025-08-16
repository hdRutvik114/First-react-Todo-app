import React, { useState } from 'react';

const ActualData = (props) => {
    const [cheki,setcheki]=useState(false);

  
//    onChange={()=>props.}  {(props.truefalse)?defaultchecked(props.truefalse):defaultchecked(false)}

  return (
    <>
       <div className='w-[80%] px-5 py-3 bg-white flex gap-2 relative  items-center rounded-2xl'>
           <input type="checkbox" onChange={()=>props.check(props.id)}  className='' />
           <h3 className='text-2xl break-words w-[70%] h-fit' style={{textDecoration:(props.value?"line-through":"none")}}>{props.i}</h3>
           <button onClick={()=>props.delete(props.id)} className='absolute right-3 font-bold bg-blue-400 rounded-2xl p-3 text-[15px]'>
            delete
           </button>
     </div>
    </>
  );
};

export default ActualData;