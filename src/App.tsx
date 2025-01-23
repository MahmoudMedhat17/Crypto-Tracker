import Pages from "./pages/Pages";
import { CiBitcoin } from "react-icons/ci";
import { ScrollToTop } from "./Utils/ScrollToTop";

const App = () => {
  return (
    <>
      <Pages />
      <CiBitcoin
        className="w-10 sm:w-14 h-10 sm:h-14 fixed right-5 sm:right-10 bottom-5 sm:bottom-14 cursor-pointer text-main_color hover:text-[#5403ff26] duration-200"
        onClick={ScrollToTop}
      />
    </>
  );
};

export default App;
