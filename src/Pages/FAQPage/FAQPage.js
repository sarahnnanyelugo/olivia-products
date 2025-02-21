import React from "react";
import "./faq-page.scss";
import { IoSearch } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import AskQuestion from "./AskQuestion";
import Questions from "./Questions";
const faqs = [
  {
    question: "How can I track my order?",
    answer:
      "You will receive a tracking number via email once your order ships.",
    bg1: "#F2E7FF",
  },
  {
    question: "What is your return policy?",
    answer: "Our return policy lasts 30 days with a full refund.",
    bg1: "#DEEAFF",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to over 50 countries worldwide.",
    bg1: "#FFF2DF",
  },
  {
    question: "How can I track my order?",
    answer:
      "You will receive a tracking number via email once your order ships.",
    bg1: "#F2E7FF",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to over 50 countries worldwide.",
    bg1: "#FFF2DF",
  },
  {
    question: "What is your return policy?",
    answer: "Our return policy lasts 30 days with a full refund.",
    bg1: "#DEEAFF",
  },
  {
    question: "How can I track my order?",
    answer:
      "You will receive a tracking number via email once your order ships.",
    bg1: "#F2E7FF",
  },
  {
    question: "What is your return policy?",
    answer: "Our return policy lasts 30 days with a full refund.",
    bg1: "#C0BFFF",
  },
  {
    question: "What is your return policy?",
    answer: "Our return policy lasts 30 days with a full refund.",
    bg1: "#DEEAFF",
  },
  {
    question: "What is your return policy?",
    answer: "Our return policy lasts 30 days with a full refund.",
    bg1: "#C0BFFF",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to over 50 countries worldwide.",
    bg1: "#FFF2DF",
  },
];
export const FAQPage = () => {
  return (
    <>
      <div className="faq-div ">
        <div className="faq-banner d-md-flex">
          <div className="col-md-8">
            <h1>
              Looking for help? Here are our most frequently asked questions.
            </h1>
            <p>
              Everything you need to know about Olivia Products. Can't find the
              answer to a question you have? No worries, just click "I have got
              a question" or "Chat with our team!"
            </p>
          </div>
          <div className=" offset-md-1 col-md-3 input-divd d-flex">
            <IoSearch className="icon" />

            <input type="search" placeholder="Search" />
          </div>
        </div>
        <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3">
          <div className="col">
            {" "}
            <AskQuestion />
          </div>
          <div className="col">
            {" "}
            <div className="d-flex question-btn box-2">
              <a style={{ flexGrow: "1" }}>Chat to our team</a>
              <span>
                <FaArrowRight className="icon" />
              </span>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-lg-4 g-2 g-lg-3 mt-5">
          {faqs.map((faq, index) => (
            <Questions
              key={index}
              question={faq.question}
              answer={faq.answer}
              bg1={faq.bg1}
            />
          ))}
        </div>
      </div>
    </>
  );
};
