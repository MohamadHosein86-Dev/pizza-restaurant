import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-black text-yellow-50 uppercase p-5 flex justify-between items-center ">
      <p className="font-semibold space-x-5">
        <span >23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to={"/cart"}>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
