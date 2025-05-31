import ProductApi from "../../model/Product/Product"

const ProductViewModel =(set, get)=> ({
    products: [],

    getProducts: async()=>{
        try {
            const response = await ProductApi.getProducts()
            const data = response.data 
            if(response.status === 200){
                set({products: data})
            }
        } catch (error) {
            console.log(error)
        }
    
    },
    addProduct: (product)=>{
        set({
            products: [...get().products, product]
        })
    },
    
})


export default ProductViewModel