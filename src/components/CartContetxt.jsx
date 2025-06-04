import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [flyingImage, setFlyingImage] = useState(null);

    function addToCart(product, imageRect, cartIconRect) {
        setCart((prev) => {
            const found = prev.find((item) => item.id === product.id);
            if (found) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        setFlyingImage({ image: product.image, from: imageRect, to: cartIconRect });
    }

    function removeFromCart(id) {
        setCart((prev) => prev.filter((item) => item.id !== id));
    }

    function clearFlyingImage() {
        setFlyingImage(null);
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                flyingImage,
                clearFlyingImage,
            }}
        >
            {children}
        </CartContext.Provider>
    );
} 