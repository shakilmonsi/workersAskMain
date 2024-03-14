import { GoLaw } from "react-icons/go";
import { Link } from "react-router-dom";
import { MdOutlineQuestionMark } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BsCalculator } from "react-icons/bs";
import { FcOvertime } from "react-icons/fc";
import { FaHandHoldingMedical } from "react-icons/fa";
import { BsFillFileEarmarkMedicalFill } from "react-icons/bs";
import { BiPlusMedical } from "react-icons/bi";
import { TbPhysotherapist } from "react-icons/tb";

import jobs from "../../assets/pagelogo/jobs.png";

const HomePage = () => {
  return (
    <div className="grid grid-cols-2  lg:grid-cols-4 md:grid-cols-3 ">
      <Link to="yourask">
        <div className="bg-lime-950 hover:bg-cyan-600 w-48  h-44 sm:w-96 sm:h-52  ">
          <div className="flex items-center">
            <div className="">
              <MdOutlineQuestionMark className="w-16 h-16 text-white font-bold mt-14 ps-6"></MdOutlineQuestionMark>
            </div>
            <div>
              <h4 className="text-center text-white  font-bold  mt-14 pr-10">
                আপনার জিজ্ঞাসা
              </h4>
            </div>
          </div>
        </div>
      </Link>

      <Link to="InformationWorker">
        <div className="bg-lime-500		hover:bg-cyan-600 w-48  h-44 sm:w-96 sm:h-52">
          <div className="flex items-cente">
            <div className="pr-1">
              <GoLaw className="w-12 h-12 text-white font-bold mt-16 ps-4"></GoLaw>
            </div>
            <div>
              <h4 className="text-center text-white  font-bold  mt-16 pr-4">
                শ্রমিকের আইনি তথ্য
              </h4>
            </div>
          </div>
        </div>
      </Link>

      <Link to="serviceAvailable">
        <div
          className=" w-48  h-44 sm:w-96 sm:h-52"
          style={{ backgroundColor: "#3f6cb0" }}
        >
          <div className="flex items-center ms-2 ">
            <div className="">
              <FaHandHoldingMedical className="w-14 h-14 text-white font-bold mt-14 mr-4 ps-3"></FaHandHoldingMedical>
            </div>
            <div>
              <p className="text-white font-bold mt-14 pr-3">
                সেবা কোথায় পাওয়া যায়
              </p>
            </div>
          </div>
        </div>
      </Link>

      <Link to="application">
        <div className="bg-green-900  w-48  h-44 sm:w-96 sm:h-52">
          <div className="flex items-center ms-6 ">
            <div className="">
              <BsFillFileEarmarkMedicalFill className="w-14 h-14 text-white font-bold mt-14 ">
                {" "}
              </BsFillFileEarmarkMedicalFill>
            </div>
            <div>
              <h5 className="text-white font-bold mt-14 ">আবেদন</h5>
            </div>
          </div>
        </div>
      </Link>

      <Link to="overThePhone">
        <div className="bg-fuchsia-950	w-48  h-44 sm:w-96 sm:h-52">
          <div className="flex items-center">
            <div className="">
              <FaPhoneAlt className="w-12  text-white font-bold  h-12 mt-14 ms-6"></FaPhoneAlt>
            </div>
            <div>
              <h4 className="text-center text-white  font-bold mt-14 mr-4">
                ফোনে জিজ্ঞাসা
              </h4>
            </div>
          </div>
        </div>
      </Link>

     

      <Link to="jobInformation">
        <div className="bg-blue-950	  items-cente w-48  h-44 sm:w-96 sm:h-52	">
          <div className="flex items-center ">
            <div className="">
              <img
                className="w-20 h-20 text-white font-bold mt-12 ms-5"
                src={jobs}
                alt="jobs"
              ></img>
            </div>
            <div>
              <h4 className="text-center text-white  font-bold mt-12 mr-8">
                চাকরির তথ্য
              </h4>
            </div>
          </div>
        </div>
      </Link>

      <Link to="medicalServices">
        <div className=" bg-amber-600 items-cente  w-48  h-44 sm:w-96 sm:h-52">
          <div className="flex items-center p-7">
            <div className="pr-3">
              <BiPlusMedical className="w-12  text-white font-bold  h-12 mt-12 "></BiPlusMedical>
            </div>
            <div>
              <h4 className="text-center text-white  font-bold mt-12 mr-12">
                মেডিক্যাল সেবা
              </h4>
            </div>
          </div>
        </div>
      </Link>

      <Link to="others">
        <div className=" bg-rose-950	items-cente  w-48  h-44 sm:w-96 sm:h-52">
          <div className="flex items-center p-7">
            <div className="pr-3">
              <TbPhysotherapist className="w-12  text-white font-bold  h-12 mt-10"></TbPhysotherapist>
            </div>
            <div>
              <h4 className="text-center text-white  font-bold mt-10 mr-8">
                অন্যান্য
              </h4>
            </div>
          </div>
        </div>
      </Link>

      <Link to="others">
        <div className=" bg-indigo-800	items-cente  w-48  h-44 sm:w-96 sm:h-52">
          <div className="flex items-center p-7">
            <div className="pr-3">
              <TbPhysotherapist className="w-12  text-white font-bold  h-12 mt-10"></TbPhysotherapist>
            </div>
            <div>
              <h4 className="text-center text-white  font-bold mt-10 mr-8">
                অপশনাল
              </h4>
            </div>
          </div>
        </div>
      </Link>

      <Link to="calculator">
        <div className="bg-gradient-to-r from-yellow-100 to-teal-400 bg-opacity-25  	w-48  h-44 sm:w-96 sm:h-52	">
          <div className=" items-center ">
            <div className="flex   items-center pr-3 gap-2 ml-12 ">
              <FcOvertime className="w-7 h-7 text-white font-bold mt-6"></FcOvertime>
              <BsCalculator className="w-7 h-7 text-white font-bold mt-6"></BsCalculator>
            </div>
            <div className="py-2">
              <p className="text-center text-white  font-bold">
                কল্যাণ সুবিধা ক্যালকুলেটর
              </p>
              <p className="text-center text-white  font-bold">
                ওভারটাইম ও প্রসূতি{" "}
              </p>
            </div>
          </div>
        </div>
      </Link>


    </div>
  );
};

export default HomePage;
