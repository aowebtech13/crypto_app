import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './assets/pages/Home/Home'
import Coin from './assets/pages/Coin/Coin'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div className='app'>
      <Navbar />
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Coin/' element={<Coin />} />
        </Routes>
      
      <Footer />
   
       
        
    </div>
  )
}

export default App
