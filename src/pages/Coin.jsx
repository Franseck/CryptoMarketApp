import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import IconStyle from '../components/Styled/IconStyle'
import InfoStyle from '../components/Styled/InfoStyle'
import { FlexStyle } from '../components/Styled/FlexStyle'
import {GridStyle} from "../components/Styled/GridStyle"
import {ContentStyle} from "../components/Styled/ContentStyle"
import WrapperStyle from "../components/Styled/WrapperStyle"
import { GlobalStyles } from '../components/Styled/GlobalStyles/GlobalStyles'


const Coin = () => {

  const params = useParams();
  const [coin, setCoin] = useState({});
  const URL = `https://api.coingecko.com/api/v3/coins/${params.coinId} `;

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setCoin(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <GlobalStyles/>
<ContentStyle header={"50rem"}>
  <FlexStyle center={"space-around"}>
    <h1>{coin.name}</h1>
  </FlexStyle>
<ContentStyle>
<IconStyle rank={"teal"}>
Rank # {coin.market_cap_rank}
</IconStyle>
<InfoStyle>
  <FlexStyle space>
  {coin.image ? <img src={coin.image.small} alt="" /> : null}
              <p>{coin.name}</p>
              <p>{coin.symbol}</p>{" "}
  </FlexStyle>
  {coin.market_data?.current_price ? (
              <h2>Current Price :<br/> ${coin.market_data.current_price.usd} </h2>
            ) : null}
</InfoStyle>
</ContentStyle>
<ContentStyle>
  <WrapperStyle>
  <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {coin.market_data?.price_change_percentage_1h_in_currency ? (
                    <p>
                      {
                        coin.market_data.price_change_percentage_1h_in_currency
                          .usd.toFixed(1)
                      }%
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {
                        coin.market_data.price_change_percentage_24h_in_currency
                          .usd.toFixed(1)
                      }%
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_7d_in_currency ? (
                    <p>
                      {
                        coin.market_data.price_change_percentage_7d_in_currency
                          .usd.toFixed(1)
                      }%
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_14d_in_currency ? (
                    <p>
                      {
                        coin.market_data.price_change_percentage_14d_in_currency
                          .usd.toFixed(1)
                      }%{" "}
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_30d_in_currency ? (
                    <p>
                      {
                        coin.market_data.price_change_percentage_30d_in_currency
                          .usd.toFixed(1)
                      }%
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_1y_in_currency ? (
                    <p>
                      {
                        coin.market_data.price_change_percentage_1y_in_currency
                          .usd.toFixed(1)
                      }%
                    </p>
                  ) : null}
                </td>
              </tr>
            </tbody>
  </WrapperStyle>
</ContentStyle>
<ContentStyle>
  <GridStyle>
  {" "}
            <h4>24 Hour Low</h4>
            {coin.market_data?.low_24h ? (
              <p> ${coin.market_data.low_24h.usd.toLocaleString()}</p>
            ) : null}
  </GridStyle>
  <GridStyle>
  {" "}
            <h4>24 Hour High</h4>
            {coin.market_data?.high_24h ? (
              <p>${coin.market_data.high_24h.usd.toLocaleString()} </p>
            ) : null}
  </GridStyle>
  <GridStyle>
  {" "}
            <h4>Market Cap</h4>
            {coin.market_data?.market_cap ? (
              <p>${coin.market_data.market_cap.usd.toLocaleString()} </p>
            ) : null}
  </GridStyle>
  <GridStyle>
  {" "}
            <h4>Circulating Supply</h4>
            {coin.market_data ? (
              <p>${coin.market_data.circulating_supply.toLocaleString()} </p>
            ) : null}
  </GridStyle>
</ContentStyle>


</ContentStyle>
    </div>
  )
}

export default Coin