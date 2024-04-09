import React from "react";

export default function CatalogItem({ product }) {
  return (
    <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full max-w-xs object-cover mb-2 hover:scale-110 duration-500"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">Category:{product.category}</p>
      <p className="text-gray-600">Ingredients:{product.ingredients}</p>
      <p className="text-blue-500 font-semibold mt-2">
        Price: {product.price} $
        <button className="bg-pink-700 hover:text-black duration-500 text-white my-7 py-1 px-2 rounded-full">
          Add to cart
        </button>
      </p>
    </div>
  );
}
