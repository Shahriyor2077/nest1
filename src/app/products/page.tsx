import React from "react";
import ProudctsView from "@/components/ProudctsView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Here you can see all products",
};

const Products = async () => {
  const response = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 60 },
  });
  const data = await response.json();
  return (
    <div className="container">
      <ProudctsView data={data} />
    </div>
  );
};

export default Products;
