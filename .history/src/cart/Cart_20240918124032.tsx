import { Link } from 'react-router-dom';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div>
        <LinkBtn to={"/menu"}>&larr; Back to menu</LinkBtn>

      <h2>Your cart, %NAME%</h2>

      <div>
        <Link to="/order/new">Order pizzas</Link>
        <button className=''>Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;
