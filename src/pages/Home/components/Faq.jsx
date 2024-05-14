// Component Imports
import { Accordion } from "./Accordion";

export const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: "Why should I use CodeBook?",
      answer:
        "Learn Nest offers a user-friendly interface, robust features, and a vast library of coding resources, making it an ideal platform for both beginners and experienced developers.",
    },
    {
      id: 2,
      question: "Can I access my eBook on mobile?",
      answer:
        "Absolutely! Learn Nest provides seamless mobile access, allowing you to learn and reference your eBooks conveniently from your mobile device anytime, anywhere.",
    },
    {
      id: 3,
      question: "Do you offer refunds?",
      answer:
        "Yes, we have a refund policy. If you are not satisfied with your purchase, you can request a refund within a specified period. Check our refund policy for more details.",
    },
    {
      id: 4,
      question: "Do you support Internation payments?",
      answer:
        "Yes, Learn Nest supports international payments. We accept a variety of payment methods to ensure a smooth and secure transaction process for users around the world.",
    },
  ];

  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">
        Questions in mind?
      </h1>
      <div
        className=""
        id="accordion-flush"
        data-accordion="collapse"
        data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        data-inactive-classes="text-gray-500 dark:text-gray-400"
      >
        {faqs.map((faq) => (
          <Accordion key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
};
