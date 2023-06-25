import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>SilverLine</h4>
            <p>
              We made Silverline consulting exclusively designed for high
              schoolers, by high schoolers and college students. We understand
              the unique challenges and aspirations of students like you, and
              that's why we're here to guide you through the exciting journey of
              college admissions. Our team, comprised of experienced college
              students and recent graduates, brings firsthand knowledge and
              expertise to help you navigate the application process, craft
              compelling essays, choose the right colleges, and maximize your
              chances of getting accepted.
            </p>
          </div>
          <div className="col-md-3">
            <h5>Pages</h5>
            <ul className="list-unstyled">
              <li>
                <a className="footer-link " href="/about">
                  About
                </a>
              </li>
              <li>
                <a href="/team">Team</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/community">Community</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Reach us at</h5>
            <ul className="list-unstyled">
              <a href="mailto:silverlinetutoring2021@gmail.com">
                silverlinetutoring2021@gmail.com
              </a>
              <div className="">Location</div>
              <div className="">Phone #</div>
              <div className=""></div>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <hr className="border-light" />
            <p className="text-center">
              &copy; {new Date().getFullYear()} SilverLine. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
