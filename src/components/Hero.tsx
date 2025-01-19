import Searchbar from "./Searchbar";

const Hero = () => {
  return (
    <section className="py-10">
      <div className="max-w-[600px] mx-auto space-y-8 flex flex-col justify-center items-center text-center">
        <h1 className="text-main_color text-3xl md:text-5xl font-semibold leading-[1.5]">
          Largest <br /> Crypto Marketplace
        </h1>
        <p className="text-secondary_color text-sm w-[75%]">
          Welcome to the world's largest cryptocurrency marketplace.
        </p>
        <Searchbar />
      </div>
    </section>
  );
};

export default Hero;
