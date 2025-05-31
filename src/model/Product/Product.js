import api from '../base'

const ProductApi = {
    addProuct: function(product){
        return api.request({
            url: '/products',
            method: 'POST',
            data: product
        })
    },
    getProducts: function(){
        return api.request({
            url: '/products',
            method: 'GET'
        })
    },
    deleteProduct: function(id){
        return api.request({
            url: `/products/${id}`,
            method: 'DELETE'
        })
    },
    
}


export default ProductApi