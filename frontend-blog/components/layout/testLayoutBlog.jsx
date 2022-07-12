import React from "react";
import Footer from "./Footer/backupFooter";
import HeaderBlog from "./Header/backupHeaderBlog";

export default function LayoutBlog({ children }) {
  return (
    <>
      <HeaderBlog />
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
