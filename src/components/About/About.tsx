import { cardData } from "../../constants";
import AboutCard from "./AboutCard";

function About() {
  return (
    <section className="section-wrapper flex-center-col">
      <h3 className="text-center text-4xl font-semibold">
        <span className="text-primary mr-1">About</span>Us
      </h3>

      {/* متن توضیح */}
      <p className="font-verdana my-5 w-full max-w-[700px] px-4 text-center text-lg leading-8 text-stone-300 sm:text-xl sm:leading-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit earum
        voluptatem incidunt nesciunt quos numquam accusamus quam rerum, est,
        amet molestias.
      </p>

      {/* counters */}
      <div className="flex-center my-5 w-full flex-wrap gap-6 sm:gap-10">
        <p className="flex w-fit flex-col text-xl text-shadow-lg sm:text-2xl">
          <span className="text-primary">2024+</span>Total Items
        </p>
        <p className="flex w-fit flex-col text-xl text-shadow-lg sm:text-2xl">
          <span className="text-primary">20000+</span>Whitelist Profiles
        </p>
      </div>

      {/* cards grid */}
      <div className="mt-14 grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 xl:grid-cols-4">
        {cardData.map((item) => (
          <AboutCard
            key={item.id}
            title={item.title}
            desc={item.desc}
            count={item.id}
            className="hover:-translate-y-2 hover:scale-105"
          />
        ))}
      </div>
    </section>
  );
}

export default About;
