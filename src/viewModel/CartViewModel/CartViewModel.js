import CartApi from "../../model/Cart/Cart"

const CartViewModel = (set, get)=> ({
    cart: [],
    cartQuantity: 0,
    getCart: async()=>{
        try {
            const cartData = localStorage.getItem('cart')
            if(cartData){
                set({cart: JSON.parse(cartData)})
                set({cartQuantity: JSON.parse(cartData).length})
            }

            // const response = await CartApi.getCart()
            // const data = response.data 
            // if(response.status === 200){
            //     set({cart: data.items})
            // }
         
        } catch (error) {
            console.log(error)
        }
    },
    addToCart: (product)=>{
        set({
            cart: [...get().cart, product],
            cartQuantity: get().cartQuantity + 1
        })
    },
    removeCartItem: (id)=>{
        set({
            cart: get().cart.filter((item)=>item.id !== id),
            cartQuantity: get().cartQuantity - 1
        })
    },
    clearCart: ()=>{
        set({
            cart: [],
            cartQuantity: 0
        })
    }
})


export default CartViewModel