import React from 'react';
import {Helmet} from 'react-helmet';

  const Services = () => {
  return (
    <div>
      <Helmet>
        <title>Services | Silverline Tutoring</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Find the numerous services Silverline Tutoring offers from tutoring to lectures!"
        />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <meta httpEquiv="content-language" content="en-us" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />

        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=DM+Sans:wght@500&family=Hammersmith+One&family=Open+Sans:wght@400;800&family=Poppins:wght@500&family=Raleway:wght@900&family=Roboto:wght@900&family=Work+Sans:wght@700&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="fonts/icomoon/style.css" />
        <link rel="stylesheet" href="fonts/flaticon/font/flaticon.css" />

        <link rel="stylesheet" href="css/tiny-slider.css" />
        <link rel="stylesheet" href="css/flaticon.css" />
        <link rel="stylesheet" href="css/aos.css" />
        <link rel="stylesheet" href="css/flatpickr.min.css" />
        <link rel="stylesheet" href="css/glightbox.min.css" />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="css/fontawesome/webfonts/." />
        <link
          rel="icon"
          type="image/x-icon"
          href="images/icon.svg"
        />
      </Helmet>
      <h1>Our Services</h1>
      <div>
        <img src="https://silverlinetutoring.org/wp-content/uploads/2022/01/tutoring-services.jpg" alt="Tutoring Services" />
      </div>
      <p>
        At Silverline Tutoring, we offer a wide range of educational services to help students excel in their academic journey.
        Whether your child needs assistance with homework, test preparation, or enrichment programs, our experienced tutors are here to help.
      </p>
      <p>
        Our services include:
        <li>One-on-one tutoring sessions tailored to your child's needs</li>
        <li>Group tutoring for collaborative learning</li>
        <li>Test preparation for standardized exams</li>
        <li>Subject-specific tutoring in math, science, English, and more</li>
        <li>College application and essay guidance</li>
        <li>Study skills development</li>
        <li>Homework help and academic support</li>
        <li>Summer programs and academic camps</li>
      </p>
      <p>
        We believe in personalized attention and a nurturing environment to ensure your child's success.
        Our tutors are highly qualified and dedicated professionals who are passionate about education.
        We strive to create a positive and engaging learning experience for every student.
      </p>
      <p>
        Contact us today to learn more about our services and how we can help your child achieve their academic goals.
      </p>
    </div>
  );
};

export default Services;
