import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../cart/CartOverview";
import Header from "./Header";
import Loding from "./Loding";

export default function Applayout() {
  const navigation = useNavigation();
  
  
  return (
    <div className=" grid h-screen grid-rows-[auto_1fr_auto]">
        {/* navigation.state === "loading" */ true && <Loding/>}
      <Header/>

     <div>
        <main className=" max-w-3xl mx-auto ">
           <Outlet />
        </main>
     </div>

      <CartOverview/>
    </div>
  )
}
