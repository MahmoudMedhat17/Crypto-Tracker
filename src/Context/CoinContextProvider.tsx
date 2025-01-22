import { createContext, useEffect, useState } from "react";
import { Icontext } from "../../types";
import FetchData from "../Utils/FetchData";

export const CoinContext = createContext<Icontext | null>(null);

const CoinContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [allCoins, setAllCoins] = useState([]);
  const [coinsDesc, setCoinDesc] = useState([]);
  const [searchedCoinState, setSearchedCoinState] = useState([]);
  const [currency, setCurrency] = useState({ name: "usd", symbol: "$" });
  const TrendingCoinsUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&per_page=20`;

  const getAllCoins = async () => {
    try {
      const response = await FetchData(TrendingCoinsUrl);
      setAllCoins(response);
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
    console.log(currency.name);
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
