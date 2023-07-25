const Lectures = () => {
  return (
    <div className="section section-3" style={{ background: '#1E2022' }}>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-12 text-center mb-0" data-aos="fade-up">
            <span className="subheading">Lectures</span>
            <h2 className="heading mb-3">Our Past Lectures</h2>
          </div>
          <div className="col-lg-12 text-md-end" data-aos="fade-up" data-aos-delay="100">
            <div id="destination-controls1">
              <span className="prev me-3" data-controls="prev"></span>
              <span className="next" data-controls="next"></span>
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
            <div className="destination-slider-wrap">
              <div className="destination-slider1">

                <div className="destination">
                  <div className="mt-3">
                    <div className="media-entry media-entry-original">
                      <a href="#" target="_blank" style={{ background: 'none' }} className="text-center">
                        <img src={require("../images/Home/lectures/tom.png")} alt="Tom" className="img-fluid" />
                      </a>
                      <div className="m-body">
                        <h5 style={{ textAlign: 'center' }}>Tom Campbell</h5>
                        <h6 style={{ padding: '5px', borderRadius: '5px', background: '#ffffff', color: 'black', textAlign: 'center' }}>
                          Pomona admissions officer
                        </h6>
                        <div style={{ textAlign: 'start' }}>
                          <p>
                            Overview: <span style={{ color: '#AFA99E' }}>
                              Our most recent lecture was by Pomona admissions officer Tom Campbell. In the questions and
                              answer discussion, Tom answered attendees' questions live through Zoom about the admissions process. Overall, this lecture garnered great interest because it gave high schoolers insight into the perspective of an admissions officer.
                            </span>
                          </p>
                          <p>
                            Date: <span style={{ color: '#AFA99E' }}>8/25/22</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="destination">
                  <div className="mt-4">
                    <div className="media-entry media-entry-original">
                      <a href="#" target="_blank" style={{ background: 'none' }} className="text-center">
                        <img src={require("../images/Home/lectures/emily.png")} alt="Emily" className="img-fluid" />
                      </a>
                      <div className="m-body">
                        <h5 style={{ textAlign: 'center' }}>Emily Hanscom</h5>
                        <h6 style={{ padding: '5px', borderRadius: '5px', background: '#ffffff', color: 'black', textAlign: 'center' }}>
                          Junior @ Marist College
                        </h6>
                        <div style={{ textAlign: 'start' }}>
                          <p>
                            Overview: <span style={{ color: '#AFA99E' }}>
                              Emily Hanscom joined us for our third lecture. She is a junior at Marist College. The main focus of her lecture was figuring out the college application in terms of the financial aspect. For example, she explained the different financial avenues to achieve higher education.
                            </span>
                          </p>
                          <p>
                            Date: <span style={{ color: '#AFA99E' }}>8/19/22</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="destination">
                  <div className="mt-4">
                    <div className="media-entry media-entry-original">
                      <a href="#" target="_blank" style={{ background: 'none' }} className="text-center">
                        <img src={require("../images/Home/lectures/vishant.png")} alt="Vishant" className="img-fluid" />
                      </a>
                      <div className="m-body">
                        <h5 style={{ textAlign: 'center' }}>Vishant Raajkumar</h5>
                        <h6 style={{ padding: '5px', borderRadius: '5px', background: '#ffffff', color: 'black', textAlign: 'center' }}>
                          Freshman @ Carnegie Mellon University
                        </h6>
                        <div style={{ textAlign: 'start' }}>
                          <p>
                            Overview: <span style={{ color: '#AFA99E' }}>
                              Our second lecture was with Vishant Raajkumar – a rising freshman at Carnegie Mellon University. Vishant spoke about the college admissions process but focused more on the most optimal ways to frame an application.
                            </span>
                          </p>
                          <p>
                            Date: <span style={{ color: '#AFA99E' }}>8/14/22</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="destination">
                  <div className="mt-4">
                    <div className="media-entry media-entry-original">
                      <a href="#" target="_blank" style={{ background: 'none' }} className="text-center">
                        <img src={require("../images/Home/lectures/shivani.png")} alt="Shivani" className="img-fluid" />
                      </a>
                      <div className="m-body">
                        <h5 style={{ textAlign: 'center' }}>Shivanni Satish</h5>
                        <h6 style={{ padding: '5px', borderRadius: '5px', background: '#ffffff', color: 'black', textAlign: 'center' }}>
                          University of Texas @ Dallas Freshman
                        </h6>
                        <br />
                        <div style={{ textAlign: 'start' }}>
                          <p>
                            Overview: <span style={{ color: '#AFA99E' }}>
                              Our first lecture was with University of Dallas freshman Shivanni Satish. During this lecture, she spoke about tips for the Common Application and her own experience with it. This lecture received a fair amount of attention from Silverline students because it thoroughly explained how to be successful during the college process.
                            </span>
                          </p>
                          <p>
                            Date: <span style={{ color: '#AFA99E' }}>8/13/22</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lectures;