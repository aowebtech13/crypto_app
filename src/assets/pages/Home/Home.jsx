import React, { useEffect, useState } from 'react'
import './Home.css' // Importing the Home component's CSS file
import { useContext } from 'react'; // Importing useContext hook
import { CoinContext } from '../../context/CoinContext'; // Importing CoinContext to access coin data
import { Link } from 'react-router-dom'; // Importing Link for navigation

const Home = () => {
    const {allCoins, currency} = useContext(CoinContext); // Using CoinContext to access all coins and currency
    const [displayCoins, setDisplayCoins] = React.useState([]); // State to manage displayed coins


    const [input, setInput] = useState(''); // State to manage input value for search

    const inputHandler = (event) => {
        setInput(event.target.value); // Update input state with the current value
        if(event.target.value === '') {
            setDisplayCoins(allCoins); // If input is empty, reset displayed coins to all coins
        }
    }
    const searchHandler = async (event) => {

        event.preventDefault(); // Prevent default form submission behavior
        const coins = await allCoins.filter((item) => {
            return item.name.toLowerCase().includes(input.toLowerCase()) || item.symbol.toLowerCase().includes(input.toLowerCase());
        })
        setDisplayCoins(coins); // Update displayed coins with the filtered results

    }
        

    useEffect(() => {
        setDisplayCoins(allCoins)
    }, [allCoins]); // Effect to update displayed coins when allCoins changes
  return (
    <div className='Home'>
        <div className='hero'>
            <h1>Largest <br/>Crypto Marketplace</h1>
            <p>Buy, sell, and trade cryptocurrencies with ease. Sign up to exlore more about cryptos</p>
            <form onSubmit={searchHandler } >
                <input onChange={inputHandler} list='coinList' value={input} type="text" placeholder='Search Cryptos' required />
                <datalist id="coinList">
                    {allCoins.map((item, index) => (
                        <option key={index} value={item.name} />
                    ))}
                    </datalist>
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
        
     {displayCoins.slice(0, 10).map((item, index) => (
        <Link to ='`/coin/${item.id}' className='table-layout' key={index}>
          <p>{item.market_cap_rank}</p>
          
          <div className='coin-image'>
            <img src={item.image} alt={item.name} />
            <p>{item.name} _ {item.symbol.toUpperCase()}</p>
          </div>
          
          <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
      
          <p style={{ textAlign: 'center',  color: item.price_change_percentage_24h > 0 ? 'green' : 'red' }}>
            {item.price_change_percentage_24h?.toFixed(2)}%
          </p>
      
          <p className='market-cap'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
        </Link>
      ))}
      

      </div>
    </div>
  )
}

export default Home
