import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Input from './components/Input'
import Data from './components/Data'


function App() {
  const [items,setitems ] = useState([]);
  const [tick,setick]=useState([]);
  const [completed,setcompleted]=useState([]);
  const [notcompleted,setnotcomplted]=useState([]);
  function add(data){
  console.log(Data);
    setitems((prev)=>[...prev,data]);

  }
  
function Delete(id){
  setitems(items.filter((i,ind)=>ind!==id))

}
function checkedboi(id){
 setitems((prev)=>{
  return items.map((i,ind)=>{
   return (ind==id)?{...i,check:!i.check}:i
   })
   
  
 })


}
  // const textRef = useRef();

  // useEffect(() => {
  //   // animate when component mounts
  //   gsap.fromTo(
  //     textRef.current,
  //     { opacity: 0, y: -20 },
  //     { opacity: 1, y: 0, duration: 1.5 }
  //   );
  // }, []);

useEffect(() => {
  const  node= items.filter((i,ind)=>(i.check==true))||null
 console.log(node);
 
 const node2=items.filter((i,ind)=>i.check==false)
 setnotcomplted(node2)
setcompleted(node);
  },[items]
)


return (
    <div className='w-full min-h-screen '>
      <div><Nav todos={items.length} completed={completed.length} notcompleted={notcompleted.length} />
     <Input data1={add} />
     <Data item={items} Delete={Delete} checkedboi={checkedboi}/>
</div>

     

    </div>
  )
}

export default App
