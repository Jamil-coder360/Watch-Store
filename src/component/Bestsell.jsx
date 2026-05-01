import React from "react";
import Section from "./section/Section";
import Container from "./section/Container";
import products from "../data";
import ProductCard from "./ProductCard";
import Button from "./section/Button";
const Bestsell = () => {
  return (
    <Section className="">
      <Container>
        <div className="flex flex-col items-center">
          <div className="text-start  w-full">
            <h1 className="text-[40px] text-start leading-[1.5] font-bold text-[#857757] capitalize">
              populer product
            </h1>
          </div>
          <div className="py-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center justify-center gap-5">
            {products.slice(2, 10).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
            <Button Tagname="a" href="product" className="!bg-[#ee1313] w-[300px]">
              Show More
            </Button>

        </div>
      </Container>
    </Section>
  );
};

export default Bestsell;
