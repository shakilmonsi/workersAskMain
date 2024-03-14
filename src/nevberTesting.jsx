import React from 'react';

function nevberTesting(props) {
    
  const navOptions = (
    <>
      <li>
        <Link to="/">
          <FaSync className="font-bold w-4 h-4"></FaSync>Sync
        </Link>
      </li>
      {/* <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>
        <li><Link to="/secret">Secret</Link></li> */}

      <li>
        <Link to="overThePhone">
          <FaPhoneAlt className="font-bold w-4 h-5"></FaPhoneAlt>
          ফোনে জিজ্ঞাসা
        </Link>
      </li>
      <li>
        <Link to="yourask" className="">
          <FaQuestion className="font-bold h-5 w-4 "></FaQuestion>
          আপনার জিজ্ঞাসা
        </Link>
      </li>

      <li>
        <Link to="application" className="">
          <BsFillFileEarmarkMedicalFill className="font-bold h-5 w-4 "></BsFillFileEarmarkMedicalFill>
          আবেদন
        </Link>
      </li>

      <li>
        <Link to="serviceAvailable" className="">
          <FaHandHoldingMedical className="font-bold h-5 w-4 "></FaHandHoldingMedical>
          সেবা কোথায় পাওয়া যায়
        </Link>
      </li>
      <li>
        <Link to="InformationWorker">
          <GiClawHammer className="font-bold h-5 w-4"></GiClawHammer>
          শ্রমিকের আইনি তথ্য
        </Link>
      </li>

      <li>
        <Link to="jobInformation">
          <TbBrandAppleArcade className="font-bold h-5 w-4"></TbBrandAppleArcade>
          চাকরির তথ্য
        </Link>
      </li>
      <li>
        <Link to="medicalServices">
          <BiPlusMedical className="font-bold h-5 w-4"></BiPlusMedical>
          মেডিক্যাল সেবা
        </Link>
      </li>
      <li>
        <Link to="Others">
          <TbPhysotherapist className="font-bold h-5 w-4"></TbPhysotherapist>
          অন্যান্য
        </Link>
      </li>
      <li>
        <Link to="Others">
          <TbPhysotherapist className="font-bold h-5 w-4"></TbPhysotherapist>
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
        <div>
            
        </div>
    );
}

export default nevberTesting;




import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import { MdOutlineMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSync } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { BsFillFileEarmarkMedicalFill } from "react-icons/bs";
import { FaHandHoldingMedical } from "react-icons/fa";
import { GiClawHammer } from "react-icons/gi";
import { TbBrandAppleArcade } from "react-icons/tb";
import { TbPhysotherapist } from "react-icons/tb";

