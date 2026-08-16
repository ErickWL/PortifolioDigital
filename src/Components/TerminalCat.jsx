import { useState, useEffect, useRef } from "react";

const TYPE_SPEED = 35; // ms por caractere

function TerminalCat({ command, revealKey, children }) {
  const [typed, setTyped] = useState("");
  const [revealed, setRevealed] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const fullCommand = `cat ${command}`;

    setRevealed(false);
    setTyped("");

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [revealKey]);

  return (
    <>
      <div className="term-line">
        {typed}
        {!revealed && <span className="term-cursor" />}
      </div>

      <div className={"term-body" + (revealed ? " term-body-visible" : "")}>
        {children}
      </div>
    </>
  );
}

export default TerminalCat;