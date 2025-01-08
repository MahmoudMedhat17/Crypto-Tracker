const CoinInfo = () => {
  const dummyData = [
    {
      id: 1,
      title: "#",
      img: "/crypto-logo.png",
      coin: "Bitcoin - btc",
      price: "212122",
      dayChange: "-4.17",
      MarketCap: "$412141244",
    },
    {
      id: 2,
      title: "Coins",
      img: "/crypto-logo.png",
      coin: "Bitcoin - btc",
      price: "212122",
      dayChange: "-4.17",
      MarketCap: "$412141244",
    },
    {
      id: 3,
      title: "Price",
      img: "/crypto-logo.png",
      coin: "Bitcoin - btc",
      price: "212122",
      dayChange: "-4.17",
      MarketCap: "$412141244",
    },
    {
      id: 4,
      title: "24H Change",
      img: "/crypto-logo.png",
      coin: "Bitcoin - btc",
      price: "212122",
      dayChange: "-4.17",
      MarketCap: "$412141244",
    },
    {
      id: 5,
      title: "MarketCap",
      img: "/crypto-logo.png",
      coin: "Bitcoin - btc",
      price: "212122",
      dayChange: "-4.17",
      MarketCap: "$412141244",
    },
  ];

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
          <tbody className="bg-[#111439]">
            {dummyData.map((coin) => (
              <tr
                key={coin.id}
                className="border-b border-gray-700 hover:bg-[#1c2148] hover:duration-200"
              >
                <td className="py-4 px-6">{coin.id}</td>
                <td className="py-4 px-6 flex items-center justify-center gap-2">
                  <img
                    src={coin.img}
                    alt={coin.coin}
                    className="w-6 sm:w-8 hidden sm:block"
                  />
                  <span>{coin.coin}</span>
                </td>
                <td className="py-4 px-6">{coin.price}</td>
                <td
                  className={`py-4 px-6 ${
                    coin.dayChange.startsWith("-")
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {coin.dayChange}%
                </td>
                <td className="py-4 px-6 hidden md:flex justify-center items-center">
                  {coin.MarketCap}
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

// <table className="w-full max-w-4xl table-auto bg-gradient-to-r from-[#5403ff26] to-[#69029926]">
//         <thead className="border-b-[1px] border-b-[#3c3c3c]">
//           <tr className="text-[#e3e3e3]">
//             <th className="py-2">#</th>
//             <th className="py-2">Coins</th>
//             <th className="py-2">Price</th>
//             <th className="py-2">24H Change</th>
//             <th className="py-2">Market Cap</th>
//           </tr>
//         </thead>
//         <tbody>
//           {dummyData.map((data) => (
//             <tr key={data.id}>
//               <td>{data.id}</td>
//               <td className="flex gap-2 items-center">
//                 {" "}
//                 <img src={data.img} alt={data.coin} className="w-8" />
//                 {data.coin}
//               </td>
//               <td>{data.price}</td>
//               <td>{data.dayChange}</td>
//               <td>{data.MarketCap}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
