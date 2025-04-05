import { Link } from "react-router-dom";
import Searchorder from "../order/Searchorder";

export default function Header() {
  return (
    <header className="bg-yellow-600 text-white upercase">
        <Link to="/">fast pizza company</Link>;
        <Searchorder />
    </header> 
  )
}
