import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./ui/Home"
import Error from "./ui/Error"
import Cart from "./cart/Cart"
import CreateOrder , {action as actionOrder} from "./order/CreateOrder"
import Applayout from "./ui/Applayout";
import Menu  ,{loader as fetchPizza}from "./menu/Menu";
import Order , {loader as loaderorder} from "./order/Order";

const router =createBrowserRouter([
  {element:<Applayout />,
    errorElement:<Error />,
     children:[
        { element: <Home /> ,index:true},
        {path:"/menu" , element:<Menu /> , loader:fetchPizza , errorElement:<Error />},
        {path:"/cart" , element : <Cart />},
        {path:"/order/new" , element: <CreateOrder /> ,action:actionOrder  },
        {path:"/order/:orderId" , element:<Order  /> , loader:loaderorder , errorElement:<Error /> ,  },
   ]},
]);

export default function App() {
  return <RouterProvider  router={router}/>
}
