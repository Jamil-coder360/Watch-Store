import React from "react";
import { useLocation } from "react-router";
import Section from "../component/section/Section";
import Container from "../component/section/Container";
import ProductCard from "../component/ProductCard";
import products from "../data";

const ProductPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q")?.trim().toLowerCase() || "";

  const filteredProducts = query
    ? products.filter((product) =>
        product.name.toLowerCase().includes(query)
      )
    : products;

  return (
    <Section className="py-10 md:py-16 lg:py-25">
      <Container>
        <div className="flex flex-col items-center justify-center w-full">
          <h3 className="text-start w-full text-[40px] leading-normal font-bold text-[#857757]">
            {query ? `Search results for "${query}"` : "Product list"}
          </h3>
          <div className="pt-15 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center justify-center gap-5">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="text-gray-500">No products found for "{query}".</p>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ProductPage;
