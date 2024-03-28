import { useContext } from "react";
import { data } from "../utils/data";
import { ProductContext } from "../context/ProductContext";

export default function MenuItem() {
  const { showProducts } = useContext(ProductContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5">
      {data.slice(0, showProducts).map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
          <img
            src={product.image}
            className="w-full max-w-xs object-cover mb-2 hover:scale-110 duration-500"
          />
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-600">Category: {product.category}</p>
          <p className="text-gray-600">Ingredients: {product.ingredients}</p>
          <p className="text-blue-500 font-semibold mt-2">
            Price: {product.price}
          </p>
        </div>
      ))}
    </div>
  );
}
