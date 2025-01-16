import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  const yearlyData = date.getFullYear();

  return (
    <footer className="py-8 px-10 md:px-20">
      <div className="flex justify-between items-center">
        <div className="space-y-4">
          <img
            src="logo.png"
            alt="cryptoLogo"
            className="cursor-pointer w-40"
          />
          <p className="w-[80%] sm:w-1/2 text-xs sm:text-sm text-secondary_color">
            Cryptoplace Website is a dynamic platform designed to help users
            monitor and analyze cryptocurrency prices, trends, and market data
            in real time. It typically features live price updates, historical
            charts, and detailed information on various cryptocurrencies,
            including market capitalization, trading volume, and price changes.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <FaInstagram
            size={30}
            className="cursor-pointer text-secondary_color hover:text-[#5403ff26] duration-200"
          />
          <FaFacebook
            size={30}
            className="cursor-pointer text-secondary_color hover:text-[#5403ff26] duration-200"
          />
          <FaLinkedin
            size={30}
            className="cursor-pointer text-secondary_color hover:text-[#5403ff26] duration-200"
          />
        </div>
      </div>
      <div className="w-full mt-10 border-t-2 border-t-setext-secondary_color">
        <p className="text-center text-xs sm:text-sm pt-4 text-secondary_color">
          Copyright @ {yearlyData}, Cryptoplace - Developed by Mahmoud medhat
        </p>
      </div>
    </footer>
  );
};

export default Footer;
