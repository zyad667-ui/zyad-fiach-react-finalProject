import React from "react";
import { useCart } from "./CartContetxt";
import { useNavigate } from "react-router-dom";

export default function CartDropdown({ onMouseEnter, onMouseLeave }) {
    const { cart, removeFromCart } = useCart();
    const navigate = useNavigate();
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="cart-dropdown" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className="cart-dropdown-header">Mon Panier</div>
            <div className="cart-dropdown-list">
                {cart.length === 0 ? (
                    <div style={{ padding: 20, color: '#888', textAlign: 'center' }}>Votre panier est vide.</div>
                ) : cart.map(item => (
                    <div className="cart-dropdown-item" key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <div className="cart-dropdown-item-title">{item.title}</div>
                        <div style={{ marginLeft: 8, fontWeight: 500 }}>x{item.quantity}</div>
                        <div style={{ marginLeft: 12, minWidth: 48, textAlign: 'right' }}>{item.price} €</div>
                        <button className="cart-dropdown-item-remove" onClick={() => removeFromCart(item.id)} title="Retirer">×</button>
                    </div>
                ))}
            </div>
            <div className="cart-dropdown-footer">
                <div className="cart-dropdown-subtotal">
                    <span>Sous-total</span>
                    <span>{subtotal.toFixed(2)} €</span>
                </div>
                <div className="cart-dropdown-actions">
                    <button className="view-cart" onClick={() => navigate('/cart')}>VIEW CART</button>
                    <button className="checkout" onClick={() => navigate('/checkout')}>CHECKOUT</button>
                </div>
            </div>
        </div>
    );
} 