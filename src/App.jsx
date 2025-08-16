import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Input from './components/Input'
import Data from './components/Data'

function App() {
  const [items,setitems ] = useState([]);
  const [tick,setick]=useState([]);

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
  return (
    <div className='w-full min-h-screen '>
     <Nav />
     <Input data1={add} />
     <Data item={items} Delete={Delete} checkedboi={checkedboi}/>



    </div>
  )
}

export default App
