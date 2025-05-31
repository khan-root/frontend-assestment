import React from 'react'
import { Routers } from './routes'
import Navabr from './components/Navabr'
import { Toaster } from './components/Toaster'

const App = () => {
  return (
    <div className='h-screen w-screen'>
      <Toaster />
      <Navabr />
      <Routers />
    </div>
  )
}

export default App