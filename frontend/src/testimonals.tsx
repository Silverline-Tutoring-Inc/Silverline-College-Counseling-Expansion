import React from 'react';
import './index.css';
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
		 <div className="section">
			 <div className="container">
			 	<div className="row">
				 	<div className="col-lg-5 pb-7 me-auto text-center testimonial-wrap" >
				 	<span className="subheading">Satisfied Students</span>
				 	<h2 className="heading mb-5">Testimonials</h2>
				 	<div className="col-lg-5 text-md-end" ></div>
				 	<div className="wide-slider-testimonial-wrap align-items-center">
				 		<div className="wide-slider-testimonial">
				 			<div className="item">
				 				<blockquote className="block-testimonial">
				 					<div className="author">
									 <img src="./images/anonymous.jpg" alt="testimonial from Rithvik"></img>
									<h3 style={{ color: '#ffff'}}>Rithvik</h3>
									<p style={{color: "#b6bbd2"}} className="mb-5">High School Sophomore</p>
									</div>
									<p>
								<div className="quote">&ldquo;</div>
								&ldquo; I got so much help for AP exams, and it was free to top it all off. My tutor
								was very helpful and helped me get 5's on my exams!&rdquo;</p>
								</blockquote>
							</div>
							<div className="item">
				 				<blockquote className="block-testimonial">
				 					<div className="author">
									 <img src="./images/anonymous.jpg" alt="testimonial from Shanti"></img>
									<h3 style={{ color: '#ffff'}}>Shanti</h3>
									<p style={{color: "#b6bbd2"}} className="mb-5">A Parent</p>
									</div>
									<p>
								<div className="quote">&ldquo;</div>
								&ldquo;This service is so great, my child was struggling and lack confidence in math
								in general. Her tutor was great, and helped her through many problems and was
								patient with her. I would recommend Silverline Tutoring to any parent I meet&rdquo;</p>
								</blockquote>
							</div>
							<div className="item">
				 				<blockquote className="block-testimonial">
				 					<div className="author">
									 <img src="./images/anonymous.jpg" alt="testimonial from Li"></img>
									<h3 style={{ color: '#ffff'}}>Li Jian</h3>
									<p style={{color: "#b6bbd2"}} className="mb-5">8th Grader</p>
									</div>
									<p>
								<div className="quote">&ldquo;</div>
								&ldquo;Silverline Tutoring is great! I really liked the instant help feature on
								discord. I was able to get help with any questions I had instantly.&rdquo;</p>
								</blockquote>
							</div>
							<div className="item">
				 				<blockquote className="block-testimonial">
				 					<div className="author">
									 <img src="./images/anonymous.jpg" alt="testimonial from Rithin"></img>
									<h3 style={{ color: '#ffff'}}>Rithin</h3>
									<p style={{color: "#b6bbd2"}} className="mb-5">High School Junior</p>
									</div>
									<p>
								<div className="quote">&ldquo;</div>
								&ldquo;I was looking to get help in chess because there wasn't many opportunities
								for me to learn where I lived. My tutor helped me a lot. He taught me many different
								strategies from opening to endgames. He always made time to tutor me and did so with
								a passion.&rdquo;</p>
								</blockquote>
							</div>
						</div>
					</div>
					</div>
					<div className="col-lg-5 mt-6 mt-lg-0 text-center">
						<span className="subheading">Still Unsure?</span>
						<h2 className="heading mb-5">Frequently Asked  Questions</h2>
						<div className="custom-accordion" id="accordion_1">
							<div className="accordion-item">
								<h2 className="mb-0">
								<button className="btn btn-link" type="button" data-bs-toggle="collapse"
								data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">How
								do I signup for tutoring?</button>
								</h2>

								<div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
							>
								<div className="accordion-body">
								Fill out the <a href="get-involved.html">student form</a> located under "get
								involved," and feel
								free to join our Discord server to learn
								more.
								</div>
							</div>
							</div>
							<div className="accordion-item">
								<h2 className="mb-0">
								<button className="btn btn-link collapsed" type="button" data-bs-toggle="collapse"
								data-bs-target="#collapseTwo" aria-expanded="false"
								aria-controls="collapseTwo">Where does tutoring happen?</button>
								</h2>
								<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
							data-bs-parent="#accordion_1">
								<div className="accordion-body">
								Tutoring sessions take place online and can be conducted through zoom or other video
								conference platforms. If you are a member of our Discord server, the voice channel
								feature will often be used by our tutors.
								</div>
							</div>
							</div>
							<div className="accordion-item">
								<h2 className="mb-0">
								<button className="btn btn-link collapsed" type="button" data-bs-toggle="collapse"
								data-bs-target="#collapseThree" aria-expanded="false"
								aria-controls="collapseThree">Do I have to pay for tutoring?</button>
								</h2>
								<div id="collapseThree" className="collapse" aria-labelledby="headingThree"
							data-bs-parent="#accordion_1">
								<div className="accordion-body">
								No! Silverline is a nonprofit dedicated to ensuring that students recieve tutoring
								for free. Tutors earn volunteer hours in exchange for their help. However, students
								can earn from our program as we often host trivia nights with a
								cash prize thanks to our sponsors.
								</div>
							</div>
							</div>
							<div className="accordion-item">
								<h2 className="mb-0">
								<button className="btn btn-link collapsed" type="button" data-bs-toggle="collapse"
								data-bs-target="#collapseFour" aria-expanded="false"
								aria-controls="collapseFour">How do I sign up
								to be a tutor?</button>
								</h2>
								<div id="collapseFour" className="collapse" aria-labelledby="headingThree"
							data-bs-parent="#accordion_1">
								<div className="accordion-body">
								Fill out the <a href="get-involved.html">tutor form</a> located under "get
								involved," and we will reach out to you. Be prepared to answer questions during an
								interview as well as a short 5-10 minute lesson to demonstrate
								your skills in teaching. Afterwards, we will determine if you are suited to teach
								and the specific
								subjects.
								</div>
							</div>
							</div>
							<div className="accordion-item">
								<h2 className="mb-0">
								<button className="btn btn-link collapsed" type="button" data-bs-toggle="collapse"
								data-bs-target="#collapseFive" aria-expanded="false"
								aria-controls="collapseFive">What is the experience of the tutors?</button>
								</h2>
								<div id="collapseFive" className="collapse" aria-labelledby="headingThree"
							data-bs-parent="#accordion_1">
								<div className="accordion-body">
								Most of our tutors are high school senior or college students. However, some of our
								tutors are teachers or former teachers. Regardless of the tutor, we guaruntee that
								all of our tutors are qualified.
								</div>
							</div>
							</div>
							<div className="accordion-item">
								<h2 className="mb-0">
								<button className="btn btn-link collapsed" type="button" data-bs-toggle="collapse"
								data-bs-target="#collapseSix" aria-expanded="false"
								aria-controls="collapseFive">Who
								runs Silverline Tutoring?</button>
								</h2>
								<div id="collapseSix" className="collapse" aria-labelledby="headingThree"
							data-bs-parent="#accordion_1">
								<div className="accordion-body">
								Silverline tutoring is run by highschoolers and college students. Our full team can
								be found <a href="team.html">here</a>.
								</div>
							</div>
							</div>
						</div>
					</div>
				</div>
				<div className="text-center" style={{marginBottom:"0px"}}>
			<p className="" style={{paddingTop:"20px"}}><a
					href="get-involved.html" className="btn btn-primary text-lg-center">Get Involved Today!</a></p>
		</div>
			</div>
		</div>
    </div>
    
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
