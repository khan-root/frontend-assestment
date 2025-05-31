import React from 'react'

function Input(props) {
    const {placeholder, onChange} = props
  return (
    <div>
        <input type="text" placeholder={placeholder} onChange={onChange}  className='w-full h-10 rounded-md border border-gray-500 p-2' />
    </div>
  )
}

export default Input