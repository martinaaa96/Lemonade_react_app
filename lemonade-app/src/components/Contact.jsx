export default function Contact() {
  return (
    <div
      className="grid md:grid-cols-2 items-center lg:grid-cols-3 max-w-6xl mx-auto py-6 
 bg-white font-[sans-serif]"
    >
      <div>
        <h2 className="text-[#333] text-3xl font-semibold">
          Свръжете се с нас
        </h2>
        <div className="px-4 space-y-10 mt-8">
          <div className="flex">
            <div className="ml-4">
              <p className="text-[#333] text-xl font-semibold">Работно време</p>
              <p className="text-md">Понеделник до Петък</p>
              <p className="text-sm font-semibold mt-4">8:00-18:00</p>
            </div>
          </div>
          <div className="flex">
            <div className="ml-4">
              <p className="text-[#333] text-xl font-semibold">Адрес</p>
              <p className="text-sm">гр. София</p>
              <p className="text-sm font-semibold mt-4">бул. България 3</p>
            </div>
          </div>
          <div className="flex">
            <div className="ml-4">
              <p className="text-[#333] text-xl font-semibold">Контакти</p>
              <p className="text-sm">gldo.gllh@frs.bg</p>
              <p className="text-sm font-semibold mt-4">+359 556 663 255</p>
            </div>
          </div>
        </div>
        <div className=" rounded-3xl lg:col-span-2 p-10 max-sm:px-6 flex flex-col justify-center max-md:mt-12">
          <form>
            <div className="space-y-4 mt-8">
              <input
                type="text"
                placeholder="Вашите имена"
                className="px-2 py-3 bg-transparent text-white w-full text-sm border-b border-gray-400 focus:border-white outline-none"
              />

              <input
                type="number"
                placeholder="телефонен номер"
                className="px-2 py-3 bg-transparent text-white w-full text-sm border-b border-gray-400 focus:border-white outline-none"
              />

              <input
                type="email"
                placeholder="имейл адрес"
                className="px-2 py-3 bg-transparent text-white w-full text-sm border-b border-gray-400 focus:border-white outline-none"
              />

              <textarea
                placeholder="Напиши съобщение"
                className="px-2 pt-3 bg-transparent text-white w-full text-sm border-b border-gray-400 focus:border-white outline-none"
              ></textarea>
            </div>
            <button
              type="button"
              className="mt-8 flex items-center justify-center text-sm w-full rounded px-4 py-2.5 font-semibold bg-yellow-600 text-white hover:bg-blue-700"
            >
              Изпращане
            </button>
          </form>
        </div>
      </div>
      <div className="bg-yellow-800 rounded-3xl lg:col-span-2 p-10 max-sm:px-6 flex flex-col justify-center max-md:mt-12"></div>
    </div>
  );
}
