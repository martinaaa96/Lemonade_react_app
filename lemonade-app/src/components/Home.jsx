import lemonadevideo from "../assets/lemonadevideo.mp4";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen relative">
        <video
          className="w-full h-full object-cover"
          src={lemonadevideo}
          autoPlay
          loop
          muted
        />
        <div className="absolute w-full h-full top-0 left-0 "></div>
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white p-10 ">
          <h1 className="py-4 text-3xl">
            Homemade Lemonade and Smoothies
          </h1>
          <h2 className="">All recipes and location store</h2>
          <div className="flex justify-between items-center">
            <button className="bg-yellow-500 hover:text-black duration-500 text-white my-7 py-2 px-4 rounded-full">
              Menu
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
