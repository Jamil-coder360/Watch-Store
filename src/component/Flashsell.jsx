import React from "react";
import Section from "./section/Section";
import Container from "./section/Container";
import useCountDown from "../hooks/UseCountDown";
import ProductCard from "./ProductCard";
import product from "../data";
const Flashsell = () => {
  const { days, minutes, hours, seconds } = useCountDown("2026-05-09T23:59:59");

  return (
    <Section className="py-10 md:py-16 lg:py-30 ">
      <Container>
        <div className="">
          {/* flashsell component header */}
          <div className="flex flex-col lg:flex-row items-center  justify-between">
            <h3 className="text-[40px] leading-[1.5] font-bold text-[#857757]">
              Flash Sell
            </h3>
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-10">
              <h1 className="text-3xl lg:text-[40px] leading-[1.5] font-bold text-[#dd8613]">
                Flash Sale Ends In :
              </h1>
              {/* <span className="text-black space-x-4">{days}d {hours}:{minutes}:{seconds}</span> */}
              <div className="flex  gap-2 text-black items-center mt-2  ">
                <div className="flex flex-col items-center gap-1 ">
                  <span className="font-medium text-[12px] leading-[1.5]  text-[#dd8613]">
                    Days
                  </span>
                  <span className="text-[32px] font-bold text-[#857757]">
                    {days}
                  </span>
                </div>
                <span className="text-2xl font-bold text-[#E07575]">:</span>

                <div className="flex flex-col items-center gap-1 ">
                  <span className="font-medium text-[12px] leading-[1.5]  text-[#dd8613]">
                    Hours
                  </span>
                  <span className="text-[32px] font-bold text-[#857757]">
                    {hours}
                  </span>
                </div>
                <span className="text-2xl font-bold text-[#E07575]">:</span>

                <div className="flex flex-col items-center gap-1 ">
                  <span className="font-medium text-[12px] leading-[1.5]  text-[#dd8613]">
                    Minutes
                  </span>
                  <span className="text-[32px] font-bold text-[#857757]">
                    {minutes}
                  </span>
                </div>
                <span className="text-2xl font-bold text-[#E07575]">:</span>

                <div className="flex flex-col items-center gap-1 ">
                  <span className="font-medium text-[12px] leading-[1.5]  text-[#dd8613]">
                    Seconds
                  </span>
                  <span className="text-[32px] font-bold text-[#857757]">
                    {seconds}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* flashsale item */}

          <div className="pt-15 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center justify-center gap-5">
            {product.slice(0,8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Flashsell;
