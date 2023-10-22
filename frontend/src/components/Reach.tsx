import React, { useState, useEffect } from "react";

const Reach: React.FC = () => {
  const [isCounting, setIsCounting] = useState(false);
  const [countriesCount, setCountriesCount] = useState(0);
  const [membersCount, setMembersCount] = useState(0);
  const [programsCount, setProgramsCount] = useState(0);
  const [employeesCount, setEmployeesCount] = useState(0);

  useEffect(() => {
    setIsCounting(true);

    if (isCounting) {
      const interval = setInterval(() => {
        setCountriesCount((prevCount) => (prevCount < 66 ? prevCount + 1 : 66));
        setMembersCount((prevCount) => (prevCount < 5000 ? prevCount + 1 : 5000));
        setProgramsCount((prevCount) => (prevCount < 6 ? prevCount + 1 : 6));
        setEmployeesCount((prevCount) => (prevCount < 50 ? prevCount + 1 : 50));
      }, 30);

      setTimeout(() => {
        clearInterval(interval);
      }, 3000);
    }
  }, [isCounting]);

  return (
    <>
      <div
        className="container-fluid p-5 text-center"
        style={{
          backgroundColor: "#765398",
        }}
      >
        <h1 className="text-white my-5">Our Reach</h1>
        <div className="container">
          <div className="row text-center">
            <div className="col-md">
              <div className="card bg-transparent border-0 text-white">
                <div className="card-body text-center">
                  <i
                    className="fa-solid fa-map"
                    style={{
                      fontSize: "3.5rem",
                      color: "#918CA1",
                    }}
                  ></i>
                  <h3
                    className="card-title mt-2 mb-1"
                    style={{ fontSize: "2.5rem" }}
                  >
                    {countriesCount}
                  </h3>
                  <p className="card-text" style={{ fontSize: "1.4rem" }}>
                    Countries
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card bg-transparent border-0 text-white">
                <div className="card-body text-center">
                  <i
                    className="fa-solid fa-user"
                    style={{
                      fontSize: "3.5rem",
                      color: "#918CA1",
                    }}
                  ></i>
                  <h3
                    className="card-title mt-2 mb-1"
                    style={{ fontSize: "2.5rem" }}
                  >
                    5000
                  </h3>
                  <p className="card-text" style={{ fontSize: "1.4rem" }}>
                    Members
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card bg-transparent border-0 text-white">
                <div className="card-body text-center">
                  <i
                    className="fa-solid fa-clock"
                    style={{
                      fontSize: "3.5rem",
                      color: "#918CA1",
                    }}
                  ></i>
                  <h3
                    className="card-title mt-2 mb-1"
                    style={{ fontSize: "2.5rem" }}
                  >
                    {programsCount}
                  </h3>
                  <p className="card-text" style={{ fontSize: "1.4rem" }}>
                    Extracurricular programs
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card bg-transparent border-0 text-white">
                <div className="card-body text-center">
                  <i
                    className="fa-solid fa-chalkboard-user"
                    style={{
                      fontSize: "3.5rem",
                      color: "#918CA1",
                    }}
                  ></i>
                  <h3
                    className="card-title mt-2 mb-1"
                    style={{ fontSize: "2.5rem" }}
                  >
                    {employeesCount}
                  </h3>
                  <p className="card-text" style={{ fontSize: "1.4rem" }}>
                    Employees
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p
          className="text-center"
          data-aos="fade-up"
          data-aos-delay="300"
          style={{ paddingTop: "20px" }}
        >
          <a href="./community" className="btn btn-primary text-lg-center">
            View More Statistics
          </a>
        </p>
      </div>
    </>
  );
};

export default Reach;

