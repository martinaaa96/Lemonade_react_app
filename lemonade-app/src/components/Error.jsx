export default function Error() {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 font-serif">
      <div className="text-center">
        <p className="text-base font-semibold text-black">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-black">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="text-sm bg-yellow-500 hover:text-black duration-500 text-white my-7 py-2 px-4 rounded-full "
          >
            Go back home
          </a>
        </div>
      </div>
    </main>
  );
}