import api from "../base"

const CartApi = {
    getCart: function(){
        return api.request({
            url: '/cart',
            method: 'GET'
        })
    },
    addToCart: function(id){
        return api.request({
            url: 'cart/add-to-cart',
            method: 'POST',
            data: id
        })
    },
    removeFromCart: function(id){
        return api.request({
            url: `cart/remove-from-cart?id=${id}`,
            method: 'DELETE'
        })
    },
    clearCart: function(){
        return api.request({
            url: 'cart/clear-cart',
            method: 'DELETE'
        })
    }
}

export default CartApi