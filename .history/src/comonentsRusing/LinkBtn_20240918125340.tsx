import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface typechild{
    to:string,
    children:React.ReactNode
}
export default function LinkBtn({to , children}:typechild) {
    const navigate = useNavigate();
    const clasname = "hover:text-blue-700 text-blue-500"

  if(navigate){
      return(
        <button className={clasname} onClick={() => navigate(-1)}>{children}</button>
      )
  }
  return (
    <Link to={to} className={clasname}>{children}</Link>
  )
}
