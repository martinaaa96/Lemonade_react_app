import homemade from "/homemade.jpg";
import smoothie from "/smoothie.jpg";
export default function About() {
  return (
    /* / gfg/*/ <div className="container mx-auto p-4 flex">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 rounded-lg">
          <img src={homemade} alt="homemade" className="w-full h-auto" />
        </div>

        <div className=" p-4 rounded-lg">
          <img src={smoothie} alt="smoothie" className="w-full h-auto" />
        </div>
        <div className="bg-pink-200 p-4 rounded-lg relative md:h-1/3 object-center">
          <p className="text-lg font-semibold">Text Content</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
            metus eget purus ultricies vehicula.
          </p>
        </div>
      </div>
    </div>
  );
}
