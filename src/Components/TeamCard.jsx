import { User } from "lucide-react";

function TeamCard({ name, role, real = false, img }) {
  return (
    <div
      className={
        "team-card" +
        (real ? " team-card-real" : "")
      }
    >

      <div className="photo-placeholder photo-placeholder-round" style={{ overflow: "hidden" }}>
        {img ? (
          <img
            src={img}
            alt={`Foto de ${name}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%"
            }}
          />
        ) : (
          <User size={18} />
        )}
      </div>

      <div className="team-name">
        {name}
      </div>

      <div className="team-role">
        {role}
      </div>

    </div>
  );
}

export default TeamCard;