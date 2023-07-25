import React from "react";

const Reach = () => {
  return (
    <>
      <div
        className="container-fluid p-5 text-center"
        style={{
          backgroundColor: "#3D4469",
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
                    66
                  </h3>
                  <p
                    className="card-text"
                    style={{ fontSize: "1.4rem" }}
                  >
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
                  <p
                    className="card-text"
                    style={{ fontSize: "1.4rem" }}
                  >
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
                    6752
                  </h3>
                  <p
                    className="card-text"
                    style={{ fontSize: "1.4rem" }}
                  >
                    Hours of Tutoring
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
                    102
                  </h3>
                  <p
                    className="card-text"
                    style={{ fontSize: "1.4rem" }}
                  >
                    Tutors All Time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="text-center" data-aos="fade-up" data-aos-delay="300" style={{ paddingTop: "20px" }}><a
          href="community.html#target" class="btn btn-primary text-lg-center">View More Statistics</a></p>
      </div>
    </>
  );
};

export default Reach;
