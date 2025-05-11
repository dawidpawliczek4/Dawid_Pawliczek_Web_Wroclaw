import { createContext, useEffect, useMemo, useReducer } from "react";
import type { Product } from "../../products/types/Product";

export interface CartItem extends Product {
    quantity: number;
}

type CartAction = 
    | { type: "ADD_TO_CART"; payload: Product }
    | { type: "REMOVE_FROM_CART"; payload: number}
    | { type: "UPDATE_QUANTITY"; payload: CartItem };

const cartReducer = (state: CartItem[], action: CartAction) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            const existingItem = state.some(item => item.id === action.payload.id);
            if (existingItem) {
                return state
            } else {
                return [...state, { ...action.payload, quantity: 1 }];
            }
        }
        case "REMOVE_FROM_CART": {
            return state.filter(item => item.id !== action.payload);
        }
        case "UPDATE_QUANTITY": {
            return state.map(item =>
                item.id === action.payload.id
                    ? { ...item, quantity: action.payload.quantity }
                    : item
            );
        }
        default:
            return state;
    }
}

export const CartContext = createContext<{
    cart: CartItem[];
    total: number;
    addProduct: (item: Product) => boolean;
    removeProduct: (id: number) => void;
    updateQuantity: (item: CartItem) => void;
}>({
    cart: [],
    total: 0,
    addProduct: () => false,
    removeProduct: () => { },
    updateQuantity: () => { }
});

const initialState = () => {
    try {
        const cart = localStorage.getItem("cart");
        return cart ? JSON.parse(cart) : [];
    } catch {
        return []
    }
}

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, dispatch] = useReducer(cartReducer, [], initialState);    

    const total = useMemo(() => cart.reduce((acc, item) => acc + (item.price.main + item.price.fractional / 100) * item.quantity, 0), [cart]);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addProduct = (product: Product): boolean => {
        const existingItem = cart.some(item => item.id === product.id);
        if (existingItem) {
            return false;
        }
        dispatch({ type: "ADD_TO_CART", payload: product });
        return true;
    };

    const removeProduct = (id: number) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: id });
    };

    const updateQuantity = (item: CartItem) => {
        dispatch({ type: "UPDATE_QUANTITY", payload: item });
    };

    return (
        <CartContext.Provider value={{ cart, total, addProduct, removeProduct, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
}