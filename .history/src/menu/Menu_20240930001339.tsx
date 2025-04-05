import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";


function Menu() {
  const menu1 = useLoaderData() as typep ;
 
  return (
  <ul className=" divide-y divide-stone-300 px-2">
      {menu1.map((pizza:tyeee)=> (<MenuItem pizza={pizza} />))}
  </ul>
  )
}

export async function loader() {
  const res = await fetch(`https://react-fast-pizza-api.onrender.com/api/menu`);

  if (!res.ok) throw Error('Failed getting menu');

  const { data } = await res.json();
  console.log(data);
  
  return data;
  
}
export default Menu;
