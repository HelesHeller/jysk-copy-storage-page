import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './CategoryItem.css';

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
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};

export default CategoryItem;
