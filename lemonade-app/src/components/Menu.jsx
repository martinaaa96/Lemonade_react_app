import { useState } from "react";
import { data } from "../utils/data";

export default function Menu() {
  const [showProducts, setShowProducts] = useState(4);
  const [hideProducts, setHideProducts] = useState(0);
  const loadButton = () => {
    setShowProducts((firstProducts) => firstProducts + 4);
    setHideProducts((lastProducts) => lastProducts + 4);
  };

  const backButton = () => {
    setShowProducts((firstProducts) => firstProducts - 4);
    setHideProducts((lastProduct) => lastProduct - 4);
  };

  return (
    <>
      <div className="container mx-auto p-4 font-serif">
        <div className="mb-4 text-center">
          <h1 className="text-2xl font-semibold ">Our Products</h1>
        </div>
        <div className="flex justify-end items-center mb-4">
          <div className="flex items-center">
            <label htmlFor="sort-select" className="mr-2">
              Sort By:
            </label>
            <select
              name="sort"
              id="sort"
              className="text-black border border-black "
            >
              <option value="none">None</option>
              <option value="price-asc">Price Low to High</option>
              <option value="price-desc">Price High to Low</option>
              <option value="name-asc">A to Z</option>
              <option value="name-desc">Z to A</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5">
          {data.slice(0, showProducts).map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
              <img
                src={product.image}
                className="w-full max-w-xs object-cover mb-2 hover:scale-110 duration-500"
              />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">Category: {product.category}</p>
              <p className="text-gray-600">
                Ingredients: {product.ingredients}
              </p>
              <p className="text-blue-500 font-semibold mt-2">
                Price: {product.price}
              </p>
            </div>
          ))}
        </div>

        {hideProducts > 0 && (
          <div className="flex justify-center font-serif">
            <button
              className="bg-yellow-500 hover:text-black duration-500 text-white my-7 py-2 px-4 rounded-full"
              onClick={backButton}
            >
              Back
            </button>
          </div>
        )}

        {showProducts < data.length && (
          <div className="flex justify-center font-serif">
            <button
              className="bg-yellow-500 hover:text-black duration-500 text-white my-7 py-2 px-4 rounded-full"
              onClick={loadButton}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </>
  );
}
