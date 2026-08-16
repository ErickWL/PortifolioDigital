import { useState } from "react";

import SectionLabel from "../Components/SectionLabel";
import TerminalCat from "../Components/TerminalCat";
import { AULAS } from "../data/aulas";

function Aulas() {
  const [selectedId, setSelectedId] = useState(AULAS[AULAS.length - 1].id);
  const selected = AULAS.find((aula) => aula.id === selectedId);

  return (
    <article>

      <SectionLabel>
        # Aulas
      </SectionLabel>

      <div className="term-line">
        ls aulas/
      </div>

      <div className="aula-file-list">
        {AULAS.map((aula) => (
          <button
            key={aula.id}
            className={
              "aula-file" +
              (aula.id === selectedId ? " aula-file-active" : "")
            }
            onClick={() => setSelectedId(aula.id)}
          >
            <span className="aula-file-cmd">
              cat
            </span>{" "}
            {aula.id}.log
          </button>
        ))}
      </div>

      <TerminalCat command={`${selected.id}.log`} revealKey={selected.id}>
        <div className="log-entry">

          <div className="log-head">

            <span className="log-date">
              {selected.date}
            </span>

            {selected.tags.map((tag) => (
              <span className="log-tag" key={tag}>
                {tag}
              </span>
            ))}

          </div>

          <p className="log-field">
            <strong>
              Sobre a aula —
            </strong>{" "}
            {selected.sobre}
          </p>

          <p className="log-field">
            <strong>
              Reflexão —
            </strong>{" "}
            {selected.reflexao}
          </p>

        </div>
      </TerminalCat>

    </article>
  );
}

export default Aulas;