// LimittedCard.jsx
import React from "react";
import Button from "./section/Button";

const LimittedCard = ({ image, name }) => {
  const bgImage = {
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div
      style={bgImage}
      className="pt-4 lg:pt-8.5 pl-10 pb-12 lg:pb-26.5 group hover:-translate-y-2.5 duration-500 hover:scale-110 border"
    >
      <div className="max-w-[280px] flex flex-col justify-center items-start">
        <p className="text-[30px] text-red-500 font-bold leading-[42px] font-jost">
          Limited Edition
        </p>

        <h4 className="font-jost font-semibold text-[32px] leading-[42px] pb-6.5 text-yellow-500 ">
          {name}
        </h4>

        <Button className="opacity-0 group-hover:opacity-100 duration-500 !bg-black">
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default LimittedCard;
