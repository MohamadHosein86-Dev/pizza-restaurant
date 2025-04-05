import { Outlet } from "react-router-dom";
import CartOverview from "../cart/CartOverview";
import Header from "./Header";

export default function Applayout() {
  return (
    <div>
    <Header/>

       <main>
            <Outlet />
       </main>

    <CartOverview/>
    </div>
  )
}
