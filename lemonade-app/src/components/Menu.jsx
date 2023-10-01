import strawberry from "/strawberry.jpg";
import watermelon from "/watermelon.jpg";
import blueberry from "/blueberry.jpg";
import lemonade from "/lemonade.jpg";

export default function Menu() {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Our Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src={blueberry}
             
              alt="Product 1"
              className="w-full  object-cover mb-2 hover:scale-110 duration-500"
            />
            <h2 className="text-lg font-semibold">Product 1</h2>
            <p className="text-gray-600">Category: </p>
            <p className="text-gray-600">Description of Product 1.</p>
            <p className="text-blue-500 font-semibold mt-2">$19.99</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src={strawberry}
              alt="Product 1"
              className="w-full  object-cover mb-2 hover:scale-110 duration-500"
            />
            <h2 className="text-lg font-semibold">Product 1</h2>
            <p className="text-gray-600">Category: </p>
            <p className="text-gray-600">Description of Product 1.</p>
            <p className="text-blue-500 font-semibold mt-2">$19.99</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src={watermelon}
              alt="Product 1"
              className="w-full  object-cover mb-2 hover:scale-110 duration-500"
            />
            <h2 className="text-lg font-semibold">Product 1</h2>
            <p className="text-gray-600">Category: </p>
            <p className="text-gray-600">Description of Product 1.</p>
            <p className="text-blue-500 font-semibold mt-2">$19.99</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src={lemonade}
              alt="Product 1"
              className="w-full  object-cover mb-2 hover:scale-110 duration-500"
            />
            <h2 className="text-lg font-semibold">Product 1</h2>
            <p className="text-gray-600">Category: </p>
            <p className="text-gray-600">Description of Product 1.</p>
            <p className="text-blue-500 font-semibold mt-2">$19.99</p>
          </div>
        </div>
      </div>
    </>
  );
}
