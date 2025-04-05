import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";



type Pizza = {
  id: number;
  name: string;
  price: number;
  // سایر ویژگی‌های مربوط به هر پیتزا را اضافه کنید
};

function Menu() {
  // تعریف نوع داده برگشتی از useLoaderData
  const menu1 = useLoaderData() as Pizza[]; 

  return (
    <ul className="divide-y divide-stone-300 px-2">
      {menu1.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}

export async function loader() {
  const res = await fetch('https://react-fast-pizza-api.onrender.com/api/menu');

  if (!res.ok) throw new Error('Failed getting menu');

  const { data } = await res.json();

  // مشخص کردن نوع داده بازگشتی
  return data as Pizza[];
}

export default Menu;