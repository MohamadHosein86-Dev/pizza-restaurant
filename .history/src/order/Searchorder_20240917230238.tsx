import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Searchorder() {
    const navigate = useNavigate();
    
    const [qeury , setqeury]=useState("");

    function handlesubmit(x:React.FormEvent<HTMLFormElement>) {
        x.preventDefault();
        
        navigate(`/order/${qeury}`)
    }
 
  return (
    <form onSubmit={handlesubmit}>
      
        <input type="text"
        value={qeury}
        placeholder="plase enter your id order " 
        onChange={(x)=> setqeury(x.target.value) }
        className=" bg-yellow-100 text-sm  transition-all  duration-300  placeholder:text-stone-300
         w-48 rounded-full  py-2 px-4  focus:outline-none focus:ring  focus:ring-yellow-500 focus:ring-opacity-50  sm:w-64" />
   
    </form>
  )
}
