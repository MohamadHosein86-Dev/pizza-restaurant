import React from "react";
import { Link } from "react-router-dom";

interface typechild{
    to:string,
    children:React.ReactNode
}
export default function LinkBtn({to , children}:typechild) {
    if(){
        return(
            <button onClick={() => navigate(-1)}>&larr; Go back</button>
        )
    }
  return (
    <Link to={to} className=' hover:text-blue-700 text-blue-500'>{children}</Link>
  )
}
