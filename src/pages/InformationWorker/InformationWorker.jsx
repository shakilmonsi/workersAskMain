import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { Link } from "react-router-dom";

const InformationWorker = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <div className="bg-red-600 px-6 py-3	sm:px-6 py-4">
        <h4 className="text-center  text-white  font-bold">
          শ্রমিকের আইনী তথ্য
        </h4>
      </div>
      <p className="py-3 px-2 font-bold text-center text-red-600	 text-xs sm:text-base	">
        নিচের বিভাগ গুলি থেকে প্রয়োজনীয়টি নির্বাচন করুন
      </p>

      <div className="px-1">
        <div className="relative  flex-col items-center w-full rounded-lg  flex justify-between">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="bg-amber-400	py-2 sm:py-4 w-full flex items-center flex  justify-between font-bold text-lg trackin-wider border-4 px-3
      border-transparent active:border-white duration-300 active:text-white "
          >
            <div>
              <p className="text-white font-bold  text-sm sm:text-base		">
                শ্রমিক সম্পর্কে
              </p>
            </div>
            <div>
              {!isOpen ? (
                <AiOutlineCaretDown className="font-bold text-white w-8 h-8"></AiOutlineCaretDown>
              ) : (
                <AiOutlineCaretUp className="font-bold text-white w-8 h-8"></AiOutlineCaretUp>
              )}
            </div>
          </button>

          {isOpen && (
            <div
              className="bg-cyan-600	 sm:py-6 py-4 absolute top-16 sm:top-20 flex flex-col items-start py-2 w-full 
          ps-3"
            >
              <Link to="/answerthequestion">
                <p className="text-white font-bold  text-sm sm:text-base		">
                  শ্রমিক ও শ্রমিকের প্রকারভেদ
                </p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InformationWorker;
