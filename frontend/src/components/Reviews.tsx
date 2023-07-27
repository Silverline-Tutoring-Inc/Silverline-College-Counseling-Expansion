import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
const Review = () => {
  const styles = {
    reviewsPage: {
      backgroundColor: "#252525",
      color: "white",
      textAlign: "center",
      padding: "20px",
      fontFamily: "DM Sans, sans-serif",
    },
    reviewsTitle: {
      fontSize: "48px", // Increased font size for Reviews title
      marginBottom: "10px", // Reduced spacing below the Reviews title
      fontFamily: "DM Sans, sans-serif",
    },
    reviewsSubtitle: {
      fontSize: "22px", // Reduced font size for Reviews subtitles
      margin: "5px 0", // Reduced spacing between the subtitles
      fontFamily: "DM Sans, sans-serif",
    },
    reviewsContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap",
    },
    review: {
      backgroundColor: "#222",
      padding: "40px",
      width: "45%",
      marginBottom: "20px",
      textAlign: "left",
    },
    reviewHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    },
    reviewName: {
      color: "white",
      fontSize: "28px",
      fontFamily: "DM Sans, sans-serif",
    },
    reviewOrigin: {
      color: "gray",
      fontSize: "18px",
      marginTop: "5px",
    },
    reviewRating: {
      display: "flex",
      justifyContent: "flex-end",
      fontSize: "24px",
      marginTop: "-10px",
    },
    star: {
      marginRight: "2px",
      fontSize: "20px",
      color: "#ffc107",
    },
    reviewContent: {
      color: "gray",
      fontSize: "18px",
      fontFamily: "DM Sans, sans-serif",
    },
  };

  return (
    <div style={styles.reviewsPage} data-testid="reviews-container">
      <NavBar pageName="reviews" />
      <h1 style={styles.reviewsTitle}>Reviews</h1>
      <p style={styles.reviewsSubtitle}>
        Hear what others have to say about Silverline Tutoring.
      </p>
      <p style={styles.reviewsSubtitle}>
        If you would like to leave a more personalized comment, please email us.
      </p>
      <div style={styles.reviewsContainer}>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Abdu-Allah Ahmed</h3>
              <span style={styles.reviewOrigin}>8th grader from Egypt</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}>
            I like how the tutors are very friendly and explain the topics in a
            very understanding way. They are quick to respond whenever I have a
            question. This organization is great if you want to improve in any
            subject or if you want to work on a hobby such as chess.
          </p>
        </div>
        {/* Add more reviews here */}
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Rithvik M.</h3>
              <span style={styles.reviewOrigin}>Junior from New York</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}>
            I was struggling in math so I requested a tutor. I got so much help
            from my tutor and it was free to top it all off. This organization
            is great for anyone who is struggling in any subject and wants help
            from qualified tutors. The self-serving system also works as
            although I was previously a student, I’m now the head tutor.
          </p>
        </div>
        {/* Add more reviews here */}
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Dylan A.</h3>
              <span style={styles.reviewOrigin}>Freshman from California</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}>
            Silverline Tutoring is a great organization given the fact that it
            is free, has several tutors almost always active, and has a very
            active and friendly community. I really enjoy being tutored for free
            and it helps the tutors because they gain community service hours
            just for tutoring you. I would recommend that you join the
            organization
          </p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Anubhav P.</h3>
              <span style={styles.reviewOrigin}>Sophomore from Wisconsin</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}>
            I was looking for help on computer science and requested a tutor at
            Silverline Tutoring. Within a couple of hours I was paired with a
            tutor and we met the next day over zoom. My tutor was able to break
            down the topic and made it really easy for me to understand. He
            helped me pass the class with an A+
          </p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Rithin P.</h3>
              <span style={styles.reviewOrigin}>Senior from Texas</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}>
            I was looking for quick help from the helpers in the organization,
            and I asked for help on a physics question I had and I got a
            response and help within minutes.
          </p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Aryan Patel</h3>
              <span style={styles.reviewOrigin}>Junior from India</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}>
            Silverline Tutoring is simply the best, I got so much help on my
            homework and the helpers quickly answered all the questions I had.
          </p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>David G</h3>
              <span style={styles.reviewOrigin}>
                Freshman @ Northeastern University
              </span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}>
            I had a couple of problems with my intro to chem class in college
            and I got all the help I needed from the chemistry tutors at
            Silverline Tutoring. Would recommend it to anyone who is looking for
            help!
          </p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Arav S.</h3>
              <span style={styles.reviewOrigin}>Sophomore from Alabama</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}>
            I was struggling with improving in chess and was constantly losing
            my games on chess.com. I joined the server and got paired with a
            tutor within a day. Within a couple of classes I was able to rapidly
            improve and was able to start winning more games against harder
            opponents.
          </p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Audrey B.</h3>
              <span style={styles.reviewOrigin}>Sophomore from California</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}>
            I was struggling with AP European history, and had a B- in the
            class, I signed up to get a tutor and he was so patient with me and
            we were able to set up a schedule and consistently met for 2 months.
            At the end of the 2 months I had a 96 in the class
          </p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Ashutosh K.</h3>
              <span style={styles.reviewOrigin}>
                Sophomore from North Carolina
              </span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}>
            First off, I would like to say that Silverline is overall a great
            program, the heads and the tutors are all really nice and respond
            quickly but the student community is great as well. I was able to
            talk to other kids my age and just create connections and more
            friends while also getting advice from the students who were in
            college. I really liked Silverline’s lectures and how informative
            they were. I was able to get all my questions about college answered
            by the guest speaker as well.
          </p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>John D.</h3>
              <span style={styles.reviewOrigin}>
                Former tutor from Pennsylvania
              </span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}>
            Silverline tutoring’s superior organization, resources, and
            dedication to providing students with worthwhile tutoring has
            allowed me as a tutor to both increase my tutoring skills and have
            fun making an impact in the world.
          </p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Beomjun Kim</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}>Supa helpful.</p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Sophia Zheng</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}>
            This is a very helpful organization that has truly met all my needs.
            I couldn't have asked for a better nonprofit to help with my
            homework and other tasks.
          </p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Rachel Moore</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}>
            Very helpful organization and would highly recommend!
          </p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Big Cheese</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Vishant R.</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}>
            I learned so much about AP Physics C from my tutor!
          </p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Vaibhav S</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}>
            I really liked this place, and all the tutors are super into what
            they do, kind, and hardworking!
          </p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Tanush Kaushik</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}>
            This place was great at tutoring me! I especially liked Madhav
            Jhawar's customer service and treated me extremely well. He's so
            caring to me.
          </p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Ashrit Anala</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}>Great Organization</p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Arayan Arora</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}>
            I love the quick response and quality for classes. Shout out to
            Tarun for his excellent service and guidance.
          </p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Jeevan Palani</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}>amazing!!!</p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Dedeep Surampudi</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}>
            I was surprised by how professional the company operated! All the
            staff is very kind and helpful.
          </p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Eristekad</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}>
            great people, very patient and very well informed.
          </p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Ariana Malik</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}>
            Amazing organization with a great cause!
          </p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>xX **** Xx</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}>
            This place raised my GPA almost a whole point :-)
          </p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Kaitz Tapia</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}>
            a great resource to get help with any kind of school work!!
          </p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Feesh</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}>
            Silver line has been very helpful for me, free, quick and good
            explanations. (A level maths help)
          </p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Keval Patel</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}>
            a great resource to get help with any kind of school work!!
          </p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Sultan Marketing</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Suchnoor Ahuja</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Ryan Sekelow</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Parv Paarikh</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Abdulkadir Husein</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Pranav Rajaram</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Anikait Singh</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Nathaniel LeBrun</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Tony Estafanous</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Samuel M</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Sidarth Krishna</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Big Cheese</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Madhav Jhawar</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Ankit Panda</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Shivam Shah</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Shivvani</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Hrithik Singhania</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Insert Joke</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Kevin Philip</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>

        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Mauro Daniel</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Pengion Star</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Ronak Patel</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Kevin Kwon</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Shruti Singh</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Nerds.</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Eduardo Beato</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Joshua Sneden</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>

        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Milan Behera</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Luke_B</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Luke DT</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Sara DeHaan</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Train the Rain</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>

        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Nolan Busa</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Mann Talati</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Ricky Touch</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Jeffery Chen</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>
        <div style={styles.review}>
          <div style={styles.reviewHeader}>
            <div>
              <h3 style={styles.reviewName}>Maya Aggarwal</h3>
              <span style={styles.reviewOrigin}>Google reviews user</span>
            </div>
            <div style={styles.reviewRating}>
              <span style={styles.star}>&nbsp;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
              <span style={styles.star}>&#9733;</span>
            </div>
          </div>
          <p style={styles.reviewContent}></p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Review;
