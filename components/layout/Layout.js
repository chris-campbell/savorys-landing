import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import dynamic from "next/dynamic";

// const Navbar = dynamic(() => import("./navBar/Navbar"), { ssr: false });

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
