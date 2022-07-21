import * as React from "react";
import Footer from "./Footer/footer";
import Header from "./Header/header";

import SpeedDialMenu from "../buttom/SpeedDialMenu";
import BackToTop from "../buttom/BackToTop";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <SpeedDialMenu />
      <BackToTop />
      <Footer />
    </>
  );
}
