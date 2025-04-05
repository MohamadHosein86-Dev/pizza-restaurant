import { formatCurrency } from "../funcHelper/Helpers";

interface typesss{
  item:{
    quantity:string,
    name:string,
    totalPrice:string
  }
  isLoadingIngredients:boolean,
  ingredients:string
}

function OrderItem({ item, isLoadingIngredients, ingredients } : typesss) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className=" py-3">
      <div className=" flex items-center justify-between gap-4 text-sm">
        <p>
          <span className=" font-bold">{quantity}&times;</span> {name}
        </p>
        <p className=" font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
