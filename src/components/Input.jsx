import React from 'react'

function Input(props) {
    const {placeholder, onChange, name, value, type} = props
  return (
    <div>
        <input type={type} placeholder={placeholder} onChange={onChange} name={name} value={value} className='w-full h-10 rounded-md border border-gray-500 p-2' />
    </div>
  )
}

export default Input