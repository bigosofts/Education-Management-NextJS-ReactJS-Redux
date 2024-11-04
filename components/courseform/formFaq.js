import { useCallback, useRef, useState } from "react";
import { FiDelete } from "react-icons/fi";

const CourseFaq = () => {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const faqQueRef = useRef(null);
  const faqAnsRef = useRef(null);

  const handleFaq = useCallback(() => {
    const faq = {
      que: faqQueRef.current.value,
      ans: faqAnsRef.current.value,
    };

    setFaqs((pre) => [faq, ...pre]);
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleRemove = (faq) => {
    setFaqs((prev) => prev.filter(currentFaq => currentFaq.que !== faq.que));
  };
  

  return (
    <>
      <div>

        {/* Display Faq with answear  */}
        {faqs.length !== 0 &&
          faqs?.map((faq, index) => {
            return (
              <ol>
                <li
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-4 bg-slate-700 my-2 text-white rounded-md cursor-pointer"
                >
                  <div className="flex justify-between">
                    <span className="text-lg font-bold">{faq.que}</span>

                    <span
                      onClick={() => handleRemove(faq)}
                      className="text-lg font-boldflex flex-col justify-center items-center bg-slate-500 p-2 rounded-full"
                    >
                      <FiDelete />
                    </span>
                  </div>
                  {openIndex === index && (
                    <div className="px-4 pt-4">
                      <p>{faq.ans}</p>
                    </div>
                  )}
                </li>
              </ol>
            );
          })}

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <input
              ref={faqQueRef}
              type="text"
              name="name"
              id="name"
              placeholder="Please enter your quetion"
              className="p-4"
            />
            <textarea
              ref={faqAnsRef}
              className="p-5"
              placeholder="Enter Answar here"
              name="ans"
              id="ans"
              rows={"5"}
            ></textarea>
          </div>
          <button onClick={handleFaq} className="bg-slate-300 p-3">
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default CourseFaq;
