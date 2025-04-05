import { Link } from "react-router-dom";
import Searchorder from "../order/Searchorder";
import UserName from "../user/userName";

export default function Header() {
  return (
    <header className=" bg-yellow-600 text-white uppercase p-5 border-b-4 border-yellow-300">
        <Link to="/" className="tracking-widest">fast pizza company</Link>;
        <Searchorder />
        <UserName />
    </header> 
  )
}
