import React from 'react'
import { navbarUtils } from '../utils/navbarUtils'
import { Link } from 'react-router-dom'

const Navabr = () => {
  return (
    <div>
        <ul>
            {navbarUtils.map((item) => (
                <li key={item.path}>
                    <Link to={item.path}>{item.name}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Navabr