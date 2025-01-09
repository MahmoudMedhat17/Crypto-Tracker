import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { Icontext } from "../../types";

export const CoinContext = createContext<Icontext | null>(null);


const CoinContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [allCoins, setAllCoins] = useState([]);
  const [currency, setCurrency] = useState({ name: "usd", symbol: "$" });
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&per_page=10`;

  const getAllCoins = async () => {
    try {
      const getTheCoins = await axios.get(url);
      const response = await getTheCoins.data;
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
