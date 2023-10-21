import './CartItem.css';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id, name, price, quantity }) => {
  const { removeItem, addItem } = useContext(CartContext);

  const handleRemove = () => {
    removeItem(id);
  };

  const handleIncrease = () => {
    addItem({ id, name, price }, 1);
  };

  const handleDecrease = () => {
    addItem({ id, name, price }, -1);
  };

  return (
    <div className="cart-item">
      <div className="item-info">
        <p>{name}</p>
        <p>Precio: ${price}</p>
        <p>Cantidad: {quantity}</p>
      </div>
      <div className="item-actions">
        <button onClick={handleDecrease}>-</button>
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleRemove}>Eliminar</button>
      </div>
    </div>
  );
};

export default CartItem;