import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CategoryPage from './components/CategoryPage';
import CategoryProducts from './components/CategoryProducts';
import Cart from './components/Cart';
import { useState } from 'react';

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
    };

    const removeFromCart = (product) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== product.id)
        );
    };

    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<CategoryPage cartItems={cartItems} />} />
                    <Route
                        path="/categories/:categoryName"
                        element={<CategoryProducts addToCart={addToCart} />}
                    />
                    <Route
                        path="/cart"
                        element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