import { BiPlusMedical } from "react-icons/bi";

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
          <FaSync className="font-bold w-4 h-4"></FaSync>Sync
        </Link>
      </li>
      {/* <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>
        <li><Link to="/secret">Secret</Link></li> */}

      <li>
        <Link to="overThePhone">
          <FaPhoneAlt className="font-bold w-4 h-5"></FaPhoneAlt>
          ফোনে জিজ্ঞাসা
        </Link>
      </li>
      <li>
        <Link to="yourask" className="">
          <FaQuestion className="font-bold h-5 w-4 "></FaQuestion>
          আপনার জিজ্ঞাসা
        </Link>
      </li>

      <li>
        <Link to="application" className="">
          <BsFillFileEarmarkMedicalFill className="font-bold h-5 w-4 "></BsFillFileEarmarkMedicalFill>
          আবেদন
        </Link>
      </li>

      <li>
        <Link to="serviceAvailable" className="">
          <FaHandHoldingMedical className="font-bold h-5 w-4 "></FaHandHoldingMedical>
          সেবা কোথায় পাওয়া যায়
        </Link>
      </li>
      <li>
        <Link to="InformationWorker">
          <GiClawHammer className="font-bold h-5 w-4"></GiClawHammer>
          শ্রমিকের আইনি তথ্য
        </Link>
      </li>

      <li>
        <Link to="jobInformation">
          <TbBrandAppleArcade className="font-bold h-5 w-4"></TbBrandAppleArcade>
          চাকরির তথ্য
        </Link>
      </li>
      <li>
        <Link to="medicalServices">
          <BiPlusMedical className="font-bold h-5 w-4"></BiPlusMedical>
          মেডিক্যাল সেবা
        </Link>
      </li>
      <li>
        <Link to="Others">
          <TbPhysotherapist className="font-bold h-5 w-4"></TbPhysotherapist>
          অন্যান্য
        </Link>
      </li>
      <li>
        <Link to="Others">
          <TbPhysotherapist className="font-bold h-5 w-4"></TbPhysotherapist>
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
      <div className="navbar fixed z-10  bg-red-500  max-w-screen-xl bg-black ">
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
                <div className="absolute z-10 mt-2 w-48 bg-cyan-500  rounded-lg shadow-lg">
                  <ul>
                    <li className="py-2 px-4 hover:bg-green-900">
                      <div onClick={() => navigetCt("/")}>
                        <FaSync className="font-bold w-4 h-4"></FaSync>Sync
                      </div>
                    </li>

                    <li className="py-2 px-4 hover:bg-green-900">
                      <div onClick={() => navigetCt("/overThePhone")}>
                        <FaPhoneAlt className="font-bold w-4 h-5"></FaPhoneAlt>
                        ফোনে জিজ্ঞাসা
                      </div>
                    </li>

                    <li className="py-2 px-4 hover:bg-green-900">
                      <div onClick={() => navigetCt("/shos")}> 
                      
                      
                      </div>
                    </li>
                    <li className="py-2 px-4 hover:bg-green-900">
                      <div onClick={() => navigetCt("/pant")}> Pant </div>
                    </li>
                    <li className="py-2 px-4 hover:bg-green-900">
                      <div onClick={() => navigetCt("/boorka")}> BooRka </div>
                    </li>
                  </ul>
                </div>
              )}
            </ul>
          </div>

          <Link to="/" className="btn btn-ghost normal-case text-xl">
            আপনার জিজ্ঞাসা
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {/* <a className="btn">Get started</a> */}
        </div>
      </div>
    </>
  );
};

export default NavBar;



<div className="">
<div className="bg-red-600	px-6 py-4"> <h4 className="text-center  text-white  font-bold">শ্রমিকের আইনী তথ্য</h4></div>
<p className="py-5 px-2 font-bold text-center text-red-600	 text-xs">নিচের বিভাগুলি থেকে প্রয়োজনীয়টি নির্বাচন করুন</p>

<div className="relative flex flex-col items-center w-64 rounded-lg ">
 <button onClick={()=>setIsOpen((prev)=> !prev)} className="bg-blue-400 p-4 w-64  flex items-center justify-betwen font-bold text-lg rounded-lg trackin-wider border-4 
 border-transparent active:border-white duration-300 active:text-white ">

name:shakil { !isOpen ?(

<AiOutlineCaretDown className="font-bold text-white w-8 h-6" ></AiOutlineCaretDown >
 ):  (
<AiOutlineCaretUp  className="font-bold text-primary w-8 h-8"></AiOutlineCaretUp >


 )
}</button>
{
isOpen && (
<div className="bg-green-900 absolute top-16 flex flex-col items-start rounded-lg p-2 w-full">
 <h3>ddkdkkd</h3>
 <h3>ddkdkkd</h3>
 <h3>ddkdkkd</h3>
</div>
)
}
</div>
 
 <h4 className="text-center  font-bold">শ্রমিকের আইনি তথ্য</h4>
 <div className="bg-green-900">
   <MdArrowDropDown className="text-white font-bold w-8 w-12 h-12"></MdArrowDropDown>


 </div>
</div>