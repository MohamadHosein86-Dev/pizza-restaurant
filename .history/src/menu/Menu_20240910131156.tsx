import { useLoaderData } from "react-router-dom";
import { getMenu } from "../servesesAPI/apiRestaurant";

function Menu() {
  
 
  return (
    <h1>Menu</h1>
   
  )
}
export async function loader() {
    const menu = await getMenu();
    return menu;
}
export default Menu;
