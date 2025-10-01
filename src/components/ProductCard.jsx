import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2 font-bold">
          {product.category}
        </p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-emerald-600 font-bold">৳ {product.price}</span>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1 rounded-lg text-sm">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
