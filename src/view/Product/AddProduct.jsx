import React, { useState } from 'react'
import Input from '../../components/Input'
import { validateInput } from '../../validation/validation'
import { showToast } from '../../components/Toaster'
import ProductApi from '../../model/Product/Product'
import useStore from '../../Store/Store'

const AddProduct = () => {
    const addProduct = useStore((state)=>state.addProduct)

    const [formValue, setFormValue] = useState({
        name: '',
        price: '',
        image: null,
        loading: false,
    })


    const handleChange = (e)=>{
        const {name, value, type, files} = e.target
        setFormValue((prevState)=>({
            ...prevState,
            [name]: type === 'file' ? files[0] : value
        }))
    }


    const validateForm = ()=>{
        const {name, price, image} = formValue
        const nameValidation = validateInput('Product Name', name);
        const priceValidation = validateInput('Product Price', price);
        const imageValidation = validateInput('Product Image', image);
        if (!nameValidation.isValid) {
           return { isValid: false, message: nameValidation.message };
        }

        if(!priceValidation.isValid){
            return { isValid: false, message: priceValidation.message };
        }

        if(!imageValidation.isValid){
            return { isValid: false, message: imageValidation.message };
        }

        return { isValid: true, message: '' };
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const {name, price, image} = formValue
        const validation = validateForm()
        if(!validation.isValid){
            showToast(validation.message, 'error')
            return
        }

        setFormValue((prevState)=>({
            ...prevState, 
            loading:true
        }))

        // const product = {
        //     name: formValue.name,
        //     price: formValue.price,
        //     img: formValue.image,
        // }


        try {
            const product = new FormData()
            product.append('name', name)
            product.append('price', price)
            product.append('img', image)
            const resposne = await ProductApi.addProuct(product)
            console.log(resposne)
            const data = resposne.data 
            if(resposne.status === 200){
                addProduct(data)
                showToast('Product Added Successfully', 'success')
            }
        } catch (error) {
            console.log(error)
        }finally{
            setFormValue((prevState)=>({
                ...prevState,
                loading: false,
                name: '',
                price: '',
                image: '',
            }))
                
        }

    }

  return (
    <div className='w-[40%] mx-auto'>
        <form onSubmit={handleSubmit} className='border border-gray-500 rounded-md p-4 space-y-4'>
            <div className='space-y-2'>
                <label>Product Name</label>
                <Input placeholder='Product Name' onChange={handleChange} name='name' value={formValue.name} />
            </div>
            <div className='space-y-2'>
                <label>Product Price</label>
                <Input placeholder='Product Price' onChange={handleChange} name='price' value={formValue.price} />
            </div>
            <div className='space-y-2'>
                <label>Product Image</label>
                <Input placeholder='Product Image Url' onChange={handleChange} name='image'
                type='file'
                accept='image/*'
                />
            </div>
            <div className='flex items-center justify-center'>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-md' disabled={formValue.loading}>Add Product</button>
            </div>
        </form>
    </div>
  )
}

export default AddProduct