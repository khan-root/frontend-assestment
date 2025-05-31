import React, { useState } from 'react'
import Input from '../../components/Input'

const AddProduct = () => {

    const [formValue, setFormValue] = useState({
        name: '',
        price: '',
        image: '',
        loading: false,
    })


    const handleChange = (e)=>{
        const {name, value} = e.target
        setFormValue((prevState)=>({
            ...prevState,
            [name]: value
        }))
    }


    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(formValue)
    }

  return (
    <div className='w-[40%] mx-auto'>
        <form onSubmit={handleSubmit} className='border border-gray-500 rounded-md p-4 space-y-4'>
            <div className='space-y-2'>
                <label>Product Name</label>
                <Input placeholder='Product Name' onChange={handleChange} />
            </div>
            <div className='space-y-2'>
                <label>Product Price</label>
                <Input placeholder='Product Price' onChange={handleChange} />
            </div>
            <div className='space-y-2'>
                <label>Product Image</label>
                <Input placeholder='Product Image Url' onChange={handleChange} />
            </div>
            <div className='flex items-center justify-center'>

                <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>Add Product</button>
            </div>
        </form>
    </div>
  )
}

export default AddProduct