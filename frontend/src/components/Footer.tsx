import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-dark text-light py-4"
      style={{ backgroundColor: "#3d446a", fontFamily: "Serif" }}
    >
      <div
        className="site-footer"
        style={{
          backgroundColor: "#3d446a",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: "20px",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "0px",
          }}
        >
          <h3
            style={{ color: "#fffefb", fontSize: "24px", marginBottom: "20px" }}
          >
            Silverline Tutoring
          </h3>
          <p style={{ color: "#fffefb", fontSize: "16px", lineHeight: "1.6" }}>
            We made Silverline consulting exclusively designed for high
            schoolers, by high schoolers and college students. We understand the
            unique challenges and aspirations of students like you, and that's
            why we're here to guide you through the exciting journey of college
            admissions. Our team, comprised of experienced college students and
            recent graduates, brings firsthand knowledge and expertise to help
            you navigate the application process, craft compelling essays,
            choose the right colleges, and maximize your chances of getting
            accepted.
          </p>
        </div>
        <div style={{ marginLeft: "100px" }}>
          <h3
            style={{
              color: "#fffefb",
              fontSize: "20px",
              marginBottom: "20px",
              marginLeft: "80px",
            }}
          >
            Navigation
          </h3>
          <ul style={{ listStyle: "none", paddingLeft: 0, marginLeft: "80px" }}>
            <li>
              <a
                className="Contact"
                href="/#"
                style={{
                  color: "#fffefb",
                  fontSize: "16px",
                  marginBottom: "10px",
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="Contact"
                href="/about"
                style={{
                  color: "#fffefb",
                  fontSize: "16px",
                  marginBottom: "10px",
                }}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className="Contact"
                href="/services"
                style={{
                  color: "#fffefb",
                  fontSize: "16px",
                  marginBottom: "10px",
                }}
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="Contact"
                href="/community"
                style={{
                  color: "#fffefb",
                  fontSize: "16px",
                  marginBottom: "10px",
                }}
              >
                Our Community
              </a>
            </li>
            <li>
              <a
                className="Contact"
                href="/getinvolved"
                style={{
                  color: "#fffefb",
                  fontSize: "16px",
                  marginBottom: "10px",
                }}
              >
                Get Involved
              </a>
            </li>
            <li>
              <a
                className="Contact"
                href="/reviews"
                style={{
                  color: "#fffefb",
                  fontSize: "16px",
                  marginBottom: "10px",
                }}
              >
                Reviews
              </a>
            </li>
          </ul>
        </div>
        <div style={{ marginLeft: "100px" }}>
          <h3
            style={{ color: "#fffefb", fontSize: "20px", marginBottom: "20px" }}
          >
            Contact
          </h3>
          <ul style={{ color: "#fffefb", listStyle: "none", paddingLeft: 0 }}>
            <li style={{ fontSize: "16px", marginBottom: "10px" }}>
              Massachusetts, United States
            </li>
            <li style={{ fontSize: "16px", marginBottom: "10px" }}>
              <a href="tel:+7862959992" style={{ color: "#fffefb" }}>
                (786)-295-9992
              </a>
            </li>
            <li style={{ fontSize: "16px", marginBottom: "10px" }}>
              <a
                href="mailto:silverlinetutoring@gmail.com"
                style={{ color: "#fffefb" }}
              >
                silverlinetutoring2021@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row" style={{ backgroundColor: "#3d446a" }}>
        <div className="col" style={{ backgroundColor: "#3d446a" }}>
          <p
            className="text-center"
            style={{ color: "#fffefb", fontSize: "14px", margin: 0 }}
          >
            © {new Date().getFullYear()} Silverline Tutoring Services | All
            Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
