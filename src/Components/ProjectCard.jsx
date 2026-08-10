function ProjectCard({ title, technologies, children }) {
  return (
    <div className="card">

      <div className="card-head">

        <h2>{title}</h2>

        <div className="tags">
          {technologies.map((technology) => (
            <span
              className="tag"
              key={technology}
            >
              {technology}
            </span>
          ))}
        </div>

      </div>

      <p>
        {children}
      </p>

    </div>
  );
}

export default ProjectCard;