export default function Home() {
  return (
    <>
      <div
        id="home"
        className="w-full min-h-screen p-8 flex items-center bg-gradient-to-b from-white to-yellow-500"
      >
        <div className="max-w-6xl mx-auto md:flex grid grid-rows-4 grid-flow-col gap-4 gap-4 md:items-center">
          <div className="md:pr-8 my-11 ">
            <img
              className="md:w-full h-auto rounded-xl object-cover hover:scale-110 duration-500 "
              src="/smoothie.jpg"
            />
          </div>
          <div className="md:pr-8 my-11 ">
            <img
              className="md:w-full h-auto rounded-xl object-cover hover:scale-110 duration-500 "
              src="/smoothie.jpg"
            />
          </div>
          <div className="md:pr-8 md:pr-8 my-11">
            <img
              className="md:w-full h-auto rounded-xl object-cover"
              src="/smoothie.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
