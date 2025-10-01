import React, { useState, useRef } from "react";
// import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const faqs = [
  {
    question: "Do plumbers deal with heating?",
    answer:
      "Some of our local plumbers are also gas registered and experienced working on heating systems, bathrooms and kitchens.",
  },
  {
    question: "Do you charge a call out fee?",
    answer: "No, we do not charge a call out fee.",
  },
  {
    question: "How quickly can your company send out an engineer?",
    answer: "We usually send out an engineer within 24 hours.",
  },
  {
    question: "What should I do if I get a water leak?",
    answer: "Turn off the main water supply and call us immediately.",
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-xl md:text-3xl lg:text-3xl font-bold text-center mb-6">Frequently Asked Questionsssssssss</h2>
      <div className="rounded-lg divide-y divide-pink-500">
        {faqs.map((faq, index) => (
          <div key={index} className="p-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left font-semibold"
            >
              {faq.question}
              {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>

            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className={`overflow-hidden transition-all duration-500 ease-in-out`}
              style={{
                maxHeight:
                  openIndex === index
                    ? contentRefs.current[index]?.scrollHeight + "px"
                    : "0px",
              }}
            >
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
