import { useState } from "react";
import { Link } from "react-router-dom";

import SectionLabel from "../Components/SectionLabel";
import TerminalCat from "../Components/TerminalCat";
import { AULAS } from "../data/aulas";

function getDirectory(aula) {
  if (aula.tags.includes("IHC")) return "IHC";
  if (aula.tags.includes("POO")) return "POO";
  if (aula.tags.includes("Gestão Ágil")) return "Gestão Ágil";
  return "Portfólio Digital";
}

function groupAulas(aulas) {
  return aulas.reduce((directories, aula) => {
    const directory = getDirectory(aula);
    const existing = directories.find((group) => group.name === directory);

    if (existing) {
      existing.items.push(aula);
    } else {
      directories.push({ name: directory, items: [aula] });
    }

    return directories;
  }, []);
}

function Aulas() {
  const [selectedId, setSelectedId] = useState(AULAS[AULAS.length - 1].id);
  const [openDirectories, setOpenDirectories] = useState(() => {
    const selectedAula = AULAS[AULAS.length - 1];
    return new Set([getDirectory(selectedAula)]);
  });

  const selected = AULAS.find((aula) => aula.id === selectedId);
  const directories = groupAulas(AULAS);

  function toggleDirectory(directory) {
    setOpenDirectories((current) => {
      const next = new Set(current);

      if (next.has(directory)) {
        next.delete(directory);
      } else {
        next.add(directory);
      }

      return next;
    });
  }

  return (
    <article>

      <SectionLabel>
        # Aulas
      </SectionLabel>

      <div className="term-line">
        ls aulas/
      </div>

      <div className="aula-file-list">
        {directories.map((directory) => {
          const isOpen = openDirectories.has(directory.name);

          return (
            <div className="aula-folder" key={directory.name}>
              <button
                className="aula-folder-toggle"
                onClick={() => toggleDirectory(directory.name)}
                aria-expanded={isOpen}
              >
                <span className="aula-folder-chevron">
                  {isOpen ? "▾" : "▸"}
                </span>
                {directory.name}/
              </button>

              {isOpen && directory.items.map((aula) => (
                <button
                  key={aula.id}
                  className={
                    "aula-file aula-file-nested" +
                    (aula.id === selectedId ? " aula-file-active" : "")
                  }
                  onClick={() => setSelectedId(aula.id)}
                >
                  <span className="aula-file-cmd">
                    cat
                  </span>{" "}
                  {aula.fileName || `${aula.id}.log`}
                  <span className="aula-file-date">
                    {aula.date}
                  </span>
                </button>
              ))}
            </div>
          );
        })}
      </div>

      <TerminalCat
        command={selected.fileName || `${selected.id}.log`}
        revealKey={selected.id}
      >
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

          {selected.atividadeId && (
            <Link
              to={`/atividades/${selected.atividadeId}`}
              className="aula-atividade-link"
            >
              <span className="aula-file-cmd">
                cd
              </span>{" "}
              ../atividades/{selected.atividadeId} →
            </Link>
          )}

        </div>
      </TerminalCat>

    </article>
  );
}

export default Aulas;
