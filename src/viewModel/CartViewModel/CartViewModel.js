// ===== CART VIEW MODEL =====
import CartApi from "../../model/Cart/Cart"

const CartViewModel = (set, get) => ({
    cart: [],
    cartQuantity: 0, // This will represent unique products count
    
    getCart: async() => {
        try {
            const cartData = localStorage.getItem('cart')
            if(cartData) {
                const parsedCart = JSON.parse(cartData);
                set({
                    cart: parsedCart,
                    cartQuantity: parsedCart.length // Count unique products, not total quantity
                });
            }
        } catch (error) {
            console.log(error)
        }
    },
    
    addToCart: (product) => {
        const currentCart = get().cart;
        const existingProductIndex = currentCart.findIndex(item => item.id === product.id);
        
        let updatedCart;
        if (existingProductIndex !== -1) {
            updatedCart = currentCart.map((item, index) => 
                index === existingProductIndex 
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        } else {
            updatedCart = [...currentCart, { ...product, quantity: 1 }];
        }
        
        set({
            cart: updatedCart,
            cartQuantity: updatedCart.length 
        });
        
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    },

    updateCartItemQuantity: () => {
        const cartData = localStorage.getItem('cart');
        if (cartData) {
            const parsedCart = JSON.parse(cartData);
            set({
                cart: parsedCart,
                cartQuantity: parsedCart.length
            });
        }
    },

    removeCartItem: (id) => {
        const updatedCart = get().cart.filter((item) => item.id !== id);
        set({
            cart: updatedCart,
            cartQuantity: updatedCart.length
        });
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    },
    
    clearCart: () => {
        set({
            cart: [],
            cartQuantity: 0
        });
        localStorage.removeItem('cart');
    }
})

export default CartViewModel;