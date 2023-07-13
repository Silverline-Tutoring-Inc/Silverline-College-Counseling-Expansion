import Footer from "./Footer";
import partner1 from "../images/partners/thepond.png";
import partner2 from "../images/partners/bumper.png";
import partner3 from "../images/partners/canva.png";
import partner4 from "../images/partners/redcross.png";
import partner5 from "../images/partners/365tojapan.png";
import partner6 from "../images/partners/sultan.jpg";
import partner7 from "../images/partners/pandaexpress.png";
import partner8 from "../images/partners/Equality_in_Forensics.png";
import partner9 from "../images/partners/chipotle-mexican-grill-logo-svg-vector.svg";
import partner10 from "../images/partners/wish.png";
import partner11 from "../images/partners/chelmsford.png";
import NavBar from "./NavBar";

const Partners = () => {
  return (
    <>
      <NavBar pageName="partners" />

      <div className="section" id="partners-container">
        <div
          className="container"
          style={{ color: "#D6D3CD", position: "relative" }}
        >
          <h1 className="pt-3">Our Partners & Sponsors</h1>
          <br />
          <p>
            Several businesses, non-profits, and organizations in
            the United States help bring the Silverline image to
            reality. Partners provide resources, funds or other
            necesseities required to create a functioning
            organization. Interested in helping Silverline solve the
            educational divide? Contact a represensative{" "}
            <a
              target="_0"
              href="https://docs.google.com/document/d/1UMz9CIYSuJ1WEQWuOusSQlHchQwpgFmqwVLOTzX0D9w/edit"
            >
              here
            </a>
            .
          </p>
          <div className="row align-items-stretch">
            <div
              id="partners"
              className="col-6 col-sm-6 col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className=" media-entry media-entry-copy media-size3">
                <a
                  href="https://diveintothepond.com/"
                  target="_0"
                  style={{ background: "none" }}
                  className="text-center"
                >
                  <img
                    src={partner1}
                    alt="The pond"
                    className="img-fluid"
                  />
                </a>
                <div className="m-body">
                  <h6
                    style={{
                      padding: "5px",
                      borderRadius: "5px",
                      background:
                        "linear-gradient(90deg, rgba(90,138,236,1) 0%, rgba(230,32,254,1) 100%)",
                      textAlign: "center",
                    }}
                  >
                    The Pond
                  </h6>
                  <p>
                    The Pond is an all in one service for
                    students applying to college. The Pond
                    provides student with a personalized
                    program for college entrance so they
                    always know what to do next and how to
                    do it. The Pond utilizes AI software in
                    order to help student with the college
                    process. To date, over 60,000 students
                    have used the Pond to develop college
                    lists, and they also have over 15,000
                    active users of the platform. The Pond
                    and Silverline Tutoring work together to
                    help students from all different
                    backgrounds.
                  </p>
                </div>
              </div>
            </div>

            <div
              id="partners"
              className="col-6 col-sm-6 col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className=" media-entry media-entry-copy media-size3">
                <a
                  href="https://www.joinbumper.com/ambassadors"
                  target="0"
                  style={{ background: "none" }}
                  className="text-center"
                >
                  <img
                    src={partner2}
                    alt="Bumper Investing"
                    className="img-fluid"
                  />
                </a>
                <div className="m-body">
                  <h6
                    style={{
                      padding: "5px",
                      borderRadius: "5px",
                      background:
                        "linear-gradient(90deg, rgba(53,155,215,1) 0%, rgba(129,132,191,1) 50%, rgba(213,67,152,1) 100%)",
                      textAlign: "center",
                    }}
                  >
                    Bumper Investing
                  </h6>
                  <p>
                    Bumper is an educational investing
                    platform that helps teens begin
                    investing with just $1 and an adult
                    sponsor. Join the hundreds of teens in
                    their ambassador program, a 9-week
                    program focused on gaining real world
                    experience in the investing world. Gain
                    access to perks and rewards while
                    helping fulfill Bumper's mission of
                    expanding future opportunities for
                    students through investing.
                  </p>
                </div>
              </div>
            </div>

            <div
              id="partners"
              className="col-6 col-sm-6 col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className=" media-entry media-entry-copy media-size3">
                <a
                  href="https://www.canva.com/"
                  target="0"
                  style={{ background: "none" }}
                  className="text-center"
                >
                  <img
                    src={partner3}
                    alt="Canva"
                    className="img-fluid"
                  />
                </a>
                <div className="m-body">
                  <h6
                    style={{
                      padding: "5px",
                      borderRadius: "5px",
                      background: "#3FC1C9",
                      textAlign: "center",
                    }}
                  >
                    Canva
                  </h6>
                  <p>
                    Canva is a powerful design tool that can
                    be used in education to create projects.
                    In addition, Canva seeks to teach
                    students the basics of designs,
                    parallelling the Silverline vision.
                    Silverline is one of several non-profits
                    Canva supports as a part of their
                    non-profit initiative. As an
                    organization, Silverline utilizes such
                    tools for social media posts, content
                    creation, and more.
                  </p>
                </div>
              </div>
            </div>

            <div
              id="partners"
              className="col-6 col-sm-6 col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className=" media-entry media-entry-copy media-size3">
                <a
                  href="https://rdcrss.org/silverlinetutoringinc"
                  target="0"
                  style={{ background: "none" }}
                  className="text-center"
                >
                  <img
                    src={partner4}
                    alt="American Red Cross"
                    className="img-fluid"
                  />
                </a>
                <div className="m-body">
                  <h6
                    style={{
                      padding: "5px",
                      borderRadius: "5px",
                      background: "#F10000",
                      textAlign: "center",
                    }}
                  >
                    American Red Cross
                  </h6>
                  <p>
                    The American Red Cross shelters, feeds
                    and provides comfort to victims of
                    disasters; supplies about 40% of the
                    nation's blood; teaches skills that save
                    lives; distributes international
                    humanitarian aid; and supports veterans,
                    military members and their families
                    Click on the logo to view and donate to
                    Silverline's donation page today.
                  </p>
                </div>
              </div>
            </div>

            <div
              id="partners"
              className="col-6 col-sm-6 col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className=" media-entry media-entry-copy media-size3">
                <a
                  href="https://365tojapan.com/"
                  target="0"
                  style={{ background: "none" }}
                  className="text-center"
                >
                  <img
                    src={partner5}
                    alt="365 to Japan"
                    className="img-fluid"
                  />
                </a>
                <div className="m-body">
                  <h6
                    style={{
                      padding: "5px",
                      borderRadius: "5px",
                      background: "#F08811",
                      textAlign: "center",
                    }}
                  >
                    365toJapan
                  </h6>
                  <p>
                    365toJapan is an educational blog
                    covering the course of an enthusiastic
                    Japanese learner. Their mission is to
                    one day visit Japan as an immersed
                    student. The blog covers language,
                    culture, and more, serving as a space
                    for new and experienced learners. As an
                    organization, Silverline helps supports
                    strong and creative educational causes
                    such as 365toJapan through promotions.
                  </p>
                </div>
              </div>
            </div>

            <div
              id="partners"
              className="col-6 col-sm-6 col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className=" media-entry media-entry-copy media-size3">
                <a
                  href="https://www.linkedin.com/company/sultan-s-marketing/"
                  target="0"
                  style={{ background: "none" }}
                  className="text-center"
                >
                  <img
                    src={partner6}
                    alt="Sultan's Marketing"
                    className="img-fluid"
                  />
                </a>
                <div className="m-body">
                  <h6
                    style={{
                      padding: "5px",
                      borderRadius: "5px",
                      background: "black",
                      textAlign: "center",
                    }}
                  >
                    Sultan's Marketing
                  </h6>
                  <p>
                    Sultan’s marketing is a startup
                    marketing company that offer social
                    media marketing services to local
                    businesses. They help business adapt the
                    new generation and grow to the next
                    level by increasing their brand
                    awareness and presence in the social
                    media sphere. They aim to provide low
                    price and high quality marketing
                    services to small businesses and big
                    business alike.
                  </p>
                </div>
              </div>
            </div>

            <div
              id="partners"
              className="col-6 col-sm-6 col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className=" media-entry media-entry-copy media-size3">
                <a
                  href=" https://www.community-fundraiser.com/virtual-fundraiser/events/promotions/104b6bfb-4dbd-b890-b2a1-4f237692f082/en/landing"
                  target="0"
                  style={{ background: "none" }}
                  className="text-center"
                >
                  <img
                    src={partner7}
                    alt="Panda Express"
                    className="img-fluid"
                  />
                </a>
                <div className="m-body">
                  <h6
                    style={{
                      padding: "5px",
                      borderRadius: "5px",
                      background:
                        "linear-gradient(90deg, rgba(244,21,32,1) 0%, rgba(0,0,0,1) 74%)",
                      textAlign: "center",
                    }}
                  >
                    Panda Express
                  </h6>
                  <p>
                    Panda Express is an American fast food
                    restaurant chain that serves American
                    Chinese cuisine. With over 2,200
                    locations, it is the largest
                    Asian-segment restaurant chain in the
                    United States. They are working with
                    Silverline Tutoring to help fundraise
                    and donate resources to children in
                    India and Ethopia.
                  </p>
                </div>
              </div>
            </div>

            <div
              id="partners"
              className="col-6 col-sm-6 col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className=" media-entry media-entry-copy media-size3">
                <a
                  href=" https://www.equalityinforensics.org/"
                  target="0"
                  style={{ background: "none" }}
                  className="text-center"
                >
                  <img
                    src={partner8}
                    alt="Equality in Forensics"
                    className="img-fluid"
                  />
                </a>
                <div className="m-body">
                  <h6
                    style={{
                      padding: "5px",
                      borderRadius: "5px",
                      background:
                        "linear-gradient(90deg, rgba(191,43,43,1) 0%, rgba(203,50,50,1) 33%, rgba(225,120,120,1) 62%, rgba(253,163,163,1) 89%)",
                      textAlign: "center",
                    }}
                  >
                    Equality in Forensics
                  </h6>
                  <p>
                    Equality in Forensics is a student-run
                    NPO that provides free, online resources
                    to make speech and debate more
                    accessible. Their mission is to reduce
                    the classist barriers that prevent
                    anyone from succeeding in high school
                    forensics. From free online tournaments,
                    to curriculum produced by national
                    champions, Equality in Forensics
                    provides direct support to debaters
                    across the country.
                  </p>
                </div>
              </div>
            </div>

            <div
              id="partners"
              className="col-6 col-sm-6 col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className=" media-entry media-entry-copy media-size3">
                <a
                  href="https://www.chipotle.com/"
                  target="_0"
                  style={{ background: "none" }}
                  className="text-center"
                >
                  <img
                    src={partner9}
                    alt="Chipotle Mexican Grill"
                    className="img-fluid"
                  />
                </a>
                <div className="m-body">
                  <h6
                    style={{
                      padding: "5px",
                      borderRadius: "5px",
                      background:
                        "linear-gradient(90deg, rgba(69,20,0,1) 0%, rgba(168,22,18,1) 100%)",
                      textAlign: "center",
                    }}
                  >
                    Chipotle of Drumhill Chelmsford, MA
                  </h6>
                  <p>
                    Chipotle Mexican Grill, Inc. is an
                    American chain of fast casual
                    restaurants in that operates in over 5
                    different countries with nearly 3,000
                    locations. In September of 2022, they
                    worked with Silverline Tutoring to help
                    fundraise money. This fundraiser allowed
                    Silverline to become one step closer to
                    solving the educational divide. Money
                    was redistributed to Silverline heads in
                    Africa in order donate to those in need.
                  </p>
                </div>
              </div>
            </div>

            <div
              id="partners"
              className="col-6 col-sm-6 col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className=" media-entry media-entry-copy media-size3">
                <a
                  href="https://www.thewishproject.org/"
                  target="_0"
                  style={{ background: "none" }}
                  className="text-center"
                >
                  <img
                    src={partner10}
                    alt="The Wish Project"
                    className="img-fluid"
                  />
                </a>
                <div className="m-body">
                  <h6
                    style={{
                      padding: "5px",
                      borderRadius: "5px",
                      background:
                        "linear-gradient(90deg, rgba(61,188,193,1) 0%, black 100%)",
                      textAlign: "center",
                    }}
                  >
                    The Wish Project
                  </h6>
                  <p>
                    The Wish Project’s mission is to help
                    families in need establish long-term
                    residency by providing basic needs to
                    provide critical immediate assistance to
                    homeless families, victims of fire or
                    disaster; and to support the community.
                    After realizing a a similarity in
                    mission statements, the Wish Project
                    began working with Silverline to help
                    the local Massachusetts area and solve
                    local educational disparities.
                  </p>
                </div>
              </div>
            </div>

            <div
              id="partners"
              className="col-6 col-sm-6 col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className=" media-entry media-entry-copy media-size3">
                <a
                  href="https://chs.chelmsfordschools.org/"
                  target="_0"
                  style={{ background: "none" }}
                  className="text-center"
                >
                  <img
                    src={partner11}
                    alt="Chelmsford High School"
                    className="img-fluid"
                  />
                </a>
                <div className="m-body">
                  <h6
                    style={{
                      padding: "5px",
                      borderRadius: "5px",
                      background:
                        "linear-gradient(90deg, rgba(87,41,50,1) 0%, rgba(0,0,0,1) 100%, rgba(0,212,255,1) 100%)",
                      textAlign: "center",
                    }}
                  >
                    Chelmsford High School
                  </h6>
                  <p>
                    Silverline Tutoring is partnered with
                    Chelmsford High School. Chelmsford High
                    School is a high school located in
                    Chelmsford, Massachusetts and serves
                    nearly 1,500 students. Silverline
                    Tutoring works to provide students with
                    help for all academic classes and
                    provide volunteer opportunities to
                    students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Partners;
