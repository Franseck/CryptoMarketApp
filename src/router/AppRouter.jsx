import { BrowserRouter,Routes, Route } from "react-router-dom"
import Coin from "../pages/Coin";
import Header from "../components/Header"
import Coins from "../components/coins/Coins";
import axios from "axios";
import { useState, useEffect } from "react";


const AppRouter = () => {
  const [coins, setCoins] = useState([]);

  const BASE_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"

useEffect(() => {
  axios.get(BASE_URL).then((response)=>{
    setCoins(response.data)
    console.log(response.data)
  }).catch((error) => {
    console.log(error)
  })

  return () => {
   
  }
}, [])


  return (
    <BrowserRouter>
<Header/>
    <Routes>
        <Route path="/" element={<Coins coins={coins}/>} />
        <Route path="/coin" element={<Coin/>}>
        <Route path=":coinId" element={<Coin/>} />
        </Route>
       
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;