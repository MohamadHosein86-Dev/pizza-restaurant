import { useDispatch } from "react-redux";
import BtnDelete from "../comonentsRusing/BtnDelete";
import { formatCurrency } from "../funcHelper/Helpers";
import { delteitem } from "./CartReducer";
import UapdateQuantiti from "../comonentsRusing/UapdateQuantiti";

interface CartItemProps {
  item: {
    pizzaId: number;
    name: string;
    quantity: number;
    totalPrice: number;
  };
}

function CartItem({ item }: CartItemProps) {
/*   const { name, quantity, totalPrice, pizzaId } = item; */
  const dispatch = useDispatch();

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {item.quantity}&times; {item.name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(item.totalPrice)}</p>
        <UapdateQuantiti pizzaId={item.pizzaId} />
        <BtnDelete onclick={() => dispatch(delteitem(item.pizzaId))} />
      </div>
    </li>
  );
}

export default CartItem;