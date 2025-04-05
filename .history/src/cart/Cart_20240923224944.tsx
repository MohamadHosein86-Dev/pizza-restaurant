import LinkBtn from '../comonentsRusing/LinkBtn';
import Btn from '../comonentsRusing/Btn';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { getCart } from './CartReducer';


interface typex{
  userName :{
    username:string
  }
}
function Cart() {
  const cartt = useSelector(getCart)
  const cart = cartt;
  
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
