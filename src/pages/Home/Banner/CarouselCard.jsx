import React from "react";

const CarouselCard = (props) => {
  const { Layer } = props;
  return (
    <div>
      <div className="flex">
        <div className="flex items-center gap-44 ">
          <div>
            <img className=" w-full sm:w-[1280px]" src={Layer} alt="image"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;