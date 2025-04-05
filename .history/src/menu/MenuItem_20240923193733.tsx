import Btn from "../comonentsRusing/Btn";
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
  function handleclick() {
      console.log(id);
      
  }
  return (
    <li className=" flex gap-4 py-2 " key={id}>
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? "opacity-70 grayscale" :""}`}/>
      
      <div className=" flex flex-col flex-grow ">
        <p className=" font-medium">{name}</p>
        <p className=" text-sm capitalize italic text-stone-500">{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? <p className=" text-sm">{formatCurrency(unitPrice)}</p> : <p className="text-sm font-medium uppercase text-stone-500">Sold out</p>}
        
        <Btn type="small" to="" onclick={handleclick} disabled={false}>Add to cart</Btn>
        </div>
      </div>
   
    </li>
  );
}

export default MenuItem;
