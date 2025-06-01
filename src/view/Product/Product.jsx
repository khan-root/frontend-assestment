import React, { useEffect } from 'react'
import Card from '../../components/Card'
import useStore from '../../Store/Store'
import CartApi from '../../model/Cart/Cart'
import { showToast } from '../../components/Toaster'

const Product = () => {
    const getProducts = useStore((state)=>state.getProducts)
    const products = useStore((state)=>state.products)
    const addToCart = useStore((state)=>state.addToCart)
    const updateCartItemQuantity = useStore((state)=>state.updateCartItemQuantity)
    
    useEffect(()=>{
        getProducts()
    },[])

    const handleAddToCart = async(product)=>{
         const cartData = localStorage.getItem('cart');
    let updatedCart = [];

    if (cartData) {
        const data = JSON.parse(cartData);
        const existingProductIndex = data.findIndex(item => item.id === product.id);

        if (existingProductIndex !== -1) {
            data[existingProductIndex].quantity += 1;
            updatedCart = data;
        } else {
            const newProduct = { ...product, quantity: 1 };
            data.push(newProduct);
            updatedCart = data;
        }
    } else {
        const newProduct = { ...product, quantity: 1 };
        updatedCart = [newProduct];
    }

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    
    updateCartItemQuantity();
    
    showToast('Product Added to Cart', 'success');

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