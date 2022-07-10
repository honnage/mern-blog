import React from 'react'

export default function Header() {
  return (
    <>
    <header
      id="header"
      className="fixed-top d-flex align-items-center header-transparent"
    >
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-11 d-flex align-items-center justify-content-between">
            <h1 className="logo">
              <a href="/">WonderWash</a>
            </h1>

            <nav id="navbar" className="navbar">
              <ul>
                <li>
                  <a className="nav-link scrollto active" href="#hero">
                    หน้าหลัก
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="#about">
                    เกี่ยวกับเรา
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="#services">
                    บริการ
                  </a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>ผลิตภัณฑ์</span>{" "}
                    <i className="bi bi-chevron-down"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#">เครื่องซัก-อบผ้า อุตสาหกรรม</a>
                    </li>
                    <li>
                      <a href="#">ระบบบริหารจัดการร้าน PANDATA</a>
                    </li>
                    <li>
                      <a href="#">เครื่อง Central Payment และ เครื่องจำหน่ายสินค้า</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="nav-link scrollto " href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="#team">
                    แฟรนไชส์
                  </a>
                </li>
                <li>
                  <a className="nav-link  " href="/backup-blog">
                    บทความ
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="#contact">
                    ติดต่อเรา
                  </a>
                </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
          </div>
        </div>
      </div>
    </header>
  </>
  )
}
