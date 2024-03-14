import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import { MdOutlineMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSync } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { BsCalculator, BsFillFileEarmarkMedicalFill } from "react-icons/bs";
import { FaHandHoldingMedical } from "react-icons/fa";
import { GiClawHammer } from "react-icons/gi";
import { TbBrandAppleArcade } from "react-icons/tb";
import { TbPhysotherapist } from "react-icons/tb";
import { SiGnuprivacyguard } from "react-icons/si";
import { CiSettings } from "react-icons/ci";
import { MdPhonelinkSetup } from "react-icons/md";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import { FaUserLock } from "react-icons/fa";

import { BiPlusMedical } from "react-icons/bi";
import { FcOvertime } from "react-icons/fc";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  //_________________ catagry section setup _____________________

  const [isOpen, setIsOpen] = useState(false);
  const naviget = useNavigate();

  const navigetCt = (link) => {
    naviget(`${link}`);
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  //_________________ catagry section setup _____________________

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  //____________________________workers ask ___________________________________

  //  {
  //   path:"yourask",
  //   element: <YourAsk></YourAsk>
  //   },
  //   {
  //   path:"InformationWorker",
  //   element:<InformationWorker></InformationWorker>
  //   },
  //   {
  //   path:"serviceAvailable",
  //   element:<ServiceAvailable></ServiceAvailable>
  //   },
  //   {
  //   path:"application",
  //   element:<Application></Application>
  //   },
  //   {
  //   path:"overThePhone",
  //   element:<OverThePhone></OverThePhone>
  //   },
  //   {
  //   path:"calculator",
  //   element:<Calculator></Calculator>
  //   },
  //   {
  //   path:"jobInformation",
  //   element:<JobInformation></JobInformation>
  //   },
  //   {
  //   path:"medicalServices",
  //   element:<MedicalServices></MedicalServices>
  //   },
  //   {
  //   path:"Others",
  //   element:<Others></Others>
  //   },

  const navOptions = (
    <>
      <li>
        <Link to="/">
       home 
        </Link>
      </li>
      {/* <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>
        <li><Link to="/secret">Secret</Link></li> */}

      <li>
        <Link to="overThePhone">
      
          ফোনে জিজ্ঞাসা
        </Link>
      </li>
      <li>
        <Link to="yourask" className="">
   
          আপনার জিজ্ঞাসা
        </Link>
      </li>

      <li>
        <Link to="application" className="">
      
          আবেদন
        </Link>
      </li>

      <li>
        <Link to="serviceAvailable" className="">
     
          সেবা কোথায় পাওয়া যায়
        </Link>
      </li>
      <li>
        <Link to="InformationWorker">
       
          শ্রমিকের আইনি তথ্য
        </Link>
      </li>

      <li>
        <Link to="jobInformation"></Link>
      </li>
      <li>
        <Link to="medicalServices">

          মেডিক্যাল সেবা
        </Link>
      </li>
      <li>
        <Link to="Others">
 
          অন্যান্য
        </Link>
      </li>
      <li>
        <Link to="Others">
          অপশনাল
        </Link>
      </li>

      {/* <li>
        <Link to="/">
      
          <FaSync className="font-bold w-4 h-4"></FaSync>Sync
        </Link>
      </li> */}
      {/* <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>
        <li><Link to="/secret">Secret</Link></li> */}

      {/* <li>
        <Link to="/order/salad">শ্রমিকের আইনি তথ্য</Link>
      </li>
      <li>
        <Link to="/menu">আপনার জিজ্ঞাসা</Link>
      </li>
      <li>
        <Link to="/order/salad">আবেদন</Link>
      </li>
      <li>
        <Link to="/secret">সেবা কোথায় পাওয়া যায়</Link>
      </li>
      <li>
        <Link to="/secret">ফোনে জিজ্ঞাসা</Link>
      </li> */}

      <hr></hr>

      {/* 
        <li>
            <Link to="/dashboard/cart">
                <button className="btn">
                    <FaShoppingCart className="mr-2"></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart.length}</div>
                </button>
            </Link>
        </li> */}
      {user ? (
        <>
          {/* <span>{user?.displayName}</span> */}
          <button onClick={handleLogOut} className="btn btn-ghost">
            LogOut
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">লগইন </Link>
          </li>
          {/* <li><Link to="/login">মোবাইল নাম্বার পরিবর্তন করুন</Link></li> */}
          {/* <li><Link to="/login">গুপনীয়তা সেটিং</Link></li>
                <li><Link to="/login"> সেটিং</Link></li>
                <li><Link to="/secret">কল্যাণ সুবিধা ক্যালকুলেটর</Link></li> */}
          {/* <li><Link to="/secret">ওভারটাইম ও প্রসূতি</Link></li> */}
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar  z-10  bg-red-500  max-w-screen-xl bg-black ">
        <div className="navbar-start">
          <div className="dropdown" onClick={toggleMenu}>
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content p-2 shadow bg-base-100 rounded-box w-60	 text-xs  font-bold	"
            >
              {isOpen && (
                <div className=" navbar-start z-10 w-64 bg-white	  rounded-lg shadow-lg">
                  <ul>
                    <div className="bg-red-900 ">
                      <li>
                        <Link className="font-bold text-xs	 text-white " to="/">
                          {" "}
                          <MdOutlineMessage className="text-white font-bold w-6 h-5"></MdOutlineMessage>
                          সহায়তা ভাতা পরিবর্তন করুন
                        </Link>
                      </li>
                      <li>
                        <Link className="font-bold text-xs	text-white " to="/">
                          <FaPhoneAlt className="text-white font-bole w-6 h-7"></FaPhoneAlt>
                          জরুরী নম্বর পরিবর্তন করুন
                        </Link>
                      </li>
                    </div>
                    <li className=" px-4 hover:bg-green-900">
                      <div onClick={() => navigetCt("/")}>
                        <FaSync className="font-bold w-4 h-4"></FaSync>Sync
                      </div>
                    </li>
                    <li className="px-4 hover:bg-green-900">
                      <div onClick={() => navigetCt("/yourask")}>
                        <FaQuestion className="font-bold h-5 w-4 "></FaQuestion>
                        আপনার জিজ্ঞাসা
                      </div>
                    </li>

                    <li className=" px-4 hover:bg-green-900">
                      <div onClick={() => navigetCt("/InformationWorker")}>
                        <GiClawHammer className="font-bold h-5 w-4"></GiClawHammer>
                        শ্রমিকের আইনি তথ্য
                      </div>
                    </li>

                    <li className="py-2 px-4 hover:bg-green-900">
                      <div onClick={() => navigetCt("/serviceAvailable")}>
                        <FaHandHoldingMedical className="font-bold h-5 w-4 "></FaHandHoldingMedical>
                        সেবা কোথায় পাওয়া যায়
                      </div>
                    </li>

                    <li className=" px-4 hover:bg-green-900">
                      <div onClick={() => navigetCt("/application")}>
                        <BsFillFileEarmarkMedicalFill className="font-bold h-5 w-4 "></BsFillFileEarmarkMedicalFill>
                        আবেদন
                      </div>
                    </li>

                    <li className="px-4 hover:bg-green-900">
                      <div onClick={() => navigetCt("/overThePhone")}>
                        <FaPhoneAlt className="font-bold w-4 h-5"></FaPhoneAlt>
                        ফোনে জিজ্ঞাসা
                      </div>
                    </li>

                    <li className=" px-4 hover:bg-green-900">
                      <div onClick={() => navigetCt("/jobInformation")}>
                        <TbBrandAppleArcade className="font-bold h-5 w-4"></TbBrandAppleArcade>
                        চাকরির তথ্য
                      </div>
                    </li>

                    <li className="px-4 hover:bg-green-900">
                      <div onClick={() => navigetCt("/medicalServices")}>
                        <BiPlusMedical className="font-bold h-5 w-4"></BiPlusMedical>
                        মেডিক্যাল সেবা
                      </div>
                    </li>

                    <li className=" px-4 hover:bg-green-900">
                      <div onClick={() => navigetCt("/Others")}>
                        <TbPhysotherapist className="font-bold h-5 w-4"></TbPhysotherapist>
                        অন্যান্য{" "}
                      </div>
                    </li>

                    <li className=" px-4 hover:bg-green-900">
                      <div onClick={() => navigetCt("/Others")}>
                        <TbPhysotherapist className="font-bold h-5 w-4"></TbPhysotherapist>
                        অন্যান্য
                      </div>
                    </li>
                    <hr></hr>
                    <p className="ps-4">অন্যান্য</p>

                    <li className=" px-4 hover:bg-green-900">
                      <div onClick={() => navigetCt("/signup")}>
                        <RiGitRepositoryPrivateFill className="w-4 h-5 font-bold "></RiGitRepositoryPrivateFill >

              সাইন আপ
                      </div>
                    </li>

                    <li className=" px-4 hover:bg-green-900">
                      <div onClick={() => navigetCt("/login")}>
                        <FaUserLock className="w-4 h-5 font-bold "></FaUserLock >

              লগইন
                      </div>
                    </li>

                    <li className=" px-4 hover:bg-green-900">
                      <div onClick={() => navigetCt("/changenumer")}>
                        <MdPhonelinkSetup className="w-4 h-5 font-bold "></MdPhonelinkSetup>
                        মোবাইল নম্বর পরিবর্তন করুন
                      </div>
                    </li>

                    <li className=" px-4 hover:bg-green-900">
                      <div onClick={() => navigetCt("/")}>
                        <CiSettings className="w-4 h-5 font-bold "></CiSettings>
                        সেটিং
                      </div>
                    </li>

                    <li className=" px-4 hover:bg-green-900">
                      <div onClick={() => navigetCt("/confidentiality")}>
                        <SiGnuprivacyguard className="w-4 h-5 font-bold "></SiGnuprivacyguard>
                        গোপনীয়তা নীতি
                      </div>
                    </li>

                    <li className=" px-4 hover:bg-green-900">
                      <div onClick={() => navigetCt("/calculator")}>
                        <BsCalculator className="w-4 h-5 font-bold "></BsCalculator>
                        কল্যাণ সুবিধা ক্যালকুলেটর
                      </div>
                    </li>

                    <li className=" px-4 hover:bg-green-900">
                      <div onClick={() => navigetCt("/overtime")}>
                        <FcOvertime className="w-4 h-4  font-bold "></FcOvertime>
                        ওভারটাইম ও প্রসূতি
                      </div>
                    </li>

                 
                  </ul>

                
                </div>
              )}
            </ul>
          </div>
          <Link className="text-white font-bold text-sm" to="/">শ্রমিক সেবা </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-bold  text-xs text-white">
            
            {navOptions}
          
          </ul>
        </div>
        <div className="navbar-end">
          {/* <a className="btn">Get started</a> */}
        </div>
      </div>
    </>
  );
};

export default NavBar;
