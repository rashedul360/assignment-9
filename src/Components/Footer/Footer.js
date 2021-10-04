import React from "react";

import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">
                আমাদের Edu Tech সম্পূর্ণ বাংলাদেশের একটি শুনামধন্য প্রতিষ্ঠান ।
                আমাদের এই প্রতিষ্ঠানে বাংলাদেশের ২ টি আইটি সেন্টার এর সমন্বয়ে
                গঠিত । আমরা বাংলাদেশর জন্য কিছু করতে চাই এটাই আমাদের লক্ষ
              </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul className="footer-links">
                <li>
                  <a href="#">wev development</a>
                </li>
                <li>
                  <a href="#">Python</a>
                </li>
                <li>
                  <a href="#">Front-end</a>
                </li>
                <li>
                  <a href="#">C</a>
                </li>
                <li>
                  <a href="#">back-end</a>
                </li>
                <li>
                  <a href="#">Database</a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">services</a>
                </li>
                <li>
                  <a href="#">Sitemap</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2021 All Rights Reserved by
                <a href="#">Edu tech</a>.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="#">
                    <i class="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a className="linkedin" href="#">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
