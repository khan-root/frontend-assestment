import React from 'react'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Toaster = () => {
  return (
    <ToastContainer 
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
    />
  )
}


const showToast = (message, type) => {
    switch(type){
        case 'success':
            toast.success(message)
            break
        case 'error':
            toast.error(message)
            break
        default:
            toast.info(message)
            break
    }

}


export {Toaster, showToast}