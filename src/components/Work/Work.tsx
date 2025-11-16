import { workData } from "../../constants";
import WorkCard from "./WorkCard";

function Work() {
  return (
    <section className="section-wrapper flex-center-col bg-img">
      {/* Work Title */}
      <h3 className="text-center text-4xl font-semibold">
        How to <span className="text-primary mr-2">NOXSTAR</span>works
      </h3>
      {/* Work Cards */}
      <div className="mt-14 grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 xl:grid-cols-4">
        {workData.map((item) => (
          <WorkCard
            key={item.id}
            title={item.title}
            desc={item.desc}
            imgSrc={item.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Work;
