import { createContext, useContext, useState } from "react";

// Criando o contexto do carrinho
const CartContext = createContext();

// Provider do carrinho
export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    // Adicionar produto ao carrinho
    const addToCart = (produto, quantidade = 1) => {
        const existing = cart.find(item => item.id === produto.id);
        if (existing) {
            setCart(cart.map(item =>
                item.id === produto.id
                    ? { ...item, quantidade: item.quantidade + quantidade }
                    : item
            ));
        } else {
            setCart([...cart, { ...produto, quantidade }]);
        }
    };

    // Remover produto do carrinho
    const removeFromCart = (produtoId) => {
        setCart(cart.filter(item => item.id !== produtoId));
    };

    // Atualizar quantidade de um produto
    const updateQuantity = (produtoId, novaQuantidade) => {
        setCart(cart.map(item =>
            item.id === produtoId
                ? { ...item, quantidade: novaQuantidade }
                : item
        ));
    };

    // Limpar carrinho
    const clearCart = () => {
        setCart([]);
    };

    // Total do carrinho
    const total = cart.reduce((acc, item) => {
        const valor = Number(item.valor || 0);
        const desconto = Number(item.desconto || 0);
        const final = valor - (valor * desconto) / 100;
        return acc + final * item.quantidade;
    }, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                total
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
export const useCart = () => useContext(CartContext);