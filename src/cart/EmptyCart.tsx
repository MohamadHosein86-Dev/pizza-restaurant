import LinkBtn from '../comonentsRusing/LinkBtn';

function EmptyCart() {
  return (
    <div>
      <LinkBtn to="/menu" >&larr; Back to menu </LinkBtn>

      <p className=' font-semibold '>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
