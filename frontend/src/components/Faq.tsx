import React from "react";
import { useTheme } from "./ThemeContext";

interface QuestionAnswer {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const styles: { [key: string]: React.CSSProperties } = {
    faqheaderDark: {
      color: "white",
      fontWeight: 600,
    },
    faqheaderLight: {
      color: "black",
      fontWeight: 600,
    },
    faqtextDark: {
      color: "#d6d3cd",
    },
    faqtextLight: {
      color: "#181a1b",
    },
    faqbgDark: {
      backgroundColor: "#181a1b",
    },
    faqbgLight: {
      backgroundColor: "#d6d3cd",
    },
    faqContainer: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#181A1B",
    },
    faqText: {
      flex: "1",
      padding: "40px",
      fontSize: "1.1rem",
      fontWeight: "200",
      color: "#EAEAEA",
      marginRight: "50px",
    },
    faqSubHeader: {
      fontSize: "18px",
      textTransform: "uppercase",
      color: "#918CA1",
      fontWeight: "700",
      marginBottom: "20px",
    },
    faqHeader: {
      fontSize: "46px",
      fontWeight: "bold",
      color: "white",
      marginBottom: "30px",
    },
    faqQuestionStyle: {
      marginBottom: "15px",
    },
    faqAnswerStyle: {
      marginBottom: "30px",
    },
  };

  const faqs: QuestionAnswer[] = [
    {
      question: "1. How do I signup for tutoring?",
      answer:
        'Fill out the <a href="./getinvolved">student form</a> located under "get involved," and feel free to join our Discord server to learn more.',
    },
    {
      question: "2. Where does tutoring happen?",
      answer:
        "Tutoring sessions take place online and can be conducted through zoom or other video conference platforms. If you are a member of our Discord server, the voice channel feature will often be used by our tutors.",
    },
    {
      question: "3. Do I have to pay for tutoring?",
      answer:
        "No! Silverline is a nonprofit dedicated to ensuring that students receive tutoring for free. Tutors earn volunteer hours in exchange for their help. However, students can earn from our program as we often host trivia nights with a cash prize thanks to our sponsors.",
    },
    {
      question: "4. How do I signup to be a tutor?",
      answer:
        'Fill out the <a href="./getinvolved">tutor form</a> located under "get involved," and we will reach out to you. Be prepared to answer questions during an interview as well as a short 5-10 minute lesson to demonstrate your skills in teaching. Afterwards, we will determine if you are suited to teach and the specific subjects.',
    },
    {
      question: "5. What is the experience of the tutors?",
      answer:
        "Most of our tutors are high school seniors or college students. However, some of our tutors are teachers or former teachers. Regardless of the tutor, we guarantee that all of our tutors are qualified.",
    },
    {
      question: "6. Who runs Silverline Educational Advisory Services?",
      answer:
        'Silverline Educational Advisory Services is run by high schoolers and college students. Our full team can be found <a href="./team">here</a>.',
    },
  ];

  return (
    <div style={styles.faqContainer}
    className={`section ${
      theme === "dark" ? styles.bgDark : styles.bgLight
      }`}>
      <div className="container" style={styles.faqText}>
        <h1 className={`title ${
							theme === "dark"
								? styles.headerDark
								: styles.headerLight
						}`}
            data-aos="fade-up" 
            style={styles.faqHeader}>
          Frequently Asked Questions
        </h1>
        <h2
          className={`sub-heading ${
            theme === "dark"
              ? styles.headerDark
              : styles.headerLight
          }`}
          data-aos="fade-up"
          data-aos-delay="100"
          style={styles.faqSubHeader}
        >
          {/* Add sub-heading text here if necessary */}
        </h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={200 * (index + 1)}
          >
            <h3 className={`question ${
							theme === "dark"
								? styles.headerDark
								: styles.headerLight
						}`}
            style={styles.faqQuestionStyle}>
              {faq.question}
            </h3>
            <p
              className={`answer ${
                theme === "dark"
                  ? styles.headerDark
                  : styles.headerLight
              }`}
              data-testid="faq-answer"
              style={styles.faqAnswerStyle}
              dangerouslySetInnerHTML={{ __html: faq.answer }}
            ></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
