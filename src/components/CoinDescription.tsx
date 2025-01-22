import { useContext, useEffect } from "react";
import { CoinContext } from "../Context/CoinContextProvider";
import { useParams } from "react-router-dom";
import { ProgressBar } from "react-loader-spinner";
import ChartData from "../Utils/ChartData";

const CoinDescription = () => {
  const { coinsDesc, getCoinsDesc, currency } = useContext(CoinContext);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getCoinsDesc(id);
    }
  }, [id]);

  return Object.keys(coinsDesc).length === 0 ? (
    <div className="h-screen font-bold text-2xl sm:text-3xl md:text-4xl flex justify-center items-center w-full">
      <ProgressBar
        visible={true}
        height="80"
        width="80"
        barColor="#e2e8f0"
        borderColor="#09005c"
        ariaLabel="progress-bar-loading"
      />
    </div>
  ) : (
    <div className="py-20 flex flex-col justify-center items-center">
      <div className="pb-20 space-y-10 w-full flex flex-col justify-center items-center">
        <img src={coinsDesc.image.large} alt="cryptoLogo" className="w-20" />
        <h3 className="text-main_color text-3xl sm:text-4xl md:text-5xl font-semibold">
          {coinsDesc.name}
        </h3>
      </div>
      <ChartData />
      <div className="w-[80%] sm:w-[70%] space-y-4 mx-auto text-center text-main_color">
        <div className="flex justify-between items-center border-b-[1px] border-main_color">
          <p className="text-sm sm:text-base">Crypto Market Rank</p>
          <span>{coinsDesc.market_cap_rank}</span>
        </div>
        <div className="flex justify-between items-center border-b-[1px] border-main_color">
          <p className="text-sm sm:text-base">Current Price</p>
          <span>
            {currency.symbol}{" "}
            {parseFloat(
              coinsDesc.market_data.current_price[currency.name]
            ).toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between items-center border-b-[1px] border-main_color">
          <p className="text-sm sm:text-base">Market cap</p>
          <span>
            {currency.symbol}{" "}
            {parseFloat(
              coinsDesc.market_data.market_cap[currency.name]
            ).toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between items-center border-b-[1px] border-main_color">
          <p className="text-sm sm:text-base">24 Hour high</p>
          <span>
            {currency.symbol}{" "}
            {parseFloat(
              coinsDesc.market_data.high_24h[currency.name]
            ).toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between items-center border-b-[1px] border-main_color">
          <p className="text-sm sm:text-base">24 Hour low</p>
          <span>
            {currency.symbol}{" "}
            {parseFloat(
              coinsDesc.market_data.low_24h[currency.name]
            ).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CoinDescription;
