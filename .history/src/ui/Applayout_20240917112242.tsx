import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../cart/CartOverview";
import Header from "./Header";
import Loding from "./Loding";

export default function Applayout() {
  const navigation = useNavigation();
  
  
  return (
    <div className=" grid grid-cols-1-2">
        {navigation.state === "loading" && <Loding/>}
      <Header/>

       <main>
          <Outlet />
       </main>

    <div>
    <CartOverview/>
    </div>
    </div>
  )
}
