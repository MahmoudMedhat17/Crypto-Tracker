import { useContext, useEffect } from "react";
import { CoinContext } from "../Context/CoinContextProvider";
import { useNavigate } from "react-router-dom";

const CoinInfo = () => {
  const { allCoins, currency, searchedCoinState, setSearchedCoinState } =
    useContext(CoinContext);
  const navigate = useNavigate();

  useEffect(() => {
    setSearchedCoinState(searchedCoinState);
  }, [allCoins]);

  return (
    <div className="flex items-center justify-center py-20">
      <div className="w-full max-w-6xl px-4">
        <table className="w-full text-xs sm:text-sm text-center text-gray-300">
          <thead className="text-sm text-gray-200 uppercase bg-[#1b1e4e]">
            <tr>
              <th className="py-4 px-6">#</th>
              <th className="py-4 px-6">Coins</th>
              <th className="py-4 px-6">Price</th>
              <th className="py-4 px-6 hidden sm:table-cell">24H Change</th>
              <th className="py-4 px-6 hidden md:flex justify-center items-center">
                Market Cap
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#111439] cursor-pointer">
            {searchedCoinState.map((coin) => (
              <tr
                key={coin.market_cap_rank}
                className="border-b border-gray-700 hover:bg-[#1c2148] hover:duration-200"
                onClick={() => {
                  navigate(`/coin/${coin.id}`);
                }}
              >
                <td className="py-4 px-6">{coin.market_cap_rank}</td>
                <td className="py-4 px-6 flex items-center justify-center gap-2">
                  <img
                    src={coin.image}
                    alt={coin.name}
                    className="w-5 sm:w-8"
                  />
                  <span className="font-semibold">{coin.name}</span>-
                  <span className="font-semibold">{coin.symbol}</span>
                </td>
                <td className="py-4 px-6 font-semibold space-x-0.5">
                  <span>{currency.symbol}</span>
                  <span>{coin.current_price.toLocaleString()}</span>
                </td>
                <td
                  className={`py-4 px-6 hidden sm:table-cell ${
                    coin.market_cap_change_percentage_24h
                      .toString()
                      .startsWith("-")
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {parseFloat(
                    `${coin.market_cap_change_percentage_24h}`
                  ).toFixed(2)}{" "}
                  %
                </td>
                <td className="py-4 px-6 font-semibold hidden md:flex justify-center items-center gap-1">
                  <span>{currency.symbol}</span>
                  <span>{coin.market_cap.toLocaleString()}</span>
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
