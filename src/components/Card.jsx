import React from 'react'
import { CiShoppingCart } from 'react-icons/ci'

const Card = (props) => {
    const {data, addToCart} = props
  return (
    <div className='bg-white rounded-lg shadow-md p-4 border border-gray-500 py-2 px-4 w-52'>
        <img src={`http://localhost:3000/${data.img}`} alt={data.name} className='w-full h-48 object-cover rounded-lg' />
        <h2 className='text-lg font-bold'>{data.name}</h2>
        <div className='flex items-center gap-2'>
          <span className='text-lg text-gray-500'>Price : </span>
          <span className='text-sm text-gray-500'>{data.price} Rs /-</span>
        </div>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md border border-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500'
        onClick={()=>addToCart(data)}
        >
            <CiShoppingCart />
        </button>
    </div>
  )
}

export default Card