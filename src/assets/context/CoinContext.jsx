import { createContext, useEffect, useState } from 'react';

 export const CoinContext = createContext();

 const CoinContextProvider = (props) => {
    const[allCoins, setAllCoins] = useState([]);
    const[currency, setCurrency] = useState({
        name: 'usd',
        symbol: '$',
        sign: 'USD'
    }); 
    const fetchAllcoin = () => {
    const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-x5BwRexhxhgSvufBLjq2xw2k'}
      };
      
      fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
        .then(res => res.json())
        .then(res => setAllCoins(res))
        .catch(err => console.error(err));
    }
    useEffect(() => {
        fetchAllcoin();
    }, [currency]);

    const contextValue = {
        allCoins,
        setAllCoins,
        currency,
        setCurrency,

    }
    return(
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>

    )
}
export default CoinContextProvider;