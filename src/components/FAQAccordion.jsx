import React, { useState, useRef } from "react";
// import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

 const faqs = [
  {
    question: "Do you offer organic products?",
    answer:
      "Yes! We have a wide range of organic fruits, vegetables, and other food items sourced from trusted suppliers.",
  },
  {
    question: "What are your delivery options?",
    answer:
      "We provide same-day and next-day delivery options within the city. Delivery charges may vary based on location.",
  },
  {
    question: "Can I return a product if I’m not satisfied?",
    answer:
      "Absolutely! If you are not satisfied with a product, please contact our support team within 24 hours for a return or replacement.",
  },
  {
    question: "How do I track my order?",
    answer:
      "After placing an order, you will receive a tracking link via email or SMS to monitor your delivery status in real-time.",
  },
  {
    question: "Do you have discounts or offers?",
    answer:
      "Yes! We regularly offer seasonal discounts and bundle deals. Keep an eye on our website or app for the latest promotions.",
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
      <h2 className="text-xl md:text-3xl lg:text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
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
