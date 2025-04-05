import { Link } from "react-router-dom";

export default function LinkBtn({to , children}) {
  return (
    <Link to={to} className=' hover:text-blue-700 text-blue-500'>{children}</Link>

  )
}
