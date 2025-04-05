import LinkBtn from '../comonentsRusing/LinkBtn';
import Btn from '../comonentsRusing/Btn';
import CartItem from './CartItem';

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
        <LinkBtn to='/menu'>&larr; Back to menu</LinkBtn>

      <h2 className=' mb-4'>Your cart, %NAME%</h2>
        <ul>
          {cart.map((res)=><CartItem key={res.pizzaId} item={res} />)}
        </ul>
      <div>
        <Btn type='primry' disabled={false} to="/order/new">Open Order pizzas</Btn>
        <button className=''>Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;
