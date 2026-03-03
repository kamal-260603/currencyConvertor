import {useState,useEffect} from 'react'

function useCurrencyInfo(currency) {
    const [data,setData] = useState({});
    useEffect(() => {
  fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency.toLowerCase()}.json`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      setData(res[currency.toLowerCase()])
    })
    .catch((err) => console.log("Error:", err))
}, [currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo
