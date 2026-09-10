import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import SectionLabel from "../Components/SectionLabel";
import TerminalCat from "../Components/TerminalCat";
import { ATIVIDADES } from "../data/atividades";

function Atividades() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedId, setSelectedId] = useState(
    id || ATIVIDADES[ATIVIDADES.length - 1].id
  );

  const activeId = id || selectedId;
  const selected = ATIVIDADES.find((atividade) => atividade.id === activeId);

  function select(newId) {
    setSelectedId(newId);
    navigate(`/atividades/${newId}`);
  }

  return (
    <article>

      <SectionLabel>
        # Atividades
      </SectionLabel>

      <div className="term-line">
        ls atividades/
      </div>

      <div className="aula-file-list">
        {ATIVIDADES.map((atividade) => (
          <button
            key={atividade.id}
            className={
              "aula-file" +
              (atividade.id === activeId ? " aula-file-active" : "")
            }
            onClick={() => select(atividade.id)}
          >
            <span className="aula-file-cmd">
              cat
            </span>{" "}
            {atividade.id}.md
          </button>
        ))}
      </div>

      <TerminalCat command={`${selected.id}.md`} revealKey={selected.id}>
        <div className="ativ-entry">

          <div className="log-head">
            <span className="log-date">
              {selected.data}
            </span>
            <span className="log-tag">
              {selected.disciplina}
            </span>
            <span className="log-tag">
              {selected.professora}
            </span>
          </div>

          <p className="ativ-titulo">
            {selected.titulo}
          </p>

          {selected.integrantes && (
            <p className="ativ-integrantes">
              <strong>Integrantes —</strong>{" "}
              {selected.integrantes.join(", ")}
            </p>
          )}

          {selected.tipo === "questionario" ? (
            <>
              <p className="log-field">
                <strong>
                  Parte I — Questões Objetivas
                </strong>
              </p>

              {selected.objetivas.map((q, i) => (
                <div className="ativ-question" key={i}>
                  <p className="ativ-pergunta">
                    {q.pergunta}
                  </p>
                  <ul className="ativ-alternativas">
                    {q.alternativas.map((alt) => {
                      const letra = alt.trim().charAt(0);
                      return (
                        <li
                          key={alt}
                          className={letra === q.correta ? "ativ-correta" : ""}
                        >
                          {alt}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}

              <p className="log-field">
                <strong>
                  Parte II — Questões Dissertativas
                </strong>
              </p>

              {selected.dissertativas.map((q, i) => (
                <div className="ativ-question" key={i}>
                  <p className="ativ-pergunta">
                    {q.pergunta}
                  </p>
                  <p className="ativ-resposta">
                    {q.resposta}
                  </p>
                </div>
              ))}
            </>
          ) : (
            <>
              <p className="log-field">
                <strong>Parte I — Identificação de Conceitos de POO</strong>
              </p>

              {selected.cenarios.map((cenario, i) => (
                <div className="ativ-cenario" key={i}>
                  <p className="ativ-cenario-titulo">
                    {cenario.titulo}
                  </p>

                  <p className="ativ-enunciado">
                    {cenario.enunciado}
                  </p>

                  {cenario.perguntas.map((q, j) => (
                    <div className="ativ-question" key={j}>
                      <p className="ativ-pergunta">
                        {q.pergunta}
                      </p>
                      <p className="ativ-resposta">
                        {q.resposta}
                      </p>
                    </div>
                  ))}
                </div>
              ))}

              {selected.implementacaoResumo && (
                <p className="log-field">
                  <strong>Parte II — Boas Práticas —</strong>{" "}
                  {selected.implementacaoResumo}
                </p>
              )}
            </>
          )}

          {selected.reflexaoIndividual && (
            <p className="ativ-reflexao">
              <strong>Reflexão individual —</strong>{" "}
              {selected.reflexaoIndividual}
            </p>
          )}

          <p className="ativ-orientacao">
            {selected.orientacao}
          </p>

        </div>
      </TerminalCat>

    </article>
  );
}

export default Atividades;
