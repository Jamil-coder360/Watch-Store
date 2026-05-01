import React from "react";
import Section from "../component/section/Section";
import Container from "../component/section/Container";
import ProductCard from "../component/ProductCard";
import products from "../data";

const ProductPage = () => {
  return (
    <Section className="py-10 md:py-16 lg:py-25">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-start w-full text-[40px] leading-[1.5] font-bold text-[#857757]">
            product list
          </h3>
          <div className="pt-15 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center justify-center gap-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ProductPage;
