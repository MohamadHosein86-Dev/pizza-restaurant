import LinkBtn from '../comonentsRusing/LinkBtn';
import Btn from '../comonentsRusing/Btn';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

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
interface typex{
  userName :{
    username:string
  }
}
function Cart() {
  
  const cart = fakeCart;
  
  const {username} =useSelector((res:typex)=>res.userName);

  return (
    <div className=' px-4 py-3'>
        <LinkBtn to='/menu'>&larr; Back to menu</LinkBtn>

      <h2 className=' mt-7 text-xl font-semibold ' >Your cart, {username}</h2>
        <ul className=' divide-y divide-stone-300'>
          {cart.map((res)=><CartItem key={res.pizzaId} item={res} />)}
        </ul>
      <div className=' mt-6 space-x-2'>
        <Btn onclick={()=>{}} type='primry' disabled={false} to="/order/new">Open Order pizzas</Btn>
        <Btn onclick={()=>{}} type='secondry' disabled={false} to="">Claer Cart</Btn>
      </div>
    </div>
  );
}

export default Cart;
