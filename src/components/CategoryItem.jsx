import PropTypes from 'prop-types'; // Импорт prop-types для проверки пропсов
import { Link } from 'react-router-dom'; // Импорт Link для маршрутизации
import './CategoryItem.css'; // Подключение стилей для компонента

const CategoryItem = ({ name, image, path }) => (
    <div className="category-item">
        <Link to={`/categories/${path}`}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
        </Link>
    </div>
);

// Добавляем валидацию пропсов
CategoryItem.propTypes = {
    name: PropTypes.string.isRequired, // Проверка, что name — это строка и обязательный параметр
    image: PropTypes.string.isRequired, // Проверка, что image — это строка и обязательный параметр
    path: PropTypes.string.isRequired, // Проверка, что path — это строка и обязательный параметр
};

export default CategoryItem;
