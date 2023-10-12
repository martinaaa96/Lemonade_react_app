export default function Contact() {
  return (
    <div
      className="grid md:grid-cols-2 items-center lg:grid-cols-3 max-w-6xl mx-auto py-6 
 bg-white font-[sans-serif]"
    >
      <div>
        <h2 className="text-[#333] text-3xl font-semibold ">Contact Us</h2>
        <div className="px-4 space-y-10 mt-8">
          <div className="flex">
            <div className="ml-4">
              <p className="text-[#333] text-xl font-semibold">Work Time</p>
              <p className="text-md">Monday to Friday</p>
              <p className="text-sm font-semibold mt-4">8:00-18:00</p>
            </div>
          </div>
          <div className="flex">
            <div className="ml-4">
              <p className="text-[#333] text-xl font-semibold">Adress</p>
              <p className="text-sm">Sofia</p>
              <p className="text-sm font-semibold mt-4">bul. Bulgaria 3</p>
            </div>
          </div>
          <div className="flex">
            <div className="ml-4">
              <p className="text-[#333] text-xl font-semibold">Contacts</p>
              <p className="text-sm">Email: gldo.gllh@frs.bg</p>
              <p className="text-sm font-semibold mt-4">
                Tel: +359 556 663 255
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" rounded-3xl lg:col-span-2 p-10 max-sm:px-6 flex  justify-center max-md:mt-12">
        <form>
          <div className="space-y-5 mt-8">
            <input
              type="text"
              placeholder="Enter your names"
              className="px-2 py-3 bg-transparent text-black w-full text-sm border-b border-gray-400 focus:border-white outline-none"
            />

            <input
              type="text"
              placeholder="Enter your email"
              className="px-2 py-3 bg-transparent text-black w-full text-sm border-b border-gray-400 focus:border-white outline-none"
            />

            <textarea
              placeholder="More information"
              className="px-2 pt-3 bg-transparent text-black w-full text-sm border-b border-gray-400 focus:border-white outline-none"
            ></textarea>
          </div>
          <button
            type="button"
            className="mt-8 flex items-center justify-center text-sm w-full rounded px-4 py-2.5 font-semibold bg-yellow-500 hover:text-black duration-500 text-white"
          >
            Sending
          </button>
        </form>
      </div>
    </div>
  );
}
