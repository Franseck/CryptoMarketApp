
import {FlexStyle} from "../Styled/FlexStyle"
import HeaderStyle from "../Styled/HeaderStyle"
import { MobileResponsive } from "../Styled/MobileResponsive";

const CoinItem = ({ coins }) => {
  return (
    <HeaderStyle weight="100">
      <p>{coins.market_cap_rank}</p>
      <p>
        <FlexStyle>
          <img
            style={{ maxWidth: "2rem", minHeight: "2rem" }}
            src={coins.image}
            alt=""
          />
          <p>{coins.symbol.toUpperCase()}</p>
        </FlexStyle>
      </p>
      <p>${coins.current_price.toLocaleString()}</p>
      <p>{coins.price_change_percentage_24h.toFixed(2)}</p>
      <MobileResponsive>${coins.total_volume.toLocaleString()}</MobileResponsive>
      <MobileResponsive>${coins.market_cap.toLocaleString()}</MobileResponsive>
    </HeaderStyle>
  );
};

export default CoinItem;