import { useParams } from 'react-router-dom';
import "./CategoryProducts.css";

const productsData = {
    wardrobes: [
        { id: 1, name: "Шафа 1", price: "2000 грн", image: "/src/assets/image/products/wardrobe1.jpg" },
        { id: 2, name: "Шафа 2", price: "2500 грн", image: "/src/assets/image/products/wardrobe2.jpg" },
    ],
    "storage-furniture": [
        { id: 3, name: "Меблі 1", price: "1500 грн", image: "/src/assets/image/products/storage1.jpg" },
        { id: 4, name: "Меблі 2", price: "1800 грн", image: "/src/assets/image/products/storage2.jpg" },
    ],
};

const CategoryProducts = ({ addToCart }) => {
    const { categoryName } = useParams();
    const products = productsData[categoryName] || [];

    return (
        <div className="category-products">
            <h2>Товари для категорії: {categoryName}</h2>
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <button onClick={() => addToCart(product)}>Добавить в корзину</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryProducts;
