import React from "react";
import Section from "./section/Section";
import Container from "./section/Container";
import bg from "../assets/mbg.png";
import Button from "./section/Button";

const Banner = () => {
  const bgImage = {
    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.35)), url(${bg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const stats = [
    { value: "2,400+", label: "Sold" },
    { value: "18", label: "Collections" },
    { value: "400+", label: "Reviews" },
    { value: "12+", label: "Experience" },
  ];

  return (
    <Section style={bgImage} className="py-16 sm:py-20 lg:py-32 ">
      <Container>
        <div className="flex items-start justify-start">
          <div className="text-white max-w-4xl w-full">
            <p className="text-sm sm:text-base md:text-lg uppercase tracking-[0.3em] mb-4 sm:mb-6 text-white/80">
              New Collection {new Date().getFullYear()}
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
              Discover Your <span className="text-lime-400">Perfect</span>
              <br className="hidden sm:block" /> Style
            </h1>

            <p className="mt-5 sm:mt-6 max-w-xl text-base sm:text-lg md:text-xl text-white/70 leading-relaxed">
              Explore premium fashion collections designed for modern lifestyles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-8 sm:pt-10 max-w-md">
              <Button className="w-full sm:w-auto px-8 py-3">
                Explore Now
              </Button>
              <Button className="w-full sm:w-auto !bg-transparent border border-white/60 hover:!bg-white hover:text-black px-8 py-3">
                Our Story
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-12 sm:pt-16 border-t border-white/20 mt-12 sm:mt-16">
              {stats.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <strong className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                    {item.value}
                  </strong>
                  <span className="text-sm sm:text-base text-white/60 font-semibold uppercase tracking-wide">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Banner;
