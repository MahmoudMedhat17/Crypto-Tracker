import { useContext, useEffect, useState } from "react";
import { CoinContext } from "../Context/CoinContextProvider";
import { IallCoins } from "../../types";

const CoinInfo = () => {
  const { allCoins } = useContext(CoinContext);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    setCoins(allCoins);
  }, [allCoins]);

  // const dummyData = [
  //   {
  //     id: 1,
  //     title: "#",
  //     img: "/crypto-logo.png",
  //     coin: "Bitcoin - btc",
  //     price: "212122",
  //     dayChange: "-4.17",
  //     MarketCap: "$412141244",
  //   },
  //   {
  //     id: 2,
  //     title: "Coins",
  //     img: "/crypto-logo.png",
  //     coin: "Bitcoin - btc",
  //     price: "212122",
  //     dayChange: "-4.17",
  //     MarketCap: "$412141244",
  //   },
  //   {
  //     id: 3,
  //     title: "Price",
  //     img: "/crypto-logo.png",
  //     coin: "Bitcoin - btc",
  //     price: "212122",
  //     dayChange: "-4.17",
  //     MarketCap: "$412141244",
  //   },
  //   {
  //     id: 4,
  //     title: "24H Change",
  //     img: "/crypto-logo.png",
  //     coin: "Bitcoin - btc",
  //     price: "212122",
  //     dayChange: "-4.17",
  //     MarketCap: "$412141244",
  //   },
  //   {
  //     id: 5,
  //     title: "MarketCap",
  //     img: "/crypto-logo.png",
  //     coin: "Bitcoin - btc",
  //     price: "212122",
  //     dayChange: "-4.17",
  //     MarketCap: "$412141244",
  //   },
  // ];

  return (
    <div className="flex items-center justify-center py-20">
      <div className="w-full max-w-6xl px-4">
        <table className="w-full text-xs sm:text-sm text-center text-gray-300">
          <thead className="text-sm text-gray-200 uppercase bg-[#1b1e4e]">
            <tr>
              <th className="py-4 px-6">#</th>
              <th className="py-4 px-6">Coins</th>
              <th className="py-4 px-6">Price</th>
              <th className="py-4 px-6">24H Change</th>
              <th className="py-4 px-6 hidden md:flex justify-center items-center">
                Market Cap
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#111439] cursor-pointer">
            {coins.map((coin: IallCoins) => (
              <tr
                key={coin.market_cap_rank}
                className="border-b border-gray-700 hover:bg-[#1c2148] hover:duration-200"
              >
                <td className="py-4 px-6">{coin.market_cap_rank}</td>
                <td className="py-4 px-6 flex items-center justify-center gap-2">
                  <img
                    src={coin.image}
                    alt={coin.name}
                    className="w-6 sm:w-8 hidden sm:block"
                  />
                  <span className="font-semibold">{coin.name}</span>-
                  <span className="font-semibold">{coin.symbol}</span>
                </td>
                <td className="py-4 px-6 font-semibold">
                  {coin.current_price}
                </td>
                <td
                  className={`py-4 px-6 ${
                    coin.market_cap_change_percentage_24h
                      .toString()
                      .startsWith("-")
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {coin.market_cap_change_percentage_24h}%
                </td>
                <td className="py-4 px-6 font-semibold hidden md:flex justify-center items-center">
                  {coin.market_cap}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoinInfo;
