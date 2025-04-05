import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Searchorder() {
    const navigate = useNavigate();
    
    const [qeury , setqeury]=useState("");

    function handlesubmit(x:React.FormEvent<HTMLFormElement>) {
        x.preventDefault();
        if(!qeury)return;
        navigate(`/order/${qeury}`)
    }
  return (
    <form onSubmit={handlesubmit}>
      
      <input type="text"
      value={qeury}
       placeholder="plase enter your id order " 
      onChange={(x)=> setqeury(x.target.value) }/>
    </form>
  )
}
