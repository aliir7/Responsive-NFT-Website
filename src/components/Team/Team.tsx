import { teamData } from "../../constants";
import TeamCard from "./TeamCard";

function Team() {
  return (
    <section className="section-wrapper flex-center-col">
      {/* Team Title */}
      <h3 className="text-center text-4xl font-semibold">
        Our <span className="text-primary mr-2">Team</span>
      </h3>
      {/* Team Card */}
      <div className="mt-14 grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 xl:grid-cols-4">
        {teamData.map((item) => (
          <TeamCard
            key={item.id}
            name={item.name}
            position={item.position}
            imgSrc={item.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Team;
