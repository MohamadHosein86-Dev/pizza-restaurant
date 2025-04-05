import LinkBtn from '../comonentsRusing/LinkBtn';
import Btn from '../comonentsRusing/Btn';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { claerCart, getCart } from './CartReducer';
import EmptyCart from './EmptyCart';

// تعریف نوع وضعیت برای اطلاعات کاربر
interface UserState {
  userName: {
    username: string;
  };
}

// تعریف نوع وضعیت سبد خرید
interface CartItemType {
  pizzaId: number;
  name: string;
  quantity: number;
  totalPrice: number;
}

function Cart() {
  // گرفتن اطلاعات سبد خرید از استور
  const cart = useSelector(getCart) as unknown as CartItemType[];

  // گرفتن اطلاعات کاربر از استور
  const { username } = useSelector((state: UserState) => state.userName);

  // تعریف dispatch برای ارسال اکشن‌ها
  const dispatch = useDispatch();

  // نمایش پیغام خالی بودن سبد خرید
  if (cart.length === 0) return <EmptyCart />;

  return (
    <div className='px-4 py-3'>
      <LinkBtn to='/menu'>&larr; Back to menu</LinkBtn>

      <h2 className='mt-7 text-xl font-semibold'>Your cart, {username}</h2>
      
      <ul className='divide-y divide-stone-300'>
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className='mt-6 space-x-2'>
        <Btn onClick={() => {}} type="secondry" disabled={false} to='/order/new'>
          Open Order pizzas
        </Btn>
        <Btn to='' onClick={() => dispatch(claerCart())} type="secondry" disabled={false}>
          Clear Cart
        </Btn>
      </div>
    </div>
  );
}

export default Cart;