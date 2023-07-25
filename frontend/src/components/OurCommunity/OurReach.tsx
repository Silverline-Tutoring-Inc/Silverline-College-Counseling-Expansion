import React from "react";
import CollapseBtn from "./CollapseBtn";

const OurReach = () => {
  const bodyStyle = {
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#D6D3CD",
  };
  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#918CA1",
  };

  return (
    <div style={{ backgroundColor: "#181A1B", padding: "7rem" }}>
      <div className="container">
        <h1 style={titleStyle} data-aos="fade-up">Our Reach</h1>
        <h2 className="heading mb-3" data-aos="fade-up" data-aos-delay="100"></h2>
        <p style={bodyStyle} data-aos="fade-up" data-aos-delay="200">
          In our years of service, our organization has expanded into
          numerous continents and continues to grow daily:
        </p>

        <div className="container text-white" style={{ display: "flex" }} data-aos="fade-up" data-aos-delay="100">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              justifyContent: "flexStart",
              paddingRight: "0.75em",
            }}
          >
            <div>
              <CollapseBtn
                region={"North America"}
                countries={[
                  "Canada",
                  "United States",
                  "Mexico",
                  "Puerto Rico",
                ]}
              />
            </div>
            <div>
              <CollapseBtn
                region={"Europe"}
                countries={[
                  "Albania",
                  "Andorra",
                  "Austria",
                  "Belgium",
                  "Croatia",
                  "Czechia",
                  "Denmark",
                  "France",
                  "Germany",
                  "Hungary",
                  "Italy",
                  "Netherlands",
                  "Norway",
                  "Poland",
                  "Serbia",
                  "Spain",
                  "Sweden",
                  "Switzerland",
                  "UK",
                ]}
              />
            </div>
            <div>
              <CollapseBtn
                region={"South America"}
                countries={[
                  "Argentina",
                  "Brazil",
                  "Chile",
                  "Uruguay",
                  "Colombia",
                  "Peru",
                  "Ecuador",
                ]}
              />
            </div>
            <div>
              <CollapseBtn
                region={"Australia"}
                countries={[
                  "Australia",
                  "New Zealand",
                  "Papua New Guinea",
                ]}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              justifyContent: "flexStart",
              paddingLeft: "0.75em",
            }}
          >
            <div>
              <CollapseBtn
                region={"Central America"}
                countries={[
                  "Belize",
                  "Costa Rica",
                  "El Salvador",
                  "Guatemala",
                  "Honduras",
                  "Nicaragua",
                  "Panama",
                ]}
              />
            </div>
            <div>
              <CollapseBtn
                region={"Middle East"}
                countries={[
                  "Bahrain",
                  "Iraq",
                  "Kuwait",
                  "Qatar",
                  "Saudi Arabia",
                  "Yemen",
                ]}
              />
            </div>
            <div>
              <CollapseBtn
                region={"Asia"}
                countries={[
                  "India",
                  "Sri Lanka",
                  "Pakistan",
                  "China",
                  "Japan",
                  "South Korea",
                  "Vietnam",
                  "Cambodia",
                  "Bangladesh",
                  "Indonesia",
                  "Russia",
                  "Philippines",
                  "Nepal",
                ]}
              />
            </div>
            <div>
              <CollapseBtn
                region={"Africa"}
                countries={[
                  "Egypt",
                  "Botswana",
                  "Burundi",
                  "Democratic Republic of the Congo",
                  "Kenya",
                  "Libya",
                  "Rwanda",
                  "South Africa",
                  "Zimbabwe",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurReach;
