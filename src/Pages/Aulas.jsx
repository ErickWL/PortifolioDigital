import SectionLabel from "../Components/SectionLabel";

function Aulas() {
  return (
    <article>

      <SectionLabel>
        # Aulas
      </SectionLabel>

      <div className="log-entry">

        <div className="log-head">

          <span className="log-date">
            06/08/2026
          </span>

          <span className="log-tag">
            Portfólio Digital
          </span>

        </div>

        <p className="log-field">

          <strong>
            Sobre a aula —
          </strong>{" "}

          a aula apresentou o conceito de
          portfólio digital, discutindo sua
          importância como ferramenta de
          apresentação profissional e acadêmica,
          além de trazer ideias práticas de como
          estruturar e construir um — desde a
          escolha de conteúdo até a forma de
          apresentá-lo.

        </p>

        <p className="log-field">

          <strong>
            Reflexão —
          </strong>{" "}

          O principal aprendizado foi perceber o portfólio como um registro contínuo de evolução. Em vez de focar apenas no resultado final dos projetos, passei a valorizar a documentação do processo — destacando as decisões de arquitetura, as boas práticas aplicadas e a resolução de problemas.

        </p>

      </div>

    </article>
  );
}

export default Aulas;