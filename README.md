# PortifolioDigital

Portfólio acadêmico e profissional de um estudante de Desenvolvimento de Software Multiplataforma (DSM) da Fatec Indaiatuba.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=flat-square&logo=reactrouter&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

## Sobre o projeto

O projeto reúne formação, perfil, conhecimentos técnicos, projetos, aulas, atividades acadêmicas, eventos, equipe e contato em uma interface inspirada em um terminal/editor de código.

As aulas são organizadas dentro de `03-aulas.log` em diretórios por área, como `IHC/`, `POO/` e `Gestão Ágil/`. As atividades possuem uma seção própria e podem ser abertas diretamente pelos links relacionados às aulas.

## Navegação

```text
portfolio/
├── 01-sobre-curso.md     /sobre
├── 02-perfil.md          /perfil
├── 03-aulas.log          /aulas
├── 04-atividades.md      /atividades
├── 05-projetos.md        /projetos
├── 06-eventos.md         /eventos
├── 07-equipe.md          /equipe
└── 08-contato.sh         /contato
```

Em `/aulas`, cada registro mostra data, tags, resumo, reflexão e, quando disponível, um link para a atividade correspondente. Em `/atividades`, são exibidos questionários, respostas dissertativas, cenários de POO, boas práticas, implementações e atividades de IHC.

## Tecnologias

- React 19
- Vite 8
- React Router 7
- JavaScript ES6+
- Lucide React
- Simple Icons

## Como executar

Pré-requisito: Node.js e npm instalados.

```bash
npm install
npm run dev
```

O Vite exibirá no terminal o endereço local da aplicação.

## Scripts disponíveis

```bash
npm run dev       # inicia o servidor de desenvolvimento
npm run build     # gera a versão de produção
npm run preview   # visualiza a build de produção
npm run lint      # executa o ESLint
```

## Estrutura principal

```text
src/
├── Components/       componentes reutilizáveis da interface
├── Pages/            páginas e rotas da aplicação
├── data/             dados de aulas, atividades e navegação
├── App.jsx           roteamento principal
├── App.css           estilos da interface
└── main.jsx          ponto de entrada do React
