import { Link } from "react-router-dom";
import Searchorder from "../order/Searchorder";

export default function Header() {
  return (
    <header className=" bg-yellow-600 text-white uppercase">
        <Link to="/">fast pizza company</Link>;
        <Searchorder />
        <p>jonas</p>
    </header> 
  )
}
