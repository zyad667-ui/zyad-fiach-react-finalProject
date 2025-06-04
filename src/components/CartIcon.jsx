import React, { useRef, useState } from "react";
import CartDropdown from "./CartDropdown";
import { useCart } from "./CartContetxt";

export default function CartIcon() {
    const { cart } = useCart();
    const [open, setOpen] = useState(false);
    const iconRef = useRef();
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div
            id="cart-icon"
            ref={iconRef}
            style={{ position: "relative", display: "inline-block" }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <button className="text-gray-400 hover:text-red-500 transition-colors p-1" style={{ position: "relative" }}>
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.39.39-.39 1.024 0 1.414L6.414 17H19M7 13v4a2 2 0 002 2h8a2 2 0 002-2v-4M7 13H5.4" />
                </svg>
                {totalQty > 0 && (
                    <span style={{
                        position: "absolute",
                        top: 2,
                        right: 2,
                        background: "#ef4444",
                        color: "#fff",
                        borderRadius: "50%",
                        fontSize: 12,
                        width: 18,
                        height: 18,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 600,
                        border: "2px solid #fff"
                    }}>{totalQty}</span>
                )}
            </button>
            {open && <CartDropdown />}
        </div>
    );
} 