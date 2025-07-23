import React from 'react'
import './Coin.css' // Importing the Coin component's CSS file
import { useParams } from 'react-router-dom' // Importing useParams for route parameters

const Coin = () => {

    const { coinId } = useParams(); // Extracting the coin ID from the URL parameters
    const [coinData, setCoinData] = useState(); // State to hold coin data
    const {currency} = useContext(CoinContext); // Using CoinContext to access currency


    const fetchCoinData = async () => {
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-x5BwRexhxhgSvufBLjq2xw2k'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }
    useEffect(() => {
        fetchCoinData(); // Fetch coin data when the component mounts
    }, [currency]); // Re-fetch if coinId changes
  
    if(coinData)    {
        return (

    
    <div className='coin'>
        <div className="coinname">
            <img src={coinData.image.large} />
            <h3>{coinData.name} ({coinData.symbol.toUppercase()})</h3>
        </div>
      

    </div>
  )
}
}

export default Coin;

