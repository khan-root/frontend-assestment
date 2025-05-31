import React from 'react'
import { Routers } from './routes'
import Navabr from './components/Navabr'

const App = () => {
  return (
    <div className='h-screen w-screen'>
      <Navabr />
      <Routers />
    </div>
  )
}

export default App