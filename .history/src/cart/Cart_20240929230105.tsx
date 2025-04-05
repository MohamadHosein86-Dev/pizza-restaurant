import LinkBtn from '../comonentsRusing/LinkBtn';
import Btn from '../comonentsRusing/Btn';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { claerCart, getCart } from './CartReducer';
import EmptyCart from './EmptyCart';


interface typex{
  userName :{
    username:string
  }
}
interface tyy{
  pizzaId:number,
}
function Cart() {
  const cartt = useSelector(getCart)
  const cart = cartt;

  const dispatch = useDispatch();
  const {username} =useSelector((res:typex)=>res.userName);

  if(cart.length == 0 ) return <EmptyCart />;


  
  return (
    <div className=' px-4 py-3'>
        <LinkBtn to='/menu'>&larr; Back to menu</LinkBtn>

      <h2 className=' mt-7 text-xl font-semibold ' >Your cart, {username}</h2>
        <ul className=' divide-y divide-stone-300'>
          {cart.map((res:tyy)=><CartItem key={res.pizzaId} item={res} />)}
        </ul>
      <div className=' mt-6 space-x-2'>
        <Btn onclick={()=>{}} type='primry' disabled={false} to="/order/new">Open Order pizzas</Btn>
        <Btn onclick={()=>dispatch(claerCart())} type='secondry' disabled={false} to="">Claer Cart</Btn>
      </div>
    </div>
  );
}

export default Cart;
