import { formatCurrency } from "../funcHelper/helpers";
interface typesss{
  item:{
    quantity:string,
    name:string,
    totalPrice:string
  }
  isLoadingIngredients:boolean,
  ingredients:string
}
function OrderItem({ item, isLoadingIngredients, ingredients }:typesss) {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
