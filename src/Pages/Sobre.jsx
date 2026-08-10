import SectionLabel from "../Components/SectionLabel";

function Sobre() {
  return (
    <article>

      <SectionLabel>
        # Sobre o Curso
      </SectionLabel>

      <h1>
        Desenvolvimento de Software Multiplataforma (DSM)
      </h1>

      <p className="muted">
        Fatec Indaiatuba — Dr. Archimedes Lammoglia
      </p>

      <p>
        O DSM é um Curso Superior de Tecnologia do eixo
        Informação e Comunicação, com duração de 3 anos,
        focado em formar profissionais capazes de projetar,
        desenvolver e testar software para múltiplas
        plataformas — web, desktop, mobile, nuvem e IoT.
        A grade curricular foi construída em parceria com
        a Brasscom e cobre desde fundamentos (lógica de
        programação, matemática, engenharia de software)
        até tópicos avançados como segurança da informação,
        inteligência artificial e metodologias ágeis.
      </p>

      <div className="meta-grid">

        <div>
          <span className="meta-key">
            turno
          </span>

          <span className="meta-val">
            manhã
          </span>
        </div>

        <div>
          <span className="meta-key">
            duração
          </span>

          <span className="meta-val">
            3 anos · 6 semestres
          </span>
        </div>

        <div>
          <span className="meta-key">
            eixo
          </span>

          <span className="meta-val">
            informação e comunicação
          </span>
        </div>

      </div>

    </article>
  );
}

export default Sobre;