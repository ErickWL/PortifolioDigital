import SectionLabel from "../Components/SectionLabel";
import TeamCard from "../Components/TeamCard";
import { TEAM } from "../data/team";

function Equipe() {
  return (
    <article>

      <SectionLabel>
        # Quem Somos — Equipe do PI
      </SectionLabel>

      <div className="team-grid">

        {TEAM.map((member) => (
          <TeamCard
            key={member.name}
            name={member.name}
            role={member.role}
            real={member.real}
            img={member.img}
          />
        ))}

      </div>

    </article>
  );
}

export default Equipe;