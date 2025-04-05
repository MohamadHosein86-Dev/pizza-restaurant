import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div>
      <p>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to={"/"}>Open cart &rarr;</Li>
    </div>
  );
}

export default CartOverview;
