import { useDispatch } from "react-redux";
import BtnDelete from "../comonentsRusing/BtnDelete";
import { formatCurrency } from "../funcHelper/Helpers";
import { delteitem } from "./CartReducer";
import UapdateQuantiti from "../comonentsRusing/UapdateQuantiti";

interface typees{
  pizzaId:number
  , name:string
  , quantity:number, 
  totalPrice:number
}
interface typees1 {
  item:typees
}
function CartItem( item:typees1 ) {
  const {  name, quantity, totalPrice , pizzaId } = item;
  const dispatch = useDispatch();

  return (
    <li className=" py-3 sm:flex sm:items-center sm:justify-between ">
      <p className=" mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className=" flex items-center justify-between sm:gap-6">
        <p className=" text-sm font-bold ">{formatCurrency(totalPrice)}</p>
        <UapdateQuantiti pizzaId={pizzaId}/>
        <BtnDelete onclick={()=>dispatch(delteitem(pizzaId)) }/>
      </div>
    </li>
  );
}

export default CartItem;
