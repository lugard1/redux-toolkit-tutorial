// /* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const CartContainer = () => {
  // eslint-disable-next-line no-unused-vars
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => <CartItem key={item.id} {...item} />)}
      </div>
    </section>
  );
};

export default CartContainer;
