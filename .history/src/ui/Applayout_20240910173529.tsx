import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../cart/CartOverview";
import Header from "./Header";

export default function Applayout() {
  const navigation = useNavigation();
  
  
  return (
    <div>
      {navigation.state === "loading" && <Loding/>}
    <Header/>

       <main>
            <Outlet />
       </main>

    <CartOverview/>
    </div>
  )
}
