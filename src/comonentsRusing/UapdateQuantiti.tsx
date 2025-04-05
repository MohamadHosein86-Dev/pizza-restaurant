import { useDispatch, useSelector } from "react-redux";
import Btn from "./Btn";
import { decraseQuntitiItem, getcurenqiantiti, increaseQuntitiItem } from "../cart/CartReducer";

interface tyep{
    pizzaId:number
}
export default function UapdateQuantiti({pizzaId}:tyep) {
    const dispatch = useDispatch();
    const quantiti = useSelector(getcurenqiantiti(pizzaId))
  return (
    <div className=" flex gap-2 items-center md:gap-3 ">
            <Btn to="" onClick={()=>dispatch(increaseQuntitiItem(pizzaId))} type="rounded" disabled={false}>+</Btn>
            <span className=" ">{quantiti}</span>
            <Btn to="" onClick={()=>dispatch(decraseQuntitiItem(pizzaId))} type="rounded" disabled={false}>-</Btn>
    </div>
  )
}
