import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";

function Menu() {
  const menu1 = useLoaderData();
 
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

  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error('Failed getting menu');

  const { data } = await res.json();
  return data;
}
export default Menu;
