import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png' // Adjust the path as necessary
import { FaLocationArrow } from 'react-icons/fa' // Importing the location icon 
import { Link } from 'react-router-dom' // Importing Link for navigation
import { CoinContext } from '../../assets/context/CoinContext' // Importing CoinContext for currency management


const Navbar = () => {
  
  const {setCurrency} = useContext(CoinContext); 
  const currencyHandler = (event) => {
    switch (event.target.value){
      case 'usd':
        setCurrency('usd');
        break;
      case 'eur':
        setCurrency('eur');
        break;
      case 'inr':
        setCurrency('inr');
        break;
      default:
        setCurrency('usd');
    }

  }
  return (
    <div className='navbar'>
            <img src={logo} alt='Logo' className='logo' />
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Coin">Coins</Link></li>
            <li><Link to="/exchanges">Exchanges</Link></li>
            <li><Link to="/news">News</Link></li>
                
                
            </ul>
            <div className='nav-right'>
                <select onChange={currencyHandler} >
                    <option value='usd'>USD</option>
                    <option value='eur'>EUR</option>
                    <option value='inr'>INR</option>
                </select>
                <button className='login-btn'>
                    Login
                    <FaLocationArrow className="login-icon" />
                    </button>
            </div>

    </div>
  )
}

export default Navbar
