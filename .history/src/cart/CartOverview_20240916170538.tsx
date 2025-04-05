import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-black text-yellow-50 uppercase ">
      <p>
        <span className="font-semibold">23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to={"/cart"}>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
