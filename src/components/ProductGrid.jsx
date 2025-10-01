import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "../api/api";


const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p className="text-gray-500 col-span-full">No products available</p>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
