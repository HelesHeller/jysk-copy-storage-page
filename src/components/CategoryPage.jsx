import { Link } from 'react-router-dom';
import "./CategoryPage.css";

// Пути к изображениям обновлены для использования из public
const categories = [
    { name: "Шафи для одягу", path: "wardrobes", image: "/assets/image/categories/wardrobes.jpg" },
    { name: "Меблі для зберігання", path: "storage-furniture", image: "/assets/image/categories/storage-furniture.jpg" },
    { name: "Меблі для передпокою", path: "hallway-furniture", image: "/assets/image/categories/hallway-furniture.jpg" },
    { name: "Аксесуари для прання", path: "laundry-accessories", image: "/assets/image/categories/laundry-accessories1.jpg" },
];

const CategoryPage = ({ cartItems }) => {
    return (
        <div className="category-page">
            <header>
                <h2>Зберігання і підкатегорії</h2>
                <Link to="/cart" className="cart-link">
                    Корзина ({cartItems.length})
                </Link>
            </header>
            <div className="categories">
                {categories.map((category) => (
                    <Link key={category.path} to={`/categories/${category.path}`} className="category-card">
                        <img src={category.image} alt={category.name} />
                        <h3>{category.name}</h3>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;
