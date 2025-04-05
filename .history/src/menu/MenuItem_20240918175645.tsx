import { formatCurrency } from "../funcHelper/Helpers";

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
    <li className=" flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? "opacity-70 grayscale" :""}`}/>
      
      <div className=" flex fle-col items-center">
        <p className=" font-medium">{name}</p>
        <p className=" text-sm capitalize italic text-stone-500">{ingredients.join(', ')}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
   
    </li>
  );
}

export default MenuItem;
