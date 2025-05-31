import api from "../base"

const CartApi = {
    getCart: function(){
        return api.request({
            url: '/cart',
            method: 'GET'
        })
    },
    addToCart: function(product){
        return api.request({
            url: '/cart',
            method: 'POST',
            data: product
        })
    }
}

export default CartApi