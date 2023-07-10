import React from 'react';
import './index.css';
import AOS from "aos";
import "aos/dist/aos.css";
import ReactDOM from 'react-dom/client';
import logo4 from "./images/logo4.svg";
import logo1 from "./images/logo1.svg";
import "./fonts/icomoon/style.css"
import "./fonts/flaticon/font/flaticon.css"
import "./css/tiny-slider.css"
import "./css/aos.css"
import "./css/flaticon.css"
import "./css/flatpickr.min.css"
import "./css/glightbox.min.css"
import "./css/style.css"
import "./css/fontawesome/webfonts/fa-brands-400.eot"
import "./css/fontawesome/webfonts/fa-brands-400.woff"
import "./css/fontawesome/webfonts/fa-brands-400.woff2"
import "./css/fontawesome/webfonts/fa-regular-400.eot"
import "./css/fontawesome/webfonts/fa-regular-400.woff"
import "./css/fontawesome/webfonts/fa-solid-900.eot"
import "./css/fontawesome/webfonts/fa-regular-400.woff2"
import "./css/fontawesome/webfonts/fa-solid-900.woff2"
import reportWebVitals from './reportWebVitals';
import "./css/aos.css"
import firstimage from './images/services/tutoring.png'
import secondimage from './images/services/resources.jpeg'
import lectureimage from './images/services/lectures.png'
import youtubeimage from './images/services/shorts.png'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <div>
    <div>
    <div className="site-mobile-menu site-navbar-target">
      <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close">
          <span className="icofont-close js-menu-toggle"></span>
          </div>
        </div>
    </div>
    <nav class="site-nav">
    <div class="container nav1">
      <img src={logo4} alt='silverline logo' style={{ maxHeight: '70px', marginTop: '-15px' }} className='float-start'></img>
      <img src={logo1} alt='silverline logo' style={{ maxHeight: '70px', marginTop: '-15px' }} className='float-start1 hide'></img>
    <div className="site-navigation">
              <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu float-start">
                <li className="active"><a href>Home</a></li>
                <li className="has-children non">
                  <button href="/#" style={{background: 'none', color: '#D7D6DA', border: 'none', paddingLeft: '20px', font: 'inherit', cursor: 'pointer', outline: 'inherit'}}>About Us ▾</button>
                  <ul className="dropdown">
                    <li><a href="/#">About</a></li>
                    <li><a href="/#">Testimonials</a></li>
                    <li><a href="/#">Team</a></li>
                    <li><a href="/#">Partners</a></li>
                  </ul>
                </li>
                <li className="non"><a href="/#">Services</a></li>
                <li className="non"><a href="/#">Impact/Reach</a></li>
                <li className="non"><a href="/#">Events</a></li>
                <li className="non"><a href="reviews.html">FAQs</a></li>
              </ul>
              <ul className="js-clone-nav d-none d-lg-inline-block text-end site-menu float-end">
                <li className="cta-button"><a href="mailto:silverlinetutoring2021@gmail.com">Contact Us</a></li>
                <li className="social-top">
                  <a href="https://discord.gg/kD8aMaX2gP" target="_0"><span className="icon-link" /></a>
                  <a href="https://www.instagram.com/silverlinetutoringinc/?igshid=YmMyMTA2M2Y%3D" target="_0"><span className="icon-instagram" /></a>
                  <a href="https://www.youtube.com/channel/UCc-c1_wUoQPavLeKE5I2_aA" target="_0"><span className="icon-youtube" /></a>
                  <a href="https://m.facebook.com/people/Silverline-Tutoring/100078405522496/" target="_0"><span className="icon-facebook" /></a>
                  <a href="https://www.linkedin.com/company/silverline-tutoring-services/" target="_0"><span className="icon-linkedin" /></a>
                </li>
              </ul>
              <a href="/#" className="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none light" data-toggle="collapse" data-target="#main-navbar">
                <span />
              </a>
            </div>
         </div>
         </nav>

         
         <div className="hero hero2" style={{ backgroundImage: 'url(/services.png)' }}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5 mx-auto text-center">
                  <h1 className="heading mb-5" >Our Services</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="section section-2">
            <div className="container">
              <div className="row align-items-center">
              <div className="col-lg-6">
					      <span className="subheading" >Our founding idea</span>
					      <h2 className="heading mb-3">Tutoring</h2>

					      <p >Silverline Tutoring provides high-quality, free one-on-one tutoring. Our tutors are experts at the subjects they tutor, often in college and pursuing a degree in the subject they teach. They conduct sessions with students over the communication platform Discord or through other virtual meeting platforms like Zoom. All meetings are recorded to ensure that the environment is safe for both the student and tutor alike.  
					      </p>
				      </div>
              <div className="col-lg-6">
					<div className="row">
						<div className="col-12 col-lg-12" >
							<img src={firstimage} alt="tutoring services" className="gen-img py-3"></img>
						</div>

					</div>
				</div>
              </div>
            </div>
            <br></br>
            <div className="container">
              <div className="row align-items-center">
              <div className="col-lg-6">
					      <span className="subheading" >Student Support</span>
					      <h2 className="heading mb-3">Resources</h2>

					      <p >Here at Silverline, we offer various resources to help students on standardized exams. We provide SAT problems of the day that allow students to practice answering exam questions every day. We also provide different online resources that will allow them to master any subject they are struggling with. As for AP resources, along with providing tutoring for every AP, we supply resources and free online resources for every AP, which allows students to master these subjects. From Princeton Review to Tutor Doctor, Silverline has all the resources necessary for students. General resources can also be found through the <a href="https://discord.gg/kD8aMaX2gP">Discord Community</a>.
					      </p>
				      </div>
              <div className="col-lg-6">
					<div className="row">
						<div className="col-12 col-lg-12" >
							<img src={secondimage} alt="resource service" className="gen-img py-3"></img>
						</div>

					</div>
				</div>
              </div>
            </div>
            <br></br>

            <div className="container">
              <div className="row align-items-center">
              <div className="col-lg-6">
					<div className="row">
						<div className="col-12 col-lg-12" >
							<img src={lectureimage} alt="lecture services" className="gen-img py-3" style={{paddingBottom: '20'}}></img>
						</div>

					</div>
				</div>
        <div className="col-lg-6">
					      <span className="subheading" >Community Events</span>
					      <h2 className="heading mb-3">Lectures</h2>

					      <p >We provide quick and informative lectures on all topics that our members request; whether it would be on college admissions or tips on self-improvement, the members typically decide the style and topic of the lecture. In the past, we have hosted multiple college-related lectures answering students questions surrounding the whole process and allowing them to better understand how to approach their applications. Feel free to sign up to join our upcoming lectures <a href="#">here</a>
					      </p>
				      </div>
              </div>
            </div>
          <br></br>

          <div className="container">
              <div className="row align-items-center">
              <div className="col-lg-6">
					<div className="row">
						<div className="col-12 col-lg-12" >
							<img src={youtubeimage} alt="youtube shorts" className="gen-img py-3" style={{paddingBottom: '20'}}></img>
						</div>

					</div>
				</div>
        <div className="col-lg-6">
					      <span className="subheading" >Social Services</span>
					      <h2 className="heading mb-3">Youtube Shorts</h2>

					      <p >YouTube videos are another outlet for our students, which are specifically aimed towards seniors preparing for college. Our goal with these sets of videos is to assist students in understanding the approach for college applications and how they should tackle them. In comparison to our other social media platforms, we dedicate the YouTube space to be strictly for educational content.
					      </p>
				      </div>
              </div>
            </div>

            <div className="container">
              <div className="col-lg-12 text-center">
                <span className="subheading" >Future Ideas</span>
                <h2 className="heading mb-3">What's Next?</h2>
                <p > Looking forward, we hope to partner with underfunded schools and provide resources and tutoring for students who are looking for extra help. Along with that, we plan on eventually expanding our focus to developing countries worldwide, providing and distributing curriculum for students in underserved areas. Our goal is to solve the educational divide, and the only possible way we believe we can truly make an impact is by spreading support worldwide. Anyone can help us reach our goal either by donating, spreading word in their local districts, or joining the organization.
					</p>
          <p className="my-5" ><a
						href="downloads/Press Release.pdf" download="Press Release.pdf" target="_blank" className="btn btn-primary">Press Release</a></p>
            <p className="my-6" ><a
							href="https://discord.gg/kD8aMaX2gP" target="_blank" className="btn btn-primary">Join Us Today</a></p>
              </div>
            </div>
         </div>
         <div className="site-footer">
		<div className="container align-items-center">
			<div className="row align-self-lg-center">
				<div className="col-lg-3">
					<div className="widget">
						<h3>Silverline Tutoring</h3>
						<p>Silverline Tutoring is an educational 501(c)(3) nonprofit organization connecting tutors and
							students in a community
							with over 5000 dedicated members. Founded by college and high school students, we recognize
							the difficulty of
							learning—we’ve all been there.</p>
					</div> {/* /.widget */}
				</div> {/* /.col-lg-3 */}
				<div className="col-lg-1"></div>
				<div className="col-lg-2">
					<div className="widget">
						<h3>Navigation</h3>
						<ul className="list-unstyled float-left links">
							<li><a href="./index.html">Home</a></li>
							<li><a href="./about.html">About Us</a></li>
							<li><a href="./services.html">Services</a></li>
							<li><a href="./community.html">Our Community</a></li>
							<li><a href="./get-involved.html">Get Involved</a></li>
							<li><a href="./reviews.html">Reviews</a></li>
						</ul>
					</div> {/* /.widget */}
				</div> {/* /.col-lg-3 */}
				<div className="col-lg-1"></div>
				<div className="col-lg-3">
					<div className="widget">
						<h3>Contact</h3>
						<address style={{color: "#AFA99E"}}>Massachusetts, United States</address>
						<ul className="list-unstyled links mb-4">
							<li><a href="tel://7862959992">(786) 295-9992</a></li>
							<li><a href="mailto:silverlinetutoring2021@gmail.com">silverlinetutoring2021@gmail.com</a>
							</li>
						</ul>
					</div> {/* /.widget */}
				</div> {/* /.col-lg-3 */}

			</div> {/* /.row */}

			<div className="row">
				<div style={{color: "white"}} className="col-lg-6">
					<p className="copy">&copy;
						<script>document.write(new Date().getFullYear());</script> Silverline Tutoring Services | EIN:
						88-3149458  Made by <a href="https://github.com/Tarune28" target="_blank"
							rel="nofollow noopener">Tarun Eswar</a>
					</p>
				</div>
				<div className="col-lg-6 text-end">
					<ul className="list-unstyled social">
						<li><a href="https://discord.gg/kD8aMaX2gP"><span className="icon-link"></span></a></li>
						<li><a href="https://www.instagram.com/silverlinetutoringinc/?igshid=YmMyMTA2M2Y%3D"><span
									className="icon-instagram"></span></a></li>
						<li><a href="https://www.youtube.com/channel/UCc-c1_wUoQPavLeKE5I2_aA"><span
									className="icon-youtube"></span></a></li>
						<li><a href="https://m.facebook.com/people/Silverline-Tutoring/100078405522496/"><span
									className="icon-facebook"></span></a></li>
						<li><a href="https://www.linkedin.com/company/silverline-tutoring-services/"><span
									className="icon-linkedin"></span></a></li>
					</ul>
				</div>
			</div>
		</div> {/* /.container */}
	</div> {/* /.site-footer */}
    
		</div><br></br>

  
    
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();