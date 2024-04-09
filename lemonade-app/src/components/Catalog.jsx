import { useContext } from "react";
import CatalogItem from "./CatalogItem";
import { ProductContext } from "../context/ProductContext"

export default function Catalog() {
  const {
    data,
    showProducts,
    hideProducts,
    loadButton,
    backButton,
    setSortBy,
  } = useContext(ProductContext);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };
  return (
    <>
      <div className="container mx-auto p-20 font-serif">
        <div className="mb-4 text-center">
          <h1 className="text-2xl font-semibold">Our Products</h1>
        </div>
        <div className="flex justify-end items-center mb-4">
          <div className="flex items-center">
            <label htmlFor="sort-select" className="mr-2">
              Sort By:
            </label>
            <select
              name="sort"
              id="sort"
              className="text-black border border-black"
              onChange={handleSortChange}
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
            <CatalogItem key={product.id} product={product} />
            
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
