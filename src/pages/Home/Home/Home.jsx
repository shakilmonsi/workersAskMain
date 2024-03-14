import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import InformationWorker from "../../InformationWorker/InformationWorker";
import YourAsk from "../../YourAsk/YourAsk";
import Application from "../../Application/Application";
import ServiceAvailable from "../../ServiceAvailable/ServiceAvailable";
import OverThePhone from "../../OverThePhone/OverThePhone";
import Calculator from "../../Calculator/Calculator";
import HomePage from "../../HomePage/HomePage";

const Home = () => {
  /*
    1./Information work 
    2./ YourAsk 
     3./ Application 
    4./ Service Avalable 
    5./ OverThePhone
    6./ Calculator 
    

    */
  return (
    <div>
      <Helmet>
        <title> shmomik| Home</title>
      </Helmet>
      <Banner></Banner>

      <div className=" ">
        <HomePage></HomePage>

        

        {/* <InformationWorker></InformationWorker>
<YourAsk></YourAsk> */}

      </div>

      {/* <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials> */}
    </div>
  );
};

export default Home;
