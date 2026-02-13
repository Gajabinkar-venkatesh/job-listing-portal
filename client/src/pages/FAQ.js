import React, { useState } from "react";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I apply for a job?",
      answer: "Login as Job Seeker → Click Apply on any job → Done."
    },
    {
      question: "How can employers post jobs?",
      answer: "Login as Employer → Go to Dashboard → Click Post Job."
    },
    {
      question: "Is registration free?",
      answer: "Yes, both job seekers and employers can register for free."
    },
    {
      question: "Can I edit my profile?",
      answer: "Yes, you can update your profile from the Profile section."
    }
  ];

  return (
    <div style={styles.container}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        Frequently Asked Questions
      </h1>

      {faqs.map((faq, index) => (
        <div key={index} style={styles.card}>
          <div
            style={styles.question}
            onClick={() => toggle(index)}
          >
            {faq.question}
          </div>
          {open === index && (
            <div style={styles.answer}>{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    padding: "60px 15%",
    backgroundColor: "#f1f3f6",
    minHeight: "90vh",
  },
  card: {
    background: "white",
    marginBottom: "15px",
    borderRadius: "8px",
    boxShadow: "0 3px 8px rgba(0,0,0,0.05)",
  },
  question: {
    padding: "15px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  answer: {
    padding: "15px",
    borderTop: "1px solid #eee",
  },
};

export default FAQ;
