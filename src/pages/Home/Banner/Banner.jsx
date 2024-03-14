
import Layer9 from "../../../assets/caruosel/banner.jpeg";
import Layer1 from "../../../assets/caruosel/banner1.jpeg";
import Layer92 from "../../../assets/caruosel/banner2.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { useRef, useState } from "react";
import CarouselCard from "./CarouselCard";

// Initialize SwiperCore modules
SwiperCore.use([Autoplay, Pagination]);

const Products = [
    {
        Layer: Layer9,
        name: "shakil"
    },
    
    {
        Layer: Layer1,
        name: "shakil"
    },
    
    // Your product data here...
    {
        Layer: Layer92,
        name: "shakil"
    },
 
];

const Banner = () => {
  const [slideBegOrNot, handleSlideByState] = useState({
    isFirst: true,
    isLast: false,
  });
  const SlideRef = useRef();

  const handleNext = () => {
    SlideRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    SlideRef.current.swiper.slidePrev();
  };

  const onSlideChange = (swiper) => {
    handleSlideByState({
      isFirst: swiper.isBeginning,
      isLast: swiper.isEnd,
    });
  };

  const { isLast, isFirst } = slideBegOrNot;

  return (
    <section className="bg-yellow-50 shadow-md overflow-hidden">
      <div className="mt-1">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          className="mySwiper wrelative " 
          onSlideChange={onSlideChange}
          ref={SlideRef}
        >
          {Products.map((item) => (
            <SwiperSlide key={item.id}>
              <CarouselCard key={item.id} Layer={item.Layer} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Add your arrow navigation code here if needed */}
    </section>
  );
};

export default Banner;
