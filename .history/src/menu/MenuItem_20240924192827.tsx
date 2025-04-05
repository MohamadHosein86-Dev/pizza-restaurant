import { useDispatch, useSelector } from "react-redux";
import Btn from "../comonentsRusing/Btn";
import { formatCurrency } from "../funcHelper/Helpers";
import { additem, delteitem, getcurenqiantiti } from "../cart/CartReducer";
import BtnDelete from "../comonentsRusing/BtnDelete";
import UapdateQuantiti from "../comonentsRusing/UapdateQuantiti";

interface typesss{
  pizza:{
    id:number,
  name:string,
  unitPrice:string,
  ingredients:[], 
  soldOut:string, 
  imageUrl:string
  }
}
function MenuItem({ pizza }:typesss) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch()

  function handleclick() {
     const newitem = {
      pizzaId :id,
      name,
      quantity : 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(additem(newitem));
  };

  const curenqantiti = useSelector(getcurenqiantiti(id));
  return (
    <li className=" flex gap-4 py-2 " key={id}>
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? "opacity-70 grayscale" :""}`}/>
      
      <div className=" flex flex-col flex-grow ">
        <p className=" font-medium">{name}</p>
        <p className=" text-sm capitalize italic text-stone-500">{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? <p className=" text-sm">{formatCurrency(unitPrice)}</p> : <p className="text-sm font-medium uppercase text-stone-500">Sold out</p>}
        
          {!soldOut && curenqantiti == 0 && <Btn type="small" to="" onclick={handleclick} disabled={false}>Add to cart</Btn>}
          {curenqantiti !== 0 && <div className=" flex gap-4 items-center">
            <BtnDelete onclick={()=>dispatch(delteitem(id))  }/>
            <UapdateQuantiti pizzaId={id} />
            </div> }

        </div>
      </div>
   
    </li>
  );
}

export default MenuItem;
