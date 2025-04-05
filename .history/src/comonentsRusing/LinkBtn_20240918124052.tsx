import { Link } from "react-router-dom";

interface typechild{
    to:string
}
export default function LinkBtn({to , children}:typechild) {
  return (
    <Link to={to} className=' hover:text-blue-700 text-blue-500'>{children}</Link>

  )
}
