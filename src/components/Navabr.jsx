import React from 'react'
import { navbarUtils } from '../utils/navbarUtils'
import { Link, useLocation } from 'react-router-dom'

const Navabr = () => {
    const location = useLocation()
    const isActive = (path) => location.pathname === path
  return (
    <div className='flex justify-center items-center h-16 bg-gray-200'>
        <ul className='flex gap-4'>
            {navbarUtils.map((item) => (
                <li key={item.path}>
                    <Link to={item.path} className={`${isActive(item.path) ? 'text-blue-500' : 'text-gray-500'} hover:text-blue-500 text-lg`}>{item.name}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Navabr