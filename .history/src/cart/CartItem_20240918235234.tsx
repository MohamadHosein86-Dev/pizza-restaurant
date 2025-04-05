import { formatCurrency } from "../funcHelper/Helpers";

interface typees{
  pizzaId:number
  , name:string
  , quantity:number, 
  totalPrice:number
}
interface typees1 {
  item:typees
}
function CartItem({ item }:typees1) {
  const {  name, quantity, totalPrice } = item;

  return (
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default CartItem;
