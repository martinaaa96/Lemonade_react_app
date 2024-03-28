//import { data } from "../utils/data";
import { ProductProvider } from "../context/ProductContext";
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <ProductProvider>
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
              id="sort-select"
              className="text-black border border-black "
            >
              <option value="price-asc">Price Low to High</option>
              <option value="price-desc">Price High to Low</option>
              <option value="name-asc">A to Z</option>
              <option value="name-desc">Z to A</option>
            </select>
          </div>
        </div>
        <MenuItem />
      </div>
    </ProductProvider>
  );
}
