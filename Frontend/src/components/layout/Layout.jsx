import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      {/* OUTLET ACT AS A CHILDREN WHICH INCLUDE BOTH HEADER AND FOOTER */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
