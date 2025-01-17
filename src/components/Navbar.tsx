// import { GoArrowUpRight } from "react-icons/go";

import { useContext } from "react";
import { CoinContext } from "../Context/CoinContextProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Features",
      link: "/features",
    },
    {
      title: "Pricing",
      link: "/pricing",
    },
    {
      title: "Blog",
      link: "/blog",
    },
  ];

  const { currency, setCurrency } = useContext(CoinContext);

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency({
      name: e.target.value,
      symbol:
        e.target.value === "usd"
          ? "$"
          : e.target.value === "eur"
          ? "€"
          : e.target.value === "sar"
          ? "SAR"
          : "$",
    });
  };

  return (
    <header className="py-8 px-10 md:px-20 border-b-2 border-b-[#3c3c3c]">
      <nav className="flex justify-between items-center">
        <Link to="/">
          <img
            src="logo.png"
            alt="cryptoLogo"
            className="w-32 md:w-44 cursor-pointer"
          />
        </Link>
        <ul className="hidden sm:flex gap-6 md:gap-8 lg:gap-12">
          {navLinks.map((item) => (
            <li
              key={item.title}
              className="text-slate-200 hover:text-white duration-200 cursor-pointer"
            >
              {item.title}
            </li>
          ))}
        </ul>
        <div className="flex gap-4 items-center">
          <select
            onChange={handleCurrencyChange}
            value={currency.name}
            className="w-14 lg:w-20 bg-transparent border-2 rounded-md text-slate-200"
          >
            <option
              value="usd"
              className="bg-[#09005c] hover:bg-[#009494] border-2 rounded-md"
            >
              <span>USD</span>
            </option>
            <option
              value="eur"
              className="bg-[#09005c] hover:bg-[#009494] border-2 rounded-md"
            >
              <span>EUR</span>
            </option>
            <option
              value="sar"
              className="bg-[#09005c] hover:bg-[#009494] border-2 rounded-md"
            >
              <span>SAR</span>
            </option>
          </select>
          {/* <button className="flex gap-2 items-center text-xs lg:text-sm bg-white px-3 py-2 rounded-full">
              Sign up <GoArrowUpRight size={20} />
            </button> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
