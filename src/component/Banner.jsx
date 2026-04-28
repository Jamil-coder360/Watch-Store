import React from "react";
import Section from "./section/Section";
import Container from "./section/Container";
import bg from "../assets/wtc.png";
import Button from "./section/Button";

const Banner = () => {
  const bgImage = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Section style={bgImage} className="py-25">
      <Container>
        <div className="flex items-start justify-start">
          <div className="text-white ">
            <p className="text-lg uppercase tracking-widest mb-4">
              New Collection {new Date().getFullYear()}
            </p>

            <h1 className="text-5xl md:text-7xl font-bold max-w-2xl leading-tight">
              Discover Your <span className="text-olive-600">Perfect</span>{" "}
              Style
            </h1>

            <p className="mt-6 max-w-lg text-lg text-white/60">
              Explore premium fashion collections designed for modern
              lifestyles.
            </p>

            <div className="flex gap-10 justify-between max-w-125 pt-7.5">
              <Button>explore now</Button>
              <Button className="!bg-transparent border">our story</Button>
            </div>

            <div className="flex  gap-8 pt-12">
              <div className=" flex flex-col gap-3">
                <strong className="text-white text-3xl font-bold ">2,400+</strong>
                <span className="text-white/60 texl-xl font-semibold uppercase">sold</span>
              </div>
              <div className=" flex flex-col gap-3">
                <strong className="text-white text-3xl font-bold ">18</strong>
                <span className="text-white/60 texl-xl font-semibold uppercase">collection</span>
              </div>
              <div className=" flex flex-col gap-3">
                <strong className="text-white text-3xl font-bold ">400+</strong>
                <span className="text-white/60 texl-xl font-semibold uppercase">review</span>
              </div>
              <div className=" flex flex-col gap-3">
                <strong className="text-white text-3xl font-bold ">12+</strong>
                <span className="text-white/60 texl-xl font-semibold uppercase">experince</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Banner;
