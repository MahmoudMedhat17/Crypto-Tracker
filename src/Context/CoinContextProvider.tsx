import React, { createContext, useEffect, useState } from "react";
import { Icontext } from "../../types";
import FetchData from "../Utils/FetchData";

export const CoinContext = createContext<Icontext | null>(null);

const CoinContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [allCoins, setAllCoins] = useState([]);
  const [currency, setCurrency] = useState({ name: "usd", symbol: "$" });
  const TrendingCoinsUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&per_page=10`;

  const getAllCoins = async () => {
    try {
      const response = await FetchData(TrendingCoinsUrl);
      setAllCoins(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getAllCoins();
  }, [currency]);

  const contextValues = { allCoins, currency, setCurrency };

  return (
    <CoinContext.Provider value={contextValues}>
      {children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
