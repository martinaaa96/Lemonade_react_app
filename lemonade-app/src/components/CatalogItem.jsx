import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export default function CatalogItem({ product }) {
  const { addToCart } = useContext(ProductContext);

  return (
    <div key={product.id} className="bg-white rounded-lg shadow-md px-4 ">
      <img
        src={product.image}
        alt={product.name}
        className="w-full max-w-xs object-cover mb-2 hover:scale-110 duration-500"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">Category: {product.category}</p>
      <p className="text-gray-600 mt-2 whitespace-normal">
        Ingredients: {product.ingredients}
      </p>
      <p className="text-blue-500 font-semibold mt-2 flex items-center">
        Price: {product.price} $
        <button
          onClick={() => addToCart(product)}
          className="bg-pink-700 hover:text-black duration-500 text-white my-4 ml-4 py-1 px-2 rounded-full"
        >
          Add to cart
        </button>
      </p>
    </div>
  );
}
