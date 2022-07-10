import React from "react";

export default function backupHeader() {
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
                <a href="/backup">BizPage</a>
              </h1>

              <nav id="navbar" className="navbar">
                <ul>
                  <li>
                    <a className="nav-link scrollto active" href="#hero">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="nav-link scrollto" href="#about">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="nav-link scrollto" href="#services">
                      Services
                    </a>
                  </li>
                  <li>
                    <a className="nav-link scrollto " href="#portfolio">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a className="nav-link scrollto" href="#team">
                      Team
                    </a>
                  </li>
                  <li>
                    <a className="nav-link  " href="/backup-blog">
                      Blog
                    </a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Drop Down</span>{" "}
                      <i className="bi bi-chevron-down"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Drop Down 1</a>
                      </li>
                    
                      <li>
                        <a href="#">Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Drop Down 4</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="nav-link scrollto" href="#contact">
                      Contact
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
  );
}
