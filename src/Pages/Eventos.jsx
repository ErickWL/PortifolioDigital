import SectionLabel from "../Components/SectionLabel";

function Eventos() {
  return (
    <article>

      <SectionLabel>
        # Eventos
      </SectionLabel>

      <div className="card">

        <div className="card-head">

          <h2>
            Semana de Tecnologia 2026
          </h2>

          <span className="tag">
            Fatec Indaiatuba
          </span>

        </div>

        <p className="muted">
          "Tecnologia Verde: Inovação e
          Sustentabilidade para o Futuro"
        </p>

        <p>
          Abertura em 04 de maio de 2026, com
          participação da Prefeitura de Indaiatuba,
          da secretária de Ciência, Tecnologia e
          Inovação e do secretário de Serviços
          Urbanos e Meio Ambiente (Semurb).

          Um dos destaques foi a 3ª edição do
          Hackathon, conectando alunos de DSM,
          Gestão de Serviços e Redes de Computadores
          a demandas reais apresentadas pela Semurb
          e pelo Comdema, com apresentação final
          dos projetos no dia 08 de maio no auditório
          da Prefeitura de Indaiatuba.
        </p>

      </div>

    </article>
  );
}

export default Eventos;