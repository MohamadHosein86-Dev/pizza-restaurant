import { Link } from "react-router-dom";
import Searchorder from "../order/Searchorder";

export default function Header() {
  return (
    <header>
        <Link to="/">fast pizza company</Link>;
        <Searchorder />
    </header>
  )
}
