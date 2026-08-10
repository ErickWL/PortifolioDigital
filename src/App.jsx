import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Topbar from "./Components/Topbar";
import Sidebar from "./Components/Sidebar";
import PageNav from "./Components/PageNav";

import Sobre from "./Pages/Sobre";
import Perfil from "./Pages/Perfil";
import Aulas from "./Pages/Aulas";
import Projetos from "./Pages/Projetos";
import Eventos from "./Pages/Eventos";
import Equipe from "./Pages/Equipe";
import Contato from "./Pages/Contato";

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
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/aulas" element={<Aulas />} />
              <Route path="/projetos" element={<Projetos />} />
              <Route path="/eventos" element={<Eventos />} />
              <Route path="/equipe" element={<Equipe />} />
              <Route path="/contato" element={<Contato />} />
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