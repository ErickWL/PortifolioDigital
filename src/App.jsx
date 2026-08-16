import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Topbar from "./Components/Topbar";
import Sidebar from "./Components/Sidebar";
import PageNav from "./Components/PageNav";
import TerminalCat from "./Components/TerminalCat";

import Sobre from "./Pages/Sobre";
import Perfil from "./Pages/Perfil";
import Aulas from "./Pages/Aulas";
import Projetos from "./Pages/Projetos";
import Eventos from "./Pages/Eventos";
import Equipe from "./Pages/Equipe";
import Contato from "./Pages/Contato";

import { FILES } from "./data/files";

function fileName(path) {
  return FILES.find((file) => file.path === path)?.name;
}

function App() {
  return (
    <BrowserRouter>
      <div className="pf-root">

        <Topbar />

        <div className="pf-body">

          <Sidebar />

          <main className="pf-content">
            <Routes>
              <Route path="/" element={<Navigate to="/sobre" replace />} />

              <Route
                path="/sobre"
                element={
                  <TerminalCat command={fileName("/sobre")} revealKey="/sobre">
                    <Sobre />
                  </TerminalCat>
                }
              />

              <Route
                path="/perfil"
                element={
                  <TerminalCat command={fileName("/perfil")} revealKey="/perfil">
                    <Perfil />
                  </TerminalCat>
                }
              />

              <Route path="/aulas" element={<Aulas />} />

              <Route
                path="/projetos"
                element={
                  <TerminalCat command={fileName("/projetos")} revealKey="/projetos">
                    <Projetos />
                  </TerminalCat>
                }
              />

              <Route
                path="/eventos"
                element={
                  <TerminalCat command={fileName("/eventos")} revealKey="/eventos">
                    <Eventos />
                  </TerminalCat>
                }
              />

              <Route
                path="/equipe"
                element={
                  <TerminalCat command={fileName("/equipe")} revealKey="/equipe">
                    <Equipe />
                  </TerminalCat>
                }
              />

              <Route
                path="/contato"
                element={
                  <TerminalCat command={fileName("/contato")} revealKey="/contato">
                    <Contato />
                  </TerminalCat>
                }
              />

              <Route path="*" element={<Navigate to="/sobre" replace />} />
            </Routes>

            <PageNav />
          </main>

        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;