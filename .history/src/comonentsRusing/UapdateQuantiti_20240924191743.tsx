import { useDispatch } from "react-redux";
import Btn from "./Btn";

export default function UapdateQuantiti() {
    const dispatch = useDispatch();
  return (
    <div className=" flex gap-2 items-center md:gap-3 ">
            <Btn to="" onclick={()=>dispatch()} type="rounded" disabled={false}>+</Btn>
            <Btn to="" onclick={()=>{}} type="rounded" disabled={false}>-</Btn>
    </div>
  )
}
