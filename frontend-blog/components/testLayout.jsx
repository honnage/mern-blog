import React from "react";
import Footer from "./layout/backupFooter";
import Header from "./layout/backupHeader";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
      <Footer />
    </>
  );
}
