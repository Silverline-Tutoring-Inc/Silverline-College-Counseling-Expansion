import React from 'react';

const Hero = () => {
  return (
    <div className="hero hero1 overlay" id='hero_overlay'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 pt-7">
            <h1 className="heading mb-4">SILVERLINE TUTORING</h1>
            <h2 className="mb-5">Solving the education divide, one student at a time.</h2>
            <div>
              <p className="my-5"><a href="https://discord.gg/kD8aMaX2gP" target="_blank" className="btn btn-primary">Join Us Today</a></p>
              <p className="my-4"><a href="/get-involved.html" target="_blank" className="btn btn-primary">Student Signup</a></p>
              <p className="my-4"><a href="/get-involved.html" target="_blank" className="btn btn-primary">Tutor Signup</a></p>
              {/* <p className="my-4"><a href="https://silverlinetutoringinc.betterworld.org/donate" target="_blank" className="btn btn-primary">Donate</a></p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero