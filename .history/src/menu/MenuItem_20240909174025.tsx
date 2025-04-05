import { formatCurrency } from "../funcHelper/helpers";
interface typesss{
  pizza:{
    id:string,
  name:string,
  unitPrice:string,
  ingredients:[], 
  soldOut:string, 
  imageUrl:string
  }
}
function MenuItem({ pizza }:typesss) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(', ')}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
