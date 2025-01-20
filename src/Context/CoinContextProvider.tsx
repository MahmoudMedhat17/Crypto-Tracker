import { createContext, useEffect, useState } from "react";
import { Icontext } from "../../types";
import FetchData from "../Utils/FetchData";

export const CoinContext = createContext();

const CoinContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [allCoins, setAllCoins] = useState([]);
  const [coinsDesc, setCoinDesc] = useState([]);
  const [searchedCoinState, setSearchedCoinState] = useState([]);
  const [currency, setCurrency] = useState({ name: "usd", symbol: "$" });
  const TrendingCoinsUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&per_page=20`;
  // const CoinCharts = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency.name}&days=7`;

  const getAllCoins = async () => {
    try {
      const marketCachedData = localStorage.getItem("cachedData");
      if (marketCachedData) {
        setAllCoins(JSON.parse(marketCachedData));
      } else {
        const response = await FetchData(TrendingCoinsUrl);
        localStorage.setItem("cachedData", JSON.stringify(response));
        setAllCoins(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCoinsDesc = async (id: string) => {
    try {
      const response = await FetchData(
        `https://api.coingecko.com/api/v3/coins/${id}`
      );
      setCoinDesc(response);
      console.log(coinsDesc);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCoins();
  }, [currency]);

  useEffect(() => {
    setSearchedCoinState(allCoins);
  }, [allCoins]);

  const contextValues = {
    allCoins,
    setAllCoins,
    currency,
    setCurrency,
    coinsDesc,
    getCoinsDesc,
    searchedCoinState,
    setSearchedCoinState,
  };

  return (
    <CoinContext.Provider value={contextValues}>
      {children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
