import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";


function Menu() {
  const menu1 = useLoaderData() ;
 
  return (
  <>
      <h1>Menu</h1>
      {menu1.map((pizza)=> (<MenuItem pizza={pizza} />))}
  </>
  )
}
const API_URL = 'https://react-fast-pizza-api.onrender.com/api';

export async function fetchPizza() {
  const res = await fetch(`${API_URL}/menu`);

  if (!res.ok) throw Error('Failed getting menu');

  const { data } = await res.json();
  console.log(data);
  
  return data;
  
}
export default Menu;
