import React, { useEffect } from 'react'
import { BiTrash } from 'react-icons/bi'
import useStore from '../../Store/Store'

const Cart = () => {


    const getCart = useStore((state)=>state.getCart)
    const cart = useStore((state)=>state.cart)
    useEffect(()=>{
        getCart()
    },[])

    const total = cart?.reduce((acc, curr) => acc + parseFloat(curr.price), 0);


  return (
    <div className='w-[60%] mx-auto space-y-4'>
        
        <table className="min-w-full border border-gray-500 rounded-md">
        <thead>
            <tr className="bg-gray-100">
            <th className="p-3 border-b text-left">Image</th>
            <th className="p-3 border-b text-left">Name</th>
            <th className="p-3 border-b text-left">Price</th>
            <th className="p-3 border-b text-left">Action</th>
            </tr>
        </thead>
        <tbody>
            {cart?.map((data, index) => (
            <tr key={index} className="hover:bg-gray-50">
                <td className="p-3 border-b">
                <img
                    src={data.image}
                    alt={data.name}
                    className="w-32 h-20 object-cover rounded"
                />
                </td>
                <td className="p-3 border-b font-semibold">{data.name}</td>
                <td className="p-3 border-b text-gray-600">{data.price}</td>
                <td className="p-3 border-b">
                    <span className='text-red-500 border border-red-500 rounded-md  w-[30px] h-[30px] text-[14px] flex items-center justify-center cursor-pointer'>
                        <BiTrash />
                    </span>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
        <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
                <span className='text-gray-500'>Total: <span className='font-bold'>{total}</span></span>
                <div className='flex items-center space-x-4'>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>Checkout</button>
                    <button className='bg-red-500 text-white px-4 py-2 rounded-md'>Clear Cart</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart