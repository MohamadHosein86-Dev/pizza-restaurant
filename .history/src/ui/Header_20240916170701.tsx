import { Link } from "react-router-dom";
import Searchorder from "../order/Searchorder";

export default function Header() {
  return (
    <header className="bg-yellow-500 text-white">
        <Link to="/">fast pizza company</Link>;
        <Searchorder />
    </header>
  )
}
