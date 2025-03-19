import React, { useState } from "react";
import { Add, Remove } from "@mui/icons-material";

// Define TypeScript types
interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How Are Player Rankings Calculated In Tennis?",
    answer:
      "Duis maecenas himenaeos malesuada vestibulum hendrerit dui sed. Primis erat nullam dignissim nunc maecenas nibh aenean, venenatis ante tempor convallis.",
  },
  {
    question: "Can I Bring Food Or Drinks To The Tennis Venue?",
    answer: "Check with the tournament guidelines, as policies vary for different events.",
  },
  {
    question: "What Is The Prize Money For The Tournament?",
    answer: "The prize pool is determined by sponsorships and event organization.",
  },
  {
    question: "Is There A Live-Stream Or Broadcast Of The Match?",
    answer: "Yes, live streaming is available on major sports networks and online platforms.",
  },
];

const faqsRight: FAQItem[] = [
  {
    question: "When And Where Are The Next Tennis Matches?",
    answer:
      "Sagittis libero amet sapien dis non vestibulum massa proin. Eros quam platea suscipit ex risus amet natoque tincidunt.",
  },
  {
    question: "What Are The Rules For Tie-Breaks In This Tournament?",
    answer: "Tie-breaks follow standard ATP/WTA rules with variations based on the tournament.",
  },
  {
    question: "When And Where Are The Next Tennis Matches?",
    answer: "Match schedules are updated regularly on the official tournament website.",
  },
];

const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white text-black py-16 px-6 max-w-6xl mx-auto">
      {/* Heading */}
      <div className="text-center">
        <p className="text-green-500 uppercase tracking-wide">Curious? Ask Away!</p>
        <h2 className="text-4xl font-bold mt-2">Questions? We've Got Answers</h2>
      </div>

      {/* FAQ Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 py-4">
              <button
                className="flex justify-between w-full text-left text-lg font-semibold"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                {openIndex === index ? <Remove /> : <Add />}
              </button>
              {openIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div>
          {faqsRight.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 py-4">
              <button
                className="flex justify-between w-full text-left text-lg font-semibold"
                onClick={() => toggleAccordion(index + faqs.length)}
              >
                {faq.question}
                {openIndex === index + faqs.length ? <Remove /> : <Add />}
              </button>
              {openIndex === index + faqs.length && <p className="mt-2 text-gray-600">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
