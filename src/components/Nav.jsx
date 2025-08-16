// // import React, { useEffect } from 'react';
// // import { gsap } from "gsap";

// // const Nav = (props) => {
 
// //     useEffect(()=>{
// //       if(props.todos>0){
// //          gsap.fromTo(
// //         ".stat-item",
// //         { opacity: 0, x: -50 },   // start invisible, shifted left
// //         { opacity: 1, x: 0, duration: 0.5, delay: index * 0.2 } // animate with delay
// //       ); 
// //       }
       

// //     },[])

// //   return (
// //     <>
// //      <nav className='flex justify-between h-[60px] w-full px-3 bg-[#5389fd] items-center py-3'>
// //             <h1 className='text-3xl font-mono text-white'>Note-Nodes</h1>
// //       {props.todos > 0 && (
// //   <div className='flex gap-3 mr-30 ' >
// //     <p className=' text-sm text-white stat-item'>Todos: {props.todos}</p>
// //     <p className='text-sm text-white  stat-item'>Completed: {props.completed}</p>
// //     <p className='text-sm text-white  stat-item'>Not-completed: {props.notcompleted}</p>
// //   </div>
// // )
// // }
            
// //             <a href=""><h2>Home</h2></a>
            
// //       </nav>
// //     </>
// //   );
// // };

// // export default Nav;

// import React, { useEffect } from 'react';
// import { gsap } from "gsap";

// const Nav = (props) => {

//     useEffect(()=>{
//       if(props.todos > 0){
//          gsap.fromTo(
//             ".stat-item",
//             { opacity: 0, x: -50 },       // start invisible and shifted left
//             { opacity: 1, x: 0, duration: 0.5, stagger: 0.2 } // animate each with delay automatically
//          ); 
//       }
//     }, []); // animate when values change

//   return (
//      <nav className='flex justify-between h-[60px] w-full px-3 bg-[#5389fd] items-center py-3'>
//         <h1 className='text-3xl font-mono text-white'>Note-Nodes</h1>

//         {props.todos > 0 && (
//           <div className='flex gap-3 mr-30'>
//             <p className='text-sm text-white stat-item'>Todos: {props.todos}</p>
//             <p className='text-sm text-white stat-item'>Completed: {props.completed}</p>
//             <p className='text-sm text-white stat-item'>Not-completed: {props.notcompleted}</p>
//           </div>
//         )}

//         <a href=""><h2>Home</h2></a>
//      </nav>
//   );
// };

// export default Nav;

import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";

const Nav = (props) => {
  const hasAnimated = useRef(false); // flag to check if animation already ran

  useEffect(() => {
    if (props.todos > 0 ) {
      // && !hasAnimated.current
      gsap.fromTo(
        ".stat-item",
        { opacity: 0,
           x: -50 },       // start invisible and shifted left
        { opacity: 1,
           x: 0,
            duration: 1.1,
             stagger: 0.2 } // animate with stagger
      );
      // hasAnimated.current = true; // mark animation as done
    }
  }, [props.todos]); // runs when todos change

  return (
    <nav className='flex justify-between h-[60px] w-full px-3 bg-[#5389fd] items-center py-3'>
      <h1 className='text-3xl font-mono text-white'>Note-Nodes</h1>

      {props.todos > 0 && (
        <div className='flex gap-3 mr-30'>
          <p className='text-sm text-white stat-item'>Todos: {props.todos}</p>
          <p className='text-sm text-white stat-item'>Completed: {props.completed}</p>
          <p className='text-sm text-white stat-item'>Not-completed: {props.notcompleted}</p>
        </div>
      )}

      <a href=""><h2>Home</h2></a>
    </nav>
  );
};

export default Nav;
