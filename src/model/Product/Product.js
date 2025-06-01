import api from '../base'

const ProductApi = {
    addProuct: function(product){   
        return api.request({
            url: '/items',
            method: 'POST',
            data: product,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    getProducts: function(){
        return api.request({
            url: '/items',
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