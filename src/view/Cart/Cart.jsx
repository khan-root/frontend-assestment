import React, { useEffect } from 'react'
import { BiTrash } from 'react-icons/bi'
import useStore from '../../Store/Store'
import CartApi from '../../model/Cart/Cart'
import { showToast } from '../../components/Toaster'

const Cart = () => {


    const getCart = useStore((state)=>state.getCart)
    const cart = useStore((state)=>state.cart)
    const  removeCartItem = useStore((state)=>state.removeCartItem)
    const clearCart = useStore((state)=>state.clearCart)
    useEffect(()=>{
        getCart()
    },[])

    const total = cart?.reduce((acc, curr) => {
        const price = parseFloat(curr.price) || 0;
        const quantity = parseInt(curr.quantity) || 0;
        return acc + (price * quantity);
    }, 0);


    const removeFromCart = async(id)=>{
        const cartData = localStorage.getItem('cart')
        if(cartData){
            const data = JSON.parse(cartData)
            const newData = data.filter((item)=>item.id !== id)
            localStorage.setItem('cart', JSON.stringify(newData))
        }
        removeCartItem(id)
        // try {
        //     const response = await CartApi.removeFromCart(id)
        //     if(response.status === 200){
        //         removeCartItem(id)
        //         showToast('Product Removed from Cart', 'success')
        //     }
        // } catch (error) {
        //     console.log(error)
        // }
    }

    const removeAllCartItem =()=>{
        localStorage.removeItem('cart')
        clearCart()
        showToast('Cart Cleared', 'success')
        // try{
        //     const response = await CartApi.clearCart()
        //     if(response.status === 200){
        //         clearCart()
        //         showToast('Cart Cleared', 'success')
        //     }
        // } catch (error) {
        //     console.log(error)
        // }
    }

  return (
    <div className='w-[60%] mx-auto space-y-4'>
        
        <table className="min-w-full border border-gray-500 rounded-md">
        <thead>
            <tr className="bg-gray-100">
            <th className="p-3 border-b text-left">Image</th>
            <th className="p-3 border-b text-left">Name</th>
            <th className="p-3 border-b text-left">Price</th>
            <th className="p-3 border-b text-left">Quantity</th>
            <th className="p-3 border-b text-left">Action</th>
            </tr>
        </thead>
        <tbody>
            {cart?.map((data, index) => (
            <tr key={index} className="hover:bg-gray-50">
                <td className="p-3 border-b">
                <img
                    src={`http://localhost:3000/${data.img}`}
                    alt={data.name}
                    className="w-32 h-20 object-cover rounded"
                />
                </td>
                <td className="p-3 border-b font-semibold">{data.name}</td>
                <td className="p-3 border-b text-gray-600">{data.price}</td>
                <td className="p-3 border-b text-gray-600">{data?.quantity || 1}</td>
                <td className="p-3 border-b">
                    <span className='text-red-500 border border-red-500 rounded-md  w-[30px] h-[30px] text-[14px] flex items-center justify-center cursor-pointer'
                    onClick={()=>removeFromCart(data.id)}
                    >
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
                    {/* <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>Checkout</button> */}
                    <button className='bg-red-500 text-white px-4 py-2 rounded-md'
                    onClick={()=>removeAllCartItem()}
                    >Clear Cart</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart