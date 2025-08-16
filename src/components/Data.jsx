import React, { useState } from 'react';
import ActualData from './ActualData';



const Data = (props) => {
    console.log(props)

    if (props.item.length > 0) {
        return (

            <div className='max-w-md flex flex-col bg-slate-800 mt-5 items-center py-5 p-2 gap-2 border-white min-h-1 mx-auto rounded-2xl'>
                {
                    props.item.map((i, ind) => <ActualData key={ind} id={ind} i={i.name} value={i.check} delete={props.Delete} check={props.checkedboi}/>)

                }

            </div>
        );
    } else {
        return (<h2 className='text-3xl mt-10 font-mono text-center text-white'>Welecome..Add the notes</h2>)

    }

};

export default Data;