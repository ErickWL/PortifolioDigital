import { useState, useEffect, useRef } from "react";
import personaPreview from "../img/IHCPDF.png";
import journeyPreview from "../img/IHCpdf2.png";

const TYPE_SPEED = 35;

function PdfAttachment({ file, label, pages }) {
  const [typed, setTyped] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [open, setOpen] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const fullCommand = `open ${file}`;

    setRevealed(false);
    setTyped("");
    setOpen(false);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    let charCount = 0;

    intervalRef.current = setInterval(() => {
      charCount += 1;
      setTyped(fullCommand.slice(0, charCount));

      if (charCount >= fullCommand.length) {
        clearInterval(intervalRef.current);
        setRevealed(true);
      }
    }, TYPE_SPEED);

    return () => clearInterval(intervalRef.current);
  }, [file]);

  const pageLabels = pages || ["Persona", "Mapa de Jornada"];
  const pageImages = [personaPreview, journeyPreview];

  return (
    <div className="ativ-pdf">
      <button
        type="button"
        className="term-line ativ-pdf-trigger"
        onClick={() => revealed && setOpen((value) => !value)}
        disabled={!revealed}
      >
        {typed}
        {!revealed && <span className="term-cursor" />}
      </button>

      <div className={"term-body" + (open ? " term-body-visible" : "")}>
        {open && (
          <div className="ativ-pdf-window">
            <div className="ativ-pdf-head">
              <span>{label || file}</span>
              <a href={`/docs/${file}`} target="_blank" rel="noreferrer">
                baixar PDF completo
              </a>
            </div>

            <div className="ativ-pdf-pages">
              {pageLabels.map((page, index) => (
                <div className="ativ-pdf-page" key={page}>
                  {pageImages[index] && (
                    <img src={pageImages[index]} alt={`Prévia: ${page}`} />
                  )}
                  <span>{page}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PdfAttachment;