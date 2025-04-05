import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface typechild{
    to:string,
    children:React.ReactNode
}
export default function LinkBtn({to , children}:typechild) {
    const navigate = useNavigate();
    if(navigate == -1){
        return(
            <button onClick={() => navigate(-1)}>&larr; Go back</button>
        )
    }
  return (
    <Link to={to} className=' hover:text-blue-700 text-blue-500'>{children}</Link>
  )
}
