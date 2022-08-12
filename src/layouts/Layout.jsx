import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <>
      <main className='main'>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
