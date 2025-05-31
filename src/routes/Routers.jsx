import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AddProduct, Cart, Product } from '../view'


const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/add-product' element={<AddProduct />} />
    </Routes>
  )
}

export default Routers