import { useCallback, useRef, useState } from "react";
import { FiDelete } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addFaq, removeFaq } from "@/app/redux/features/courses/courseFaq";
import { Button } from "@mui/material";
import { BiPlusCircle, BiPulse } from "react-icons/bi";
import { IoMdPulse } from "react-icons/io";

const CourseFaq = () => {
  const [showFaqForm, setShowFaqForm] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const { courseFaq } = useSelector((state) => state);
  const dispatch = useDispatch();

  const faqQueEnRef = useRef(null);
  const faqAnsEnRef = useRef(null);
  const faqQueBnRef = useRef(null);
  const faqAnsBnRef = useRef(null);

  // Add FAQ in the faq slice one by one
  const handleFaq = useCallback(() => {
    // create a date object like what backend data wants
    const faqData = {
      question: {
        en: faqQueEnRef.current?.value,
        bn: faqQueBnRef.current?.value,
      },
      answer: {
        en: faqAnsEnRef.current?.value,
        bn: faqAnsBnRef.current?.value,
      },
    };

    // Add the new FAQ to the state
    dispatch(addFaq(faqData));

    // Reset the input fields
    // clearInputs();

    // hide again form
    setShowFaqForm(false);
  }, []);

  const clearInputs = () => {
    if (faqQueEnRef.current) faqQueEnRef.current.value = "";
    if (faqQueBnRef.current) faqQueBnRef.current.value = "";
    if (faqAnsEnRef.current) faqAnsEnRef.current.value = "";
    if (faqAnsBnRef.current) faqAnsBnRef.current.value = "";
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div>
        {/* Faq Form  */}
        {!showFaqForm ? (
          courseFaq?.length <= 0 ? (
            <Button
              className="bg-slate-500 px-10 py-2 text-white"
              variant="outlined"
              onClick={() => setShowFaqForm(true)}
            >
              Add Faq <BiPlusCircle className="ml-2" />
            </Button>
          ) : (
            <Button variant="outlined" onClick={() => setShowFaqForm(true)}>
              Add Another Faq <BiPlusCircle className="ml-2" />
            </Button>
          )
        ) : (
          <div className="flex flex-col gap-5">
            <div>
              <h5 className="mb-3">English Faq's</h5>
              <div className="flex flex-col gap-5">
                <input
                  ref={faqQueEnRef}
                  name={"faqQueEnRef"}
                  placeholder="Please enter your question"
                  className="border w-full px-5 py-3"
                  type={"text"}
                />

                <textarea
                  ref={faqAnsEnRef}
                  name="faqAnsEnRef"
                  rows={"5"}
                  placeholder="Enter Your Description"
                  className={`border w-full px-3 py-2 border-gray-300`}
                />
              </div>
            </div>

            <div>
              <h5 className="mb-3">বাংলায় প্রশ্নউত্তর</h5>
              <div className="flex flex-col gap-5">
                <input
                  ref={faqQueBnRef}
                  name={"faqQueBnRef"}
                  placeholder="বাংলায় আপনার প্রস্ন লিখুন"
                  className="border w-full px-5 py-3"
                  type={"text"}
                />

                <textarea
                  ref={faqAnsBnRef}
                  name="faqAnsBnRef"
                  rows={"5"}
                  placeholder="বাংলায় প্রশ্নের উত্তর লিখুন"
                  className={`border w-full px-3 py-2 border-gray-300`}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleFaq}
                className="bg-accent text-white p-3 px-10"
              >
                Add
              </button>
            </div>
          </div>
        )}

        {/* Show Faq Visually  */}
        {/* Display Faq with answear  */}
        <div className="mt-5">
          {courseFaq.length !== 0 && (
            <div>
              <h4>Faq's</h4>
              {courseFaq?.map((faq, index) => {
                console.log(faq.question);
                return (
                  <ol key={index}>
                    <li
                      onClick={() => toggleAccordion(index)}
                      className="w-full p-4 bg-slate-700 my-2 text-white rounded-md cursor-pointer"
                    >
                      <div className="flex justify-between">
                        <span className="text-lg font-bold">
                          {faq?.question?.en}
                          <sm className="text-sm font-thin">
                            {" "}
                            - ({faq?.question?.bn})
                          </sm>
                        </span>

                        <span
                          onClick={() => dispatch(removeFaq(faq))}
                          className="text-lg font-boldflex flex-col justify-center items-center bg-slate-500 p-2 rounded-full cursor-pointer"
                        >
                          <FiDelete />
                        </span>
                      </div>
                      {openIndex === index && (
                        <div className="px-4 pt-4">
                          <h5 className="text-sm text-white mt-5">
                            English Answer: -
                          </h5>
                          <p className="font-extralight">{faq.answer.en}</p>
                          <h5 className="text-sm text-white mt-5">
                            বাংল উত্তর: -
                          </h5>
                          <p>{faq.answer.bn}</p>
                        </div>
                      )}
                    </li>
                  </ol>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CourseFaq;
