import { Camera } from "lucide-react";
import SectionLabel from "../Components/SectionLabel";
import { STACK } from "../data/stack";
import profileicon from "../img/profileicon.jpg";

function Perfil() {
  return (
    <article>

      <SectionLabel>
        # Portfólio Profissional
      </SectionLabel>

      <div className="profile-head">

        <div className="photo-placeholder photo-placeholder-lg">
          <img src={profileicon} style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            borderRadius: "14px"
          }} alt="Foto de perfil de Erick Weiller Lansarin" />
        </div>

        <div>
          <h1>
            Erick Weiller Lansarin
          </h1>

          <p
            className="muted"
            style={{ marginBottom: 0 }}
          >
            DSM · Fatec Indaiatuba
          </p>
        </div>

      </div>

      <p>
        Estudante de Desenvolvimento de Software
        Multiplataforma (DSM) na Fatec Indaiatuba,
        atualmente no 3º semestre. Desenvolvedor em
        formação com atuação prática em front-end,
        back-end e banco de dados, unindo o conteúdo
        do curso a projetos reais como o AmbyData e
        o Geo-Explorer.
      </p>

      <div className="stack-grid">

        {STACK.map((stack) => (
          <div key={stack.group}>

            <span className="meta-key">
              {stack.group}
            </span>

            <div className="tags">

              {stack.items.map((item) => (
                <span
                  className="tag"
                  key={item}
                >
                  {item}
                </span>
              ))}

            </div>

          </div>
        ))}

      </div>

      <p className="log-field">

        <strong>
          Objetivo —
        </strong>{" "}

        Atuar nas áreas de Desenvolvimento Full-Stack ou Cibersegurança, aplicando conhecimentos em criação de software, arquitetura de sistemas e práticas de segurança defensiva

      </p>

    </article>
  );
}

export default Perfil;