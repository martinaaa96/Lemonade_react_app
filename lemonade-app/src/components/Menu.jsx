import strawberry from "/strawberry.jpg";
import watermelon from "/watermelon.jpg";
import blueberry from "/blueberry.jpg";
import lemonade from "/lemonade.jpg";

export default function Menu() {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5">
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src={blueberry}
              alt="Product 1"
              className="w-full max-w-xs object-cover mb-2 hover:scale-110 duration-500"
            />
            <h2 className="text-lg font-semibold">Product 1</h2>
            <p className="text-gray-600">Category: </p>
            <p className="text-gray-600">Ingredients: </p>
            <p className="text-blue-500 font-semibold mt-2">Price: 19.99</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src={strawberry}
              alt="Product 1"
              className="w-full max-w-xs object-cover mb-2 hover:scale-110 duration-500"
            />
            <h2 className="text-lg font-semibold">Product 1</h2>
            <p className="text-gray-600">Category: </p>
            <p className="text-gray-600">Ingredients: </p>
            <p className="text-blue-500 font-semibold mt-2">Price: 19.99</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src={watermelon}
              alt="Product 1"
              className="w-full max-w-xs object-cover mb-2 hover:scale-110 duration-500"
            />
            <h2 className="text-lg font-semibold">Product 1</h2>
            <p className="text-gray-600">Category: </p>
            <p className="text-gray-600">Ingredients: </p>
            <p className="text-blue-500 font-semibold mt-2">Price: 19.99</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src={lemonade}
              alt="Product 1"
              className="w-full max-w-xs object-cover mb-2 hover:scale-110 duration-500"
            />
            <h2 className="text-lg font-semibold">Product 1</h2>
            <p className="text-gray-600">Category: </p>
            <p className="text-gray-600">Ingredients: </p>
            <p className="text-blue-500 font-semibold mt-2">Price: 19.99</p>
          </div>
        </div>
        <div className="flex justify-center font-serif ">
          <button className="bg-yellow-500 hover:text-black duration-500 text-white my-7 py-2 px-4 rounded-full ">
            Load
          </button>
        </div>
      </div>
    </>
  );
}
