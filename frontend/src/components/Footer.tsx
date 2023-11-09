import React from 'react';

function Footer() {
  return (
    <div className="site-footer">
      <div className="container align-items-center">
        <div className="row align-self-lg-center">
          <div className="col-lg-3">
            <div className="widget">
              <h3>Silverline Educational Advisory Services</h3>
              <p>
                We made Silverline Educational Advisory Services for high schoolers looking toward their futures. We understand the unique challenges and aspirations of students like you, and that's why we're here to guide you through the exciting journey of college admissions. Our team, comprised of experienced college students and recent graduates, brings firsthand knowledge and expertise to help you navigate the application process, craft compelling essays, choose the right colleges, and maximize your chances of getting accepted.
              </p>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-2">
            <div className="widget">
              <h3>Navigation</h3>
              <ul className="list-unstyled float-left links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/community">Our Community</a></li>
                <li><a href="/getinvolved">Get Involved</a></li>
                <li><a href="/reviews">Reviews</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-3">
            <div className="widget">
              <h3>Contact</h3>
              <address style={{ color: '#AFA99E' }}>Massachusetts, United States</address>
              <ul className="list-unstyled links mb-4">
                <li><a href="tel://7862959992">(786) 295-9992</a></li>
                <li><a href="mailto:silverlinetutoring2021@gmail.com">silverlinetutoring2021@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-lg-6">
            <p className="copy">&copy; {new Date().getFullYear()} Silverline Educational Advisory Services | All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
