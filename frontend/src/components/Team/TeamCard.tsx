import React from "react";
import PropTypes from "prop-types";

const TeamCard = ({ name, img, description, education, hobbies, linkedin }) => {
  // const [show, setShow] = useState(false);

  // const showCountries = () => {
  // 	setShow(!show);
  // };
  // const countriesLi = [];
  // countries.forEach((country) =>
  // 	countriesLi.push(<li className="mx-4">{country}</li>)
  // );

  // const [showEducation, setShowEducation] = useState(false);
  // const [showHobbies, setShowHobbies] = useState(false);
  // const [showLinkedin, setShowLinkedin] = useState(false);

  let showEducation = false;
  let showHobbies = false;
  let showLinkedin = false;
  if (education && education.length > 0) {
    showEducation = true;
  }
  if (hobbies.data && hobbies.data.length > 0) {
    showHobbies = true;
  }

  if (linkedin && linkedin.length > 0) {
    showLinkedin = true;
  }

  const hobbiesLi = [];
  if (showHobbies === true) {
    hobbies.data.forEach((hobby) =>
      hobbiesLi.push(<li className="mx-4">{hobby.attributes.hobby}</li>),
    );
  }

  return (
    <>
      <div
        className="col-6 col-sm-6 col-md-6 col-lg-3 aos-init aos-animate"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className=" media-entry media-entry-original media-size0">
          {showLinkedin === true ? (
            <a
              href={linkedin}
              target="0"
              style={{ backgroundColor: "transparent" }}
              className="text-center"
            >
              <img
                src={"http://localhost:1337" + img.data[0].attributes.url}
                alt={name}
                className="img-fluid"
              />
            </a>
          ) : null}
          <div className=" m-body">
            <h5 style={{ textAlign: "center" }}>{name}</h5>
            <p>{description}</p>
            {showEducation === true ? (
              <p>
                Education: <br />
                <br /> <span style={{ color: "#AFA99E" }}>{education}</span>
              </p>
            ) : null}
            {showHobbies === true ? (
              <>
                <p>Hobbies</p>
                <ul className="text-white py-3 my-0">{hobbiesLi}</ul>{" "}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

TeamCard.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  desc: PropTypes.string,
  education: PropTypes.string,
  hobbies: PropTypes.array,
  linkedin: PropTypes.string,
};
export default TeamCard;
