import { useDispatch } from "react-redux";
import Btn from "./Btn";
import { increaseQuntitiItem } from "../cart/CartReducer";

interface tyep{
    pizzaId:number
}
export default function UapdateQuantiti({pizzaId}:tyep) {
    const dispatch = useDispatch();
  return (
    <div className=" flex gap-2 items-center md:gap-3 ">
            <Btn to="" onclick={()=>dispatch(increaseQuntitiItem(pizzaId))} type="rounded" disabled={false}>+</Btn>
            <Btn to="" onclick={()=>{}} type="rounded" disabled={false}>-</Btn>
    </div>
  )
}
