import React, { useEffect } from 'react'
import { navbarUtils } from '../utils/navbarUtils'
import { Link, useLocation } from 'react-router-dom'
import useStore from '../Store/Store'

const Navabr = () => {
    const location = useLocation()
    const isActive = (path) => location.pathname === path
    const cartQuantity = useStore((state)=>state.cartQuantity)
    const getCartQunatity = useStore((state)=> state.getCartQunatity)



    useEffect(()=>{
        getCartQunatity()
    },[])

  return (
    <div className='flex justify-center items-center h-16 bg-gray-200'>
        <ul className='flex gap-4'>
            {navbarUtils.map((item) => (
                <li key={item.path} className='relative'>
                    <Link to={item.path} className={`${isActive(item.path) ? 'text-blue-500' : 'text-gray-500'} hover:text-blue-500 text-lg`}>
                    {item.name}
                        {item.name === 'Cart' && cartQuantity > 0 && (
                            <span className='absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-1.5'>
                                {cartQuantity}
                            </span>
                        )}
                    </Link>
                </li>
            ))}
        </ul>
        
    </div>
  )
}

export default Navabr