import React, { useEffect } from 'react'
import Card from '../../components/Card'
import useStore from '../../Store/Store'
import CartApi from '../../model/Cart/Cart'
import { showToast } from '../../components/Toaster'

const Product = () => {
    const getProducts = useStore((state)=>state.getProducts)
    const products = useStore((state)=>state.products)
    const addToCart = useStore((state)=>state.addToCart)
    useEffect(()=>{
        getProducts()
    },[])

    const handleAddToCart = async(product)=>{
        // const productId = {
        //     id: product.id.toString()
        // }
        // try {
        //    const response = await CartApi.addToCart(productId)
        //    if(response.status === 200){
        //     showToast('Product Added to Cart', 'success')
        //    }
        // } catch (error) {
        //     console.log(error)
        // }
        const cartData = localStorage.getItem('cart')
        if(cartData){
            const data = JSON.parse(cartData)
            const newData = [...data, product]
            localStorage.setItem('cart', JSON.stringify(newData))
        }else{
            localStorage.setItem('cart', JSON.stringify([product]))
        }
        showToast('Product Added to Cart', 'success')
        addToCart(product)
    }

  return (
    <div className='flex flex-wrap gap-4 p-4'>
        {products?.map((ele)=>(
            <Card 
                key={ele.id}
                data={ele}
                addToCart={handleAddToCart}
            />
        ))}
    </div>
  )
}

export default Product