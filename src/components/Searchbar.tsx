import { useContext, useState } from "react";
import { CoinContext } from "../Context/CoinContextProvider";

const Searchbar = () => {
  const [inputVal, setInputVal] = useState("");
  const { searchedCoinState, setSearchedCoinState, allCoins } =
    useContext(CoinContext);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
    if (e.target.value === "") {
      setSearchedCoinState(allCoins);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchedCoin = searchedCoinState.filter((coin) =>
      coin.name.toLowerCase().includes(inputVal.toLowerCase())
    );
    setSearchedCoinState(searchedCoin);
    console.log(searchedCoin);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="sm:w-[80%] md:w-full flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white"
    >
      <input
        type="text"
        value={inputVal}
        onChange={handleInput}
        placeholder="Search crypto..."
        className="p-2 sm:p-4 flex-grow text-gray-700 focus:outline-none sm:w-[80%] md:w-full placeholder:text-[#111439]"
      />
      <button
        type="submit"
        className="px-4 sm:px-8 py-1 sm:py-2 bg-[#7927ff] text-white mr-2 rounded-lg"
      >
        Search
      </button>
    </form>
  );
};

export default Searchbar;
