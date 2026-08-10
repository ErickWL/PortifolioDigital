import { useCallback, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FILES } from "../data/files";

function PageNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const index = FILES.findIndex((f) => f.path === pathname);

  const goTo = useCallback(
    (i) => {
      const clamped = Math.max(0, Math.min(FILES.length - 1, i));
      navigate(FILES[clamped].path);
    },
    [navigate]
  );

  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowRight") goTo(index + 1);
      if (e.key === "ArrowLeft") goTo(index - 1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, goTo]);

  if (index === -1) return null;

  return (
    <div className="pf-nav-bar">
      <button className="pf-nav-btn" onClick={() => goTo(index - 1)} disabled={index === 0}>
        <ChevronLeft size={15} /> anterior
      </button>
      <span className="pf-nav-count">{index + 1} / {FILES.length}</span>
      <button className="pf-nav-btn" onClick={() => goTo(index + 1)} disabled={index === FILES.length - 1}>
        próximo <ChevronRight size={15} />
      </button>
    </div>
  );
}

export default PageNav;