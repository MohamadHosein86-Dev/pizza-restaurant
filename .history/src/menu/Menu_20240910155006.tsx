import { useLoaderData } from "react-router-dom";
import { getMenu } from "../servesesAPI/apiRestaurant";
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
async function getMenu() {
  const res = await fetch(`${API_URL}/menu`);

  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error('Failed getting menu');

  const { data } = await res.json();
  return data;
}
export async function loader() {
    const menu = await getMenu();
    return menu;
}
export default Menu;
