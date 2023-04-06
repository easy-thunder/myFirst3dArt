import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <div className='scene'>
      <div className='floor'></div>
      <div className='cube'>
        <div className='left'></div>
        <div className='right'></div>
        <div className='front'></div>
        <div className='back'></div>
        <div className='top'>
          <div className='ballShadow'></div>
        </div>
        <div className='bottom'></div>
      </div>
      <div className='ball'></div>
      </div>
    </div>
  )
}

export default App
