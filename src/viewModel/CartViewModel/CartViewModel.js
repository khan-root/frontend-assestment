import CartApi from "../../model/Cart/Cart"

const CartViewModel = (set, get)=> ({
    cart: [],
    getCart: async()=>{
        try {
            const response = await CartApi.getCart()
            const data = response.data 
            if(response.status === 200){
                set({cart: data.items})
            }
         
        } catch (error) {
            console.log(error)
        }
    },
    removeCartItem: (id)=>{
        set({
            cart: get().cart.filter((item)=>item.id !== id)
        })
    },
    clearCart: ()=>{
        set({
            cart: []
        })
    }
})


export default CartViewModel