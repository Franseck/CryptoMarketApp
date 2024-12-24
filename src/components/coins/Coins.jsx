import React from 'react'
import CoinItem from './CoinItem'
import { Link } from 'react-router-dom'
import HeaderStyle from "../Styled/HeaderStyle"
import { MobileResponsiveH3 } from '../Styled/MobileResponsive'

const Coins = ({coins}) => {
  return (
    <div>
         <Container>
        <HeaderStyle weight={"300"}>
          <h3>Rank</h3>
          <h3>Coin</h3>
          <h3>Price</h3>
          <h3>24h</h3>
          <MobileResponsiveH3>Volume</MobileResponsiveH3>
          <MobileResponsiveH3>Market Cap</MobileResponsiveH3>
        </HeaderStyle>
      </Container>
      {coins.map((coins) => {
        return (
          <Link to={`/coin/${coins.id}`}>
            <CoinItem key={coins.id * Math.random()} coins={coins} />
          </Link>
        );
      })}
    </div>
  )
}

export default Coins