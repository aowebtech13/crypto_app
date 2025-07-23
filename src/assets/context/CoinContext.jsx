import { createContext, useEffect, useState } from 'react';

 export const CoinContext = createContext();

 const CoinContextProvider = (props) => {
    const[allCoins, setallCoins] = useState([]);
    const[currency, setCurrency] = useState({
        name: 'usd',
        symbol: '$',
        sign: 'USD'
    }); 
    const fetchallCoins = () => {
    const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-x5BwRexhxhgSvufBLjq2xw2k'}
      };
      
      fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
        .then(res => res.json())
        .then(res => setallCoins(res))
        .catch(err => console.error(err));
    }
    useEffect(() => {
        fetchallCoins();
    }, [currency]);

    const contextValue = {
        allCoins,
        setallCoins,
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