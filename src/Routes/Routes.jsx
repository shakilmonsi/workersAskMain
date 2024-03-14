import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import YourAsk from "../pages/YourAsk/YourAsk";
import InformationWorker from "../pages/InformationWorker/InformationWorker";
import ServiceAvailable from "../pages/ServiceAvailable/ServiceAvailable";
import Application from "../pages/Application/Application";
import OverThePhone from "../pages/OverThePhone/OverThePhone";
import Calculator from "../pages/Calculator/Calculator";
import JobInformation from "../pages/JobInformation/JobInformation";
import MedicalServices from "../pages/MedicalServices/MedicalServices";
import Others from "../pages/others/Others";
import OverTime from "../pages/OverTime/OverTime";
import Confidentiality from "../pages/Confidentiality/Confidentiality";
import ChangeNumber from "../pages/ChangeMobile/ChangeNumber";
import AnswerTheQuestion from "../pages/AnswerTheQuestion/AnswerTheQuestion";
import RootMap from "../RootMap/RootMap";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 

      //____________________________workers ask ___________________________________


      {
        path: '/rootmap',
        element: <RootMap></RootMap>
      },

{
path:"yourask",
element: <YourAsk></YourAsk>
},
{
path:"InformationWorker",
element:<InformationWorker></InformationWorker>
},
{
path:"serviceAvailable",
element:<ServiceAvailable></ServiceAvailable>
},
{
path:"application",
element:<Application></Application>
},
{
path:"overThePhone",
element:<OverThePhone></OverThePhone>
},
{
path:"calculator",
element:<Calculator></Calculator>
},
{
path:"overtime",
element:<OverTime></OverTime>
},
{
path:"jobInformation",
element:<JobInformation></JobInformation>
},
{
path:"medicalServices",
element:<MedicalServices></MedicalServices>
},
{
path:"Others",
element:<Others></Others>
},

{
path:"confidentiality",
element:<Confidentiality></Confidentiality>
},
{
path:"changenumer",
element:<ChangeNumber></ChangeNumber>
},

//______________sub data __________________________//

{
path: "/answerthequestion",
element: <AnswerTheQuestion></AnswerTheQuestion>
},
//______________sub data __________________________//



        {
          path: 'menu', 
          element: <Menu></Menu>
        },
        {
          path: 'order/:category',
          element: <Order></Order>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
   
        {
          path: 'secret',
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'cart',
          element: <Cart></Cart>
        }
      ]
    }
  ]);