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

export async function loader() {
    const menu = await getMenu();
    return menu;
}
export default Menu;
