import React, { useEffect } from 'react'
import Card from '../../components/Card'
import useStore from '../../Store/Store'

const Product = () => {
    const getProducts = useStore((state)=>state.getProducts)
    const products = useStore((state)=>state.products)
    useEffect(()=>{
        getProducts()
    },[])
  return (
    <div className='flex flex-wrap gap-4 p-4'>
        {products?.map((ele)=>(
            <Card 
                key={ele.id}
                data={ele}
            />
        ))}
    </div>
  )
}

export default Product