import React from "react";

export default function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-info">
                <h3>Wonder Wash</h3>
                <p>แฟรนไชส์ร้านสะดวกซัก 24 ชั่วโมง</p>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>ลิงค์ที่มีประโยชน์</h4>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right" /> <a href="#">หน้าหลัก</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <a href="#">เกี่ยวกับเรา</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>ติดต่อเรา</h4>
                <p>
                  66/3 ถนนเทศบาลรังสรรค์เหนือ <br />
                  แขวงลาดยาว เขตจตุจักร กรุงเทพ 10900 <br />
                  <strong>Line:</strong> @wonderwash
                  <br />
                  <strong>Phone:</strong> 064-442-6662 คุณอุ้ม
                  <br />
                  &emsp; &emsp; &nbsp; &nbsp; 095-659-6232 คุณเอม
                  <br />
                </p>
                <div className="social-links">
                  <a href="#" className="twitter">
                    <i className="bi bi-twitter" />
                  </a>
                  <a href="#" className="facebook">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="#" className="instagram">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="#" className="instagram">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="#" className="linkedin">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna veniam enim veniam illum dolore legam minim
                  quorum culpa amet magna export quem marada parida nodela
                  caramase seza.
                </p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" defaultValue="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            © Copyright <strong>WonderWash</strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>
    </>
  );
}
