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
        className="bg-slate-500 border-spacing-y-3 rounded-lg mb-1 mt-1 pr-2 pl-2 " />
   
    </form>
  )
}
