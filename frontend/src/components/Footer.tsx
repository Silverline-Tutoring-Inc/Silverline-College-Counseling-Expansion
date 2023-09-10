import React from "react";

const Footer: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    backgroundColor: "#3d446a",
    fontFamily: "Serif",
  };

  const siteFooterStyle: React.CSSProperties = {
    backgroundColor: "#3d446a",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "20px",
    padding: "40px",
  };

  const columnStyle: React.CSSProperties = {
    marginLeft: "100px",
  };

  const headingStyle: React.CSSProperties = {
    color: "#fffefb",
    fontSize: "24px",
    marginBottom: "20px",
  };

  const navListStyle: React.CSSProperties = {
    listStyle: "none",
    paddingLeft: 0,
    marginLeft: "80px",
  };

  const navLinkStyle: React.CSSProperties = {
    color: "#fffefb",
    fontSize: "16px",
    marginBottom: "10px",
  };

  const addressStyle: React.CSSProperties = {
    fontSize: "16px",
    marginBottom: "10px",
  };

  return (
    <footer className="bg-dark text-light py-4" style={containerStyle}>
      <div className="site-footer" style={siteFooterStyle}>
        <div style={{ display: "flex", flexDirection: "column", marginLeft: "0px" }}>
          <h3 style={headingStyle}>Silverline Consulting</h3>
          <p style={{ color: "#fffefb", fontSize: "16px", lineHeight: "1.6" }}>
            We made Silverline consulting exclusively designed for high schoolers, by high schoolers and college students. We understand the
            unique challenges and aspirations of students like you, and that's why we're here to guide you through the exciting journey of college
            admissions. Our team, comprised of experienced college students and recent graduates, brings firsthand knowledge and expertise to help
            you navigate the application process, craft compelling essays, choose the right colleges, and maximize your chances of getting accepted.
          </p>
        </div>
        <div style={columnStyle}>
          <h3 style={{ ...headingStyle, marginLeft: "80px" }}>Navigation</h3>
          <ul style={navListStyle}>
            <li>
              <a className="Contact" href="/#" style={navLinkStyle}>Home</a>
            </li>
            <li>
              <a className="Contact" href="/about" style={navLinkStyle}>About Us</a>
            </li>
            <li>
              <a className="Contact" href="/services" style={navLinkStyle}>Services</a>
            </li>
            <li>
              <a className="Contact" href="/community" style={navLinkStyle}>Our Community</a>
            </li>
            <li>
              <a className="Contact" href="/getinvolved" style={navLinkStyle}>Get Involved</a>
            </li>
            <li>
              <a className="Contact" href="/reviews" style={navLinkStyle}>Reviews</a>
            </li>
          </ul>
        </div>
        <div style={columnStyle}>
          <h3 style={headingStyle}>Contact</h3>
          <ul style={{ ...navListStyle, color: "#fffefb" }}>
            <li style={addressStyle}>Massachusetts, United States</li>
            <li style={addressStyle}>
              <a href="tel:+7862959992" style={{ color: "#fffefb" }}>(786)-295-9992</a>
            </li>
            <li style={addressStyle}>
              <a href="mailto:silverlinetutoring@gmail.com" style={{ color: "#fffefb" }}>silverlinetutoring2021@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row" style={{ backgroundColor: "#3d446a" }}>
        <div className="col" style={{ backgroundColor: "#3d446a" }}>
          <p className="text-center" style={{ color: "#fffefb", fontSize: "14px", margin: 0 }}>
            © {new Date().getFullYear()} Silverline Educational Advisory Services | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
