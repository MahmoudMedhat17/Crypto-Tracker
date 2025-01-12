import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Pages = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Outlet to render children */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Pages;
