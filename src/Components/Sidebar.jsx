import { NavLink } from "react-router-dom";
import { Terminal } from "lucide-react";

import { FILES } from "../data/files";

function Sidebar() {
  return (
    <nav className="pf-sidebar">

      <div className="pf-sidebar-title">
        <Terminal
          size={12}
          style={{
            display: "inline",
            marginRight: 6,
            verticalAlign: -2,
          }}
        />

        portfolio/
      </div>

      {FILES.map((file) => (
        <NavLink
          key={file.path}
          to={file.path}
          className={({ isActive }) =>
            "pf-file" + (isActive ? " pf-file-active" : "")
          }
        >
          {file.name}
        </NavLink>
      ))}

    </nav>
  );
}

export default Sidebar;