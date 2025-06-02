import React from 'react';
import './CategorieSection.css';

const categories = [
    {
        label: 'SUNGLASSES',
        image: 'https://i.pinimg.com/736x/8f/77/a6/8f77a6f12b952ba03460ee5fb7c37451.jpg',
        alt: 'Sunglasses',
    },
    {
        label: 'jackets',
        image: 'https://i.pinimg.com/736x/2b/e0/eb/2be0eb614e6ecc1ee44536b75e76c5eb.jpg',
        alt: 'Watch',
    },
    {
        label: 'BAGS',
        image: 'https://i.pinimg.com/736x/e0/e2/ae/e0e2ae2547e4936271e4e4e0eb14ea4d.jpg',
        alt: 'Bag',
    },
];

const CategorySection = () => {
    return (
        <div className="category-section">
            {categories.map((cat, idx) => (
                <div className="category-card" key={cat.label}>
                    <div className="category-image-wrapper">
                        <img src={cat.image} alt={cat.alt} className="category-image" />
                    </div>
                    <div className="category-label-wrapper">
                        <span className="category-label">{cat.label}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CategorySection; 