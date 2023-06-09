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

         <div className="hero hero2" style={{ backgroundImage: 'url(/about1.png)' }}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5 mx-auto text-center">
                  <h1 className="heading mb-5" >Who We Are.</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="section overlay" style={{ backgroundImage: "url(/sBG.png)", backgroundRepeat: 'repeat', backgroundPosition: 'center center' }}>
            <div className="container">
              <div className="row align-items-center">
                 <div className="col-lg-12">
                    <h1 style={{ color: '#918CA1', fontFamily: 'Work Sans', fontWeight: '800'}}>About Silverline</h1>

                    <p >Silverline Tutoring is an educational 501(c)(3) nonprofit
						connecting tutors and students within our organization of over 5000 dedicated members. Founded by
						college and high school students, this company recognizes the difficulty of learning—weve all
						been there.</p>

					          <p>From the depths of math to complex texts in English,
						every student has struggled at one point or another. We want to bridge this divide in education
						by providing free tutoring to any student. But how do we accomplish this difficult task?</p>

					          <p>Silverline creates a free and flexible tutoring service
						        by finding the experts in our community and assigning them to students in need. For instance, if
						        someone has 2+ years of experience in chemistry, they would apply to become a tutor and earn
						          community service hours in exchange for their work. This framework allows us to serve as many
						          students as possible at the cost of nothing while still maintaining quality. </p>
                </div>
                <div className="col-lg-1"></div>
              </div><br></br>
              <div className="container">
			<div className="row align-items-center">

				<div className="col-lg-1"></div>
				<div className="col-lg-12">
					<h1 style={{ color: "#918CA1", fontFamily: 'Work Sans', fontWeight: "800"}} >Our Goals</h1>

					<p >At Silverline, we want to solve the education divide, one
						student at a time, by making learning enjoyable and stress-free for all. Therefore, we never
						hold students accountable to a strict schedule and always work based on the student needs,
						allowing them to benefit the most. Our tutors are vetted in advance to ensure that they are
						student-friendly and adaptable. Monthly trivia contests and other games are also held to promote
						a fun learning environment. We want to set our students up for success while building a strong
						community that facilitates opportunities for everyone involved. Because of this foundation, our
						community now serves up to 5000 members.</p>
				</div>


			</div>
      <div className="container">
			<div className="row align-items-center">

				<div className="col-lg-1"></div>
				<div className="col-lg-12">
					<h1 style={{ color: "#918CA1", fontFamily: 'Work Sans', fontWeight: "800"}}>Our Target Group</h1>

					<p>Silverline is primarily for students in high school.
						However, our reach extends beyond simply highschoolers. We also offer services to elementary and
						middle schoolers and college-level students, depending on the course. Our diverse group of
						tutors allows us to serve a greater population of people. </p>

					<p >Additionally, aside from students, adults and any other
						age group are also welcome if they are looking for a refresher in a past course or simply
						looking to learn something new.</p>

					<p >In terms of tutors, Silverline accepts anyone from
						sophomore year of highschool and above. In the past, we have had school teachers helping in our
						system, meaning that even adults are more than welcome to join our community. Therefore,
						regardless of age or education, Silverline is an open outlet for all groups whether it be in the
						form of being a student or a teacher.</p>


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
          </div>
    </div>
    
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
