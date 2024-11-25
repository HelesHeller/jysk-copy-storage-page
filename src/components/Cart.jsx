import "./Cart.css";

const Cart = ({ cartItems, removeFromCart }) => {
    return (
        <div className="cart-page">
            <h2>Корзина</h2>
            {cartItems.length === 0 ? (
                <p>Ваша корзина пуста</p>
            ) : (
                <ul className="cart-items-list">
                    {cartItems.map((item, index) => (
                        <li key={index} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h3>{item.name}</h3>
                                <p>Цена: {item.price}</p>
                                <button onClick={() => removeFromCart(item)}>Удалить</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
