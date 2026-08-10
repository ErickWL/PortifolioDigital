import SectionLabel from "../Components/SectionLabel";
import ProjectCard from "../Components/ProjectCard";

function Projetos() {
  return (
    <article>

      <SectionLabel>
        # Projetos
      </SectionLabel>

      <ProjectCard
        title="AmbyData"
        technologies={[
          "React",
          "Spring Boot",
          "MySQL",
        ]}
      >
        Dashboard de monitoramento industrial em
        tempo real. O sistema captura dados diretamente
        das máquinas e linhas de produção, permitindo
        acompanhar OEE, produtividade, lucros, desvios,
        necessidade de manutenção e temperatura — entre
        outros indicadores operacionais. A manutenção é
        um dos módulos monitorados, não o foco único
        do sistema.
      </ProjectCard>

      <ProjectCard
        title="Geo-Explorer"
        technologies={[
          "Bootcamp",
          "IBM Bob",
        ]}
      >
        Projeto desenvolvido em bootcamp com apoio
        do IBM Bob, criado para explorar trilhas de
        aprendizagem de forma interativa.
      </ProjectCard>

    </article>
  );
}

export default Projetos;