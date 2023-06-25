import React from 'react';

function FAQ() {
      return (
         <div>
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-12">
                     <h1 className="title" data-aos="fade-up">Frequently Asked Questions</h1>
                     <h2 className="sub-heading" data-aos="fade-up" data-aos-delay="100"></h2>
                     <div data-aos="fade-up" data-aos-delay="200">

                        <h3 className="question">1. How do I signup for tutoring?</h3>
                        <p className="answer">
                        {/* add the link as necessary*/}
                        Fill out the <a href="">student form</a> located under "get
                        involved," and feel free to join our Discord server to learn more.
                        </p> 
                     </div>

                     <div data-aos="fade-up" data-aos-delay="300">
                        <h3 className="question">2. Where does tutoring happen?</h3>
                        <p className="answer">
                        Tutoring sessions take place online and can be conducted through zoom or other video conference platforms. 
                        If you are a member of our Discord server, the voice channel feature will often be used by our tutors.
                        </p>
                     </div>

                     <div data-aos="fade-up" data-aos-delay="400">
                        <h3 className="question">3. Do I have to pay for tutoring?</h3>
                        <p className="answer">
                        No! Silverline is a nonprofit dedicated to ensuring that students recieve tutoring for free. 
                        Tutors earn volunteer hours in exchange for their help. 
                        However, students can earn from our program as we often host trivia nights with a cash prize
                        thanks to our sponsors.
                        </p>
                     </div>

                     <div data-aos="fade-up" data-aos-delay="500">
                        <h3 className="question">4. How do I signup to be a tutor?</h3>
                        <p className="answer">
                        {/* add the link as necessary this description from old website*/}
                        Fill out the <a href="">tutor form</a> located under "get
                        involved," and we will reach out to you. Be prepared to answer questions during an
                        interview as well as a short 5-10 minute lesson to demonstrate
                        your skills in teaching. Afterwards, we will determine if you are suited to teach
                        and the specific subjects.
                        </p>
                     </div>

                     <div data-aos="fade-up" data-aos-delay="600">
                     <h3 className="question">5.What is the experience of the tutors</h3>
                     <p className="answer">
                     Most of our tutors are high school senior or college students. However, some of our tutors are teachers or former teachers.
                     Regardless of the tutor, we guaruntee that all of our tutors are qualified.
                     </p>
                  </div>

                  <div data-aos="fade-up" data-aos-delay="700">
                  <h3 className="question">6. Who runs Silverline Tutoring</h3>
                  {/* add the link as necessary this description from old website*/}
                  <p className="answer">
                  Silverline tutoring is run by highschoolers and college students. Our full team can
                  be found <a href="team.html">here</a>.
                  </p>
               </div>
                  </div>
               </div>
            </div>
         </div>
      );
}

export default FAQ;
