import React, { useState } from "react";
import "./ProductsGrid.css";
import { useCart } from '../../../components/CartContetxt';

const products = [
    { name: "Boxy7 T-Shirt with Roll Sleeve", price: 20, sale: false, category: "Best Seller", image: "https://i.pinimg.com/736x/fb/d0/c4/fbd0c44f2dc475fb3c874ebfef2f8531.jpg" },
    { name: "Boxy6 T-Shirt with Roll Sleeve", price: 20, sale: false, category: "Featured", image: "https://i.pinimg.com/736x/03/49/3d/03493d3ba8ff8a9d866b33a9996e0a55.jpg" },
    { name: "Boxy5 T-Shirt with Roll Sleeve", price: 20, sale: false, category: "Home page", image: "https://i.pinimg.com/736x/3c/9b/74/3c9b74b52093d832bb32c3f73120efe5.jpg" },
    { name: "Boxy4 T-Shirt with Roll Sleeve", price: 20, sale: false, category: "Best Seller", image: "https://i.pinimg.com/736x/e8/5d/fd/e85dfde78ef8ed7acfdf723407e5f5c3.jpg" },
    { name: "Boxy3 T-Shirt with Roll Sleeve", price: 20, sale: true, oldPrice: 30, category: "Featured", image: "https://i.pinimg.com/736x/2a/fd/0c/2afd0c9420a75f61b30df345d57fe7fe.jpg" },
    { name: "Boxy2 T-Shirt with Roll Sleeve", price: 20, sale: false, category: "Home page", image: "https://i.pinimg.com/736x/db/79/a4/db79a4772523bb36ba41fb045803dcc2.jpg" },
    { name: "Boxy1 T-Shirt with Roll Sleeve", price: 20, sale: false, category: "Best Seller", image: "https://i.pinimg.com/736x/76/db/9c/76db9c18ac3fa7fe45965c5dd0ea1a7d.jpg" },
    { name: "Boxy T-Shirt with Roll Sleeve Detail", price: 20, sale: false, category: "Featured", image: "https://i.pinimg.com/736x/25/c0/f1/25c0f1d753569cc533dd2f582d22bed4.jpg" },
];

const categories = ["All", "Best Seller", "Featured", "Home page"];

export default function ProductsGrid() {
    const { addToCart } = useCart();
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProducts = selectedCategory === "All"
        ? products
        : products.filter((product) => product.category === selectedCategory);

    const handleAddToCart = (product, e) => {
        const img = e.currentTarget.closest('.product-card').querySelector('img');
        const imageRect = img.getBoundingClientRect();
        const cartIcon = document.getElementById('cart-icon');
        const cartIconRect = cartIcon.getBoundingClientRect();
        addToCart(product, imageRect, cartIconRect);
    };

    return (
        <div className="products-container">
            <h2 style={{ color: '#b00000' }}>OUR PRODUCTS</h2>
            <div className="products-menu">
                {categories.map((cat) => (
                    <span
                        key={cat}
                        className={selectedCategory === cat ? "active" : ""}
                        onClick={() => setSelectedCategory(cat)}
                    >
                        {cat}
                    </span>
                ))}
            </div>
            <div className="products-grid">
                {filteredProducts.map((product, idx) => (
                    <div className="product-card" key={idx}>
                        <div className="product-image-wrapper">
                            <img
                                className="product-image"
                                src={product.image}
                                alt={product.name}
                            />
                            <button className="add-to-cart-btn" onClick={e => handleAddToCart(product, e)}>ADD TO CART</button>
                        </div>
                        <div className="product-info">
                            {product.sale && (
                                <span className="product-sale-badge">Sale</span>
                            )}
                            <div className="product-name" style={{ color: '#333' }}>{product.name}</div>
                            <div className="product-price">
                                {product.sale ? (
                                    <>
                                        <span className="old-price">${product.oldPrice}.00</span>
                                        <span className="sale-price">${product.price}.00</span>
                                    </>
                                ) : (
                                    <span>${product.price}.00</span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
} 