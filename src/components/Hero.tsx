const Hero = () => {
  return (
    <section className="py-10">
      <div className="max-w-[600px] mx-auto space-y-8 flex flex-col justify-center items-center text-center">
        <h1 className="text-white text-3xl md:text-5xl font-semibold leading-[1.5]">
          Largest <br /> Crypto Marketplace
        </h1>
        <p className="text-[#e3e3e3] text-sm w-[75%]">
          Welcome to the world's largest cryptocurrency marketplace. Sign up to
          explore more about cryptos.
        </p>
        <div className="sm:w-[80%] md:w-full flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
          <input
            type="text"
            placeholder="Search crypto..."
            className="p-2 sm:p-4 flex-grow text-gray-700 focus:outline-none sm:w-[80%] md:w-full placeholder:text-[#111439]"
          />
          <button className="px-4 sm:px-8 py-1 sm:py-2 bg-[#7927ff] text-white mr-2 rounded-lg">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
