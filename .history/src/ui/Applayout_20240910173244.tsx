import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../cart/CartOverview";
import Header from "./Header";

export default function Applayout() {
  const navigation = useNavigation();
  console.log(navigation);
  
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
