import React, { useEffect } from 'react'
import Card from '../../components/Card'
import useStore from '../../Store/Store'
import CartApi from '../../model/Cart/Cart'

const Product = () => {
    const getProducts = useStore((state)=>state.getProducts)
    const products = useStore((state)=>state.products)
    useEffect(()=>{
        getProducts()
    },[])

    const addToCart = async(product)=>{
        try {
            const response = await CartApi.addToCart(product.id)
            // console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='flex flex-wrap gap-4 p-4'>
        {products?.map((ele)=>(
            <Card 
                key={ele.id}
                data={ele}
                addToCart={addToCart}
            />
        ))}
    </div>
  )
}

export default Product