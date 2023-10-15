import homemade from "/homemade.jpg";
import smoothie from "/smoothie.jpg";
export default function About() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Welcome to Homemade Lemonade!
          </h2>
          <p className="mb-4">
            Welcome to Homemade Lemonade, where refreshing lemonade meets the
            warmth of homemade goodness. We are passionate about crafting the
            most delightful, thirst-quenching lemonade, just the way you
            remember it from your childhood. Our story began with a simple idea:
            to share the joy of sipping on a cool glass of lemonade made with
            love and the finest ingredients. We believe that life is best
            moments are often shared over a glass of something sweet.
          </p>
          <p className="font-semibold">
            We are thrilled to announce the latest addition to our menu –
            freshly blended smoothies!
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src={homemade}
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src={smoothie}
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
}
