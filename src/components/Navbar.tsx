import { GoArrowUpRight } from "react-icons/go";

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

  return (
    <>
      <header className="py-8 px-10 md:px-20 border-b-2 border-b-[#3c3c3c]">
        <nav className="flex justify-between items-center">
          <img
            src="logo.png"
            alt="cryptoLogo"
            className="w-32 md:w-44 cursor-pointer"
          />
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
            lol
            <button className="flex gap-2 items-center text-sm bg-white px-3 py-2 rounded-full">
              Sign up <GoArrowUpRight size={20} />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
