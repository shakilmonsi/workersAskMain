import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { Link } from "react-router-dom";

const AnswerTheQuestion = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <div className="bg-red-600 px-6 py-3	sm:px-6 py-4">
        <h4 className="text-center  text-white  text-sm sm:text-xl font-bold">প্রশ্ন উত্তর</h4>
      </div>
      <div className="px-1">
        <div className="py-3">
          <div className="bg-sky-600	 py-4 ">
            <p className="text-white font-bold  text-center text-xs sm:text-base	">
              শ্রমিক ও শ্রমিকের প্রকারভেদ | প্রশ্ন উত্তর
            </p>
          </div>
        </div>

        <div className="relative  flex-col items-center w-full rounded-lg  flex justify-between">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="	py-2 sm:py-4 w-full flex items-center flex  justify-between font-bold text-lg trackin-wider border-4 px-3
      border-transparent active:border-white duration-300 active:text-white "  style={{backgroundColor:"#01C3AE"}}
          >
            <div>
              <p className="text-white font-bold  text-sm sm:text-base		">
                কিশোর শ্রমিক কে
              </p>
            </div>
            <div>
              {!isOpen ? (
                <AiOutlineCaretDown className="font-bold text-white w-10 h-10"></AiOutlineCaretDown>
              ) : (
                <AiOutlineCaretUp className="font-bold text-white w-10 h-10"></AiOutlineCaretUp>
              )}
            </div>
          </button>

          {isOpen && (
            <div
              className="bg-neutral-200		 sm:py-6 py-4 absolute top-[70px] sm:top-[90px] flex flex-col items-start py-2 w-full 
          ps-2"
            >
              <Link to="/answerthequestion">
                <p className=" font-bold  text-xs sm:text-base		">
                  যে শ্রমিকের বয়স ১৪ বছর কিন্তু ১৮ বছরের বেশি নয় তাকে কিছু
                  শ্রমিক বলে
                </p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnswerTheQuestion;
