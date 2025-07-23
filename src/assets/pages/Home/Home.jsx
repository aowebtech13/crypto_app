import React, { useEffect } from 'react'
import './Home.css' // Importing the Home component's CSS file
import { useContext } from 'react'; // Importing useContext hook
import { CoinContext } from '../../context/CoinContext'; // Importing CoinContext to access coin data

const Home = () => {
    const {allCoin, currency} = useContext(CoinContext); // Using CoinContext to access all coins and currency
    const [displayCoins, setDisplayCoins] = React.useState([]); // State to manage displayed coins

    useEffect(() => {
        setDisplayCoins(allCoin)
    }, [allCoin]); // Effect to update displayed coins when allCoin changes
  return (
    <div className='Home'>
        <div className='hero'>
            <h1>Largest <br/>Crypto Marketplace</h1>
            <p>Buy, sell, and trade cryptocurrencies with ease. Sign up to exlore more about cryptos</p>
            <form>
                <input type="email" placeholder='Search Cryptos' />
                <button type='submit'>Search</button>
            </form>
        </div>
      <div className='crypto-table'>
        <div className='table-layout'>
            <p>#</p>
            <p>Coin</p>
            <p>Price</p>
            <p style={{textAlign:'center'}}>24h Change</p>
            <p className='market-cap'>Market Cap</p>
        </div>
        {
        displayCoins.slice(0, 10).map((item, index) =>(
            <div className='table-layout' key={index}>
                <p>{item.market_cap_rank}</p>
            </div>
        ))
        
    }

      </div>
    </div>
  )
}

export default Home
