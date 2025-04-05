import { Link } from "react-router-dom";
import Searchorder from "../order/Searchorder";

export default function Header() {
  return (
    <header className="bg-yellow-700 text-white">
        <Link to="/">fast pizza company</Link>;
        <Searchorder />
    </header>
  )
}
