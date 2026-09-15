export const ATIVIDADES = [
  {
    id: "atividade-31-08",
    folder: "dia-31",
    fileName: "lista-exercicios.md",
    tipo: "questionario",
    titulo: "Lista de Exercícios - Gestão Ágil de Projetos de Software",
    disciplina: "Gestão Ágil / 3º DSM",
    professora: "Waldinelly Costa",
    data: "31/08/2026",
    orientacao: "Atividade individual — entregue via portfólio.",
    objetivas: [
      {
        pergunta:
          "1. Segundo Massari (2018) e o material apresentado em aula, a gestão ágil de projetos é uma abordagem focada principalmente em:",
        alternativas: [
          "a) Documentação extensiva, etapas lineares e processos rígidos.",
          "b) Adaptação, flexibilidade, transparência e inspeção.",
          "c) Previsibilidade absoluta e controle estrito desde o início do projeto.",
          "d) Comando e controle com equipes gigantescas e silos organizacionais.",
        ],
        correta: "b",
      },
      {
        pergunta:
          "2. De acordo com as características do gerenciamento tradicional (Preditivo), em qual tipo de ambiente ele se aplica muito bem?",
        alternativas: [
          "a) Ambientes com alta volatilidade e requisitos incertos.",
          "b) Projetos de inovação onde o escopo muda diariamente.",
          "c) Ambientes com estabilidade de requisitos, como a construção civil e industrial.",
          "d) Projetos focados em aprendizado progressivo e incremental de software.",
        ],
        correta: "c",
      },
      {
        pergunta:
          '3. Na filosofia dos métodos ágeis, um dos principais valores é a priorização de certos elementos. O que deve ser priorizado em detrimento de "processos rígidos e ferramentas"?',
        alternativas: [
          "a) A documentação detalhada.",
          "b) O indivíduo e a interação.",
          "c) A entrega final do projeto após anos de desenvolvimento.",
          "d) A divisão clara de papéis e a falta de autonomia.",
        ],
        correta: "b",
      },
      {
        pergunta:
          "4. Os projetos ágeis devem ser geridos em ciclos curtos de aprendizado e entrega contínua. Como são conhecidos esses ciclos curtos?",
        alternativas: [
          "a) Cascatas.",
          "b) Sprints ou iterações.",
          "c) Subestações.",
          "d) Etapas preditivas.",
        ],
        correta: "b",
      },
      {
        pergunta:
          "5. O uso de métricas é essencial para medir o desempenho da equipe. Qual métrica ágil fornece uma visão clara da quantidade de trabalho restante ao longo do tempo?",
        alternativas: [
          "a) Velocity.",
          "b) Daily Stand-up.",
          "c) Burndown Chart.",
          "d) Quadro Kanban.",
        ],
        correta: "c",
      },
      {
        pergunta:
          "6. Assinale a alternativa que apresenta APENAS ferramentas visuais citadas na aula para centralizar informações e facilitar a gestão ágil do trabalho:",
        alternativas: [
          "a) Kanban, Sprints e Retrospectiva.",
          "b) To Do, In Progress e Done.",
          "c) Velocity, Burndown e Massari.",
          "d) JIRA, Trello e Asana.",
        ],
        correta: "d",
      },
    ],
    dissertativas: [
      {
        pergunta:
          "7. Com base na tabela comparativa da aula, explique qual é a principal diferença entre a forma de lidar com as mudanças no método Tradicional e no método Ágil.",
        resposta:
          "No modelo Tradicional, o projeto é planejado para seguir uma sequência de etapas previamente definida, por isso alterações posteriores costumam exigir mais esforço e reorganização. Já no método Ágil, o trabalho é dividido em ciclos menores, permitindo revisar prioridades e adaptar o projeto conforme novos aprendizados surgem.",
      },
      {
        pergunta:
          '8. O que são os chamados "Rituais" no contexto da gestão ágil e qual é o objetivo principal das reuniões diárias (Daily Stand-ups)?',
        resposta:
          "Rituais são encontros organizados que ajudam a equipe a acompanhar o andamento do trabalho e manter a comunicação constante. Na Daily Stand-up, cada integrante compartilha o que realizou, o que pretende fazer e quais obstáculos encontrou, para que os impedimentos sejam identificados e resolvidos rapidamente.",
      },
      {
        pergunta:
          "9. A Retrospectiva é um momento importante de melhoria contínua dentro do modelo ágil. Em que momento ela ocorre e qual é a sua finalidade?",
        resposta:
          "A Retrospectiva acontece ao final de um ciclo de trabalho, como uma sprint, antes do início do próximo. Nesse encontro, a equipe analisa os acertos, as dificuldades e as oportunidades de melhoria, definindo ações práticas para aperfeiçoar o processo nas próximas etapas.",
      },
      {
        pergunta:
          '10. A aula menciona que, dependendo do tipo de projeto, o ágil ou o tradicional isolados podem não ser a solução ideal, introduzindo a ideia de "abordagens híbridas". O que caracteriza uma abordagem híbrida?',
        resposta:
          "Uma abordagem híbrida combina práticas dos modelos Tradicional e Ágil de acordo com as necessidades do projeto. Assim, partes que exigem planejamento e controle podem seguir uma estrutura preditiva, enquanto o desenvolvimento e a validação das soluções podem usar ciclos iterativos e mais flexíveis.",
      },
    ],
    reflexaoIndividual:
      "Resolver as questões objetivas junto com as dissertativas ajudou a amarrar o vocabulário da disciplina (sprints, burndown, rituais, retrospectiva) com os conceitos de fundo — principalmente a ideia de que ágil não é ausência de processo, e sim um processo mais curto e adaptável.",
  },

  {
    id: "atividade-20-08",
    folder: "dia-20-08",
    fileName: "atividade-poo-cenarios.md",
    tipo: "cenarios",
    conceitosPoo: true,
    titulo: "Atividade Prática: Conceitos de POO e Boas Práticas",
    disciplina: "Técnicas de Programação II (TPII) / 3º DSM",
    professora: "Waldinelly Costa",
    data: "20/08/2026",
    integrantes: [
      "Andressa de Souza Engel",
      "Erick Weiller Lansarin",
      "Guilherme Casseb Zullo Do Rosario",
      "Victor César Leite Da Silva",
      "Vitória Caroline Gouveia De Oliveira",
    ],
    orientacao: "Atividade em grupo — entregue via portfólio.",
    implementacaoResumo:
      "Parte 2 (boas práticas) implementada em Python (cenários 1, 2, 3 e 5) e Java (cenário 4), com pseudocódigo e um diagrama de classes UML no cenário 3. Entregue como link para notebook (cenário 1) e prints de código (cenários 2, 3, 4 e 5) — código-fonte completo disponível com o grupo.",
    cenarios: [
      {
        titulo: 'Cenário 1: Sistema de Gestão para a Biblioteca "Saber+"',
        enunciado:
          'A biblioteca "Saber+" está desenvolvendo um novo sistema para controlar seu acervo e os empréstimos de livros. O sistema possui um cadastro geral de "Livro", com título, autor, ano de publicação e quantidade disponível protegidos. As categorias Livro Impresso, E-book e Revista herdam essas informações e possuem características próprias. A ação "Disponibilizar" se comporta de forma diferente conforme o tipo de item.',
        perguntas: [
          {
            pergunta: "Quais seriam as Classes deste sistema?",
            resposta:
              "Livro, Livro Impresso, E-book, Revista, Usuário e Líder.",
          },
          {
            pergunta: "Identifique os Objetos citados no texto.",
            resposta:
              "João e Maria são usuários; A Fundação é um Livro Impresso; e O Pequeno Príncipe é um E-book.",
          },
          {
            pergunta: "Onde está ocorrendo a Herança?",
            resposta:
              "Livro Impresso, E-book e Revista herdam de Livro os atributos gerais e acrescentam características específicas de cada formato.",
          },
          {
            pergunta: "Onde está ocorrendo o Polimorfismo?",
            resposta:
              'Na ação "Disponibilizar", que realiza procedimentos diferentes para livros impressos, e-books e revistas.',
          },
          {
            pergunta: "Como o Encapsulamento foi aplicado neste cenário?",
            resposta:
              "A quantidade disponível fica protegida e só pode ser alterada por uma operação autorizada, que valida o novo valor antes de atualizar o cadastro.",
          },
        ],
        boasPraticas: {
          descricao:
            "Implementação em notebook Python (bibliotecasaber.ipynb), com as classes Livro, LivroImpresso, Ebook e Revista.",
          codigo: null,
        },
      },
      {
        titulo: 'Cenário 2: "BBbank", Sistema de Contas e Correntistas',
        enunciado:
          'O banco "BBbank" possui um cadastro geral de Conta, com titular, número, agência e saldo. O saldo é protegido e só pode ser alterado por métodos como depositar, sacar e transferir. Conta Corrente, Conta Poupança e Conta Investimento herdam de Conta e possuem regras próprias para atualizar saldo e calcular rendimentos.',
        perguntas: [
          {
            pergunta: "Quais seriam as Classes deste sistema?",
            resposta:
              "Conta, Conta Corrente, Conta Poupança, Conta Investimento, Correntista, Atendente e Auditor.",
          },
          {
            pergunta: "Identifique os Objetos citados no texto.",
            resposta:
              "Carla e Rafael são correntistas; CC-4521 é uma Conta Corrente; e CI-8830 é uma Conta Investimento.",
          },
          {
            pergunta: "Onde está ocorrendo a Herança?",
            resposta:
              "As três modalidades de conta herdam de Conta os dados e operações comuns, acrescentando regras específicas.",
          },
          {
            pergunta: "Onde está ocorrendo o Polimorfismo?",
            resposta:
              "No método RenderJuros()/AtualizarSaldo(), que calcula o resultado de maneira diferente para cada tipo de conta.",
          },
          {
            pergunta: "Como o Encapsulamento foi aplicado neste cenário?",
            resposta:
              "O saldo fica protegido e as alterações passam por métodos controlados, com autorização adicional para correções manuais.",
          },
        ],
        boasPraticas: {
          descricao:
            "O atributo __saldo demonstra encapsulamento; ContaCorrente herda de Conta e redefine render_juros(), demonstrando polimorfismo.",
          codigo: null,
        },
      },
      {
        titulo: 'Cenário 3: Sistema de Gestão da Imobiliária "Casa Fácil"',
        enunciado:
          'A imobiliária "Casa Fácil" mantém um cadastro de Imóvel com endereço, preço e tamanho. Casa, Apartamento e Terreno herdam esses dados e possuem atributos próprios. A ação AgendarVisita() muda conforme o tipo de imóvel.',
        perguntas: [
          {
            pergunta: "Quais seriam as Classes deste sistema?",
            resposta: "Imóvel, Casa, Apartamento, Terreno, Cliente e Corretor.",
          },
          {
            pergunta: "Identifique os Objetos citados no texto.",
            resposta:
              "João e Maria são clientes; a casa com três quartos e o apartamento com duas vagas são imóveis específicos.",
          },
          {
            pergunta: "Onde está ocorrendo a Herança?",
            resposta:
              "Casa, Apartamento e Terreno herdam os atributos gerais de Imóvel.",
          },
          {
            pergunta: "Onde está ocorrendo o Polimorfismo?",
            resposta:
              "No método AgendarVisita(), cujo comportamento varia de acordo com o tipo de imóvel.",
          },
          {
            pergunta: "Como o Encapsulamento foi aplicado neste cenário?",
            resposta:
              "Os dados do imóvel ficam protegidos e só podem ser modificados por uma função específica do sistema.",
          },
        ],
        boasPraticas: {
          descricao: "Pseudocódigo e implementação em Python.",
          codigo:
            "class Imovel:\n    def agendar_visita(self):\n        print(\"Agendando visita\")\n\nclass Casa(Imovel):\n    def agendar_visita(self):\n        print(\"Visita na casa\")\n\nclass Apartamento(Imovel):\n    def agendar_visita(self):\n        print(\"Visita no apartamento\")",
        },
      },
      {
        titulo: "Cenário 4: Sistema de uma Clínica Médica",
        enunciado:
          "Uma clínica precisa controlar pacientes, médicos e funcionários. Todos possuem dados básicos, mas cada tipo tem responsabilidades próprias. CPF, telefone e histórico médico devem ser acessados por métodos específicos.",
        perguntas: [
          {
            pergunta: "Quais seriam as classes desse sistema?",
            resposta:
              "Pessoa, Paciente, Médico, Funcionário, Recepcionista, Enfermeiro e Consulta.",
          },
          {
            pergunta: "Identifique os objetos citados no cenário?",
            resposta:
              "Dr. Carlos, João, Maria, Ana e uma consulta entre o médico e o paciente João.",
          },
          {
            pergunta: "Onde está ocorrendo a herança?",
            resposta:
              "Paciente herda de Pessoa, enquanto Recepcionista e Enfermeiro herdam de Funcionário.",
          },
          {
            pergunta: "Onde está ocorrendo o polimorfismo?",
            resposta:
              "Um método como executarFuncao() pode ser redefinido por cada funcionário para executar sua tarefa específica.",
          },
          {
            pergunta: "Como o encapsulamento foi aplicado?",
            resposta:
              "Dados como o CPF ficam privados e são acessados ou alterados por getters e setters controlados.",
          },
        ],
        boasPraticas: {
          descricao:
            "Implementação em Java, com herança e encapsulamento por getters e setters.",
          codigo: null,
        },
      },
      {
        titulo: 'Cenário 5: Sistema de Frota e Entregas para a "EcoExpress"',
        enunciado:
          'A EcoExpress gerencia Veículos com placa, modelo e capacidade. Quilometragem e bateria são protegidas, e a quilometragem só é atualizada pelo sensor GPS quando o novo valor é maior. VanElétrica, BicicletaCargo e DroneEntrega herdam de Veículo e executam RealizarRota() com regras próprias.',
        perguntas: [
          {
            pergunta: "Quais seriam as classes desse sistema?",
            resposta:
              "Veículo, VanElétrica, BicicletaCargo e DroneEntrega.",
          },
          {
            pergunta: "Identifique os objetos citados no cenário?",
            resposta: "EcoVan_01 e SkyFlyer_9.",
          },
          {
            pergunta: "Onde está ocorrendo a herança?",
            resposta:
              "As classes VanElétrica, BicicletaCargo e DroneEntrega herdam características de Veículo.",
          },
          {
            pergunta: "Onde está ocorrendo o polimorfismo?",
            resposta:
              'Na operação "Realizar Rota", que se adapta ao veículo utilizado.',
          },
          {
            pergunta: "Como o encapsulamento foi aplicado?",
            resposta:
              "Quilometragem e bateria ficam protegidas; a quilometragem só muda após a validação do sensor GPS.",
          },
        ],
        boasPraticas: {
          descricao:
            "Pendente — a parte de código/prints deste cenário não foi recebida ainda.",
          codigo: null,
        },
      },
    ],
    reflexaoIndividual:
      "Trabalhar os mesmos três pilares em cinco domínios diferentes deixou claro que POO não é decorar sintaxe, e sim reconhecer uma entidade geral com variações especializadas e ações que mudam conforme o tipo.",
  },

  {
    id: "atividade-24-08-ihc",
    tipo: "cenarios",
    titulo: "Atividade Prática: Uso de IA para gerar Texto base",
    disciplina: "Interação Humano-Computador (IHC) / 3º DSM",
    professora: "Waldinelly Costa",
    data: "24/08/2026",
    orientacao: "Atividade individual — entregue via portfólio.",
    cenarios: [
      {
        titulo: "Geração, Edição e Formatação de Texto via IA",
        enunciado:
          "Nesta atividade, o objetivo foi avaliar o domínio prático na utilização de editores de texto e na aplicação de edições/formatações estruturais, utilizando a IA exclusivamente como suporte para gerar o conteúdo inicial sobre Usabilidade, Acessibilidade e Comunicabilidade.",
        perguntas: [
          {
            pergunta: "Etapa 1: Geração do texto via IA",
            resposta:
              "Foi solicitado a uma IA a geração de um texto com título e um único parágrafo de resumo (entre 200 e 250 palavras) englobando os três temas principais da aula.",
          },
          {
            pergunta: "Etapa 2: Edição e formatação manual",
            resposta:
              "O texto gerado foi levado a um editor (como Word ou Google Docs) e formatado manualmente com regras estritas: Título em Arial 16, negrito e centralizado; Corpo do texto em Arial 12, justificado, espaçamento 1,5, cor preta. Foi expressamente proibido usar a IA para formatar o arquivo final.",
          },
          {
            pergunta: "Etapa 3: Identificação do processo",
            resposta:
              "Após pular 4 linhas, foram documentados os dados da execução: o prompt exato enviado, o nome da IA utilizada, o nome do editor de texto, além do nome completo e matrícula do aluno.",
          },
        ],
      },
    ],
    reflexaoIndividual:
      "Esta atividade ressaltou a importância de saber orquestrar ferramentas de IA. A inteligência artificial entrega a base bruta de forma ágil, mas o refinamento técnico, a adequação visual e o enquadramento nas normas exigem a intervenção humana consciente.",
  },

  {
    id: "atividade-31-08-ihc",
    tipo: "cenarios",
    titulo: "Atividade Prática em Sala: Criação de Persona (App de Restaurante)",
    disciplina: "Interação Humano-Computador (IHC) / 3º DSM",
    professora: "Waldinelly Costa",
    data: "31/08/2026",
    orientacao: "Atividade prática em sala — design visual produzido no Canva.",
    cenarios: [
      {
        titulo: "Modelagem da Persona",
        enunciado:
          "Nossa equipe foi encarregada de projetar um aplicativo mobile para um restaurante local (delivery, retirada, reservas e pagamento). Para garantir o Design Centrado no Usuário, modelamos uma Persona representativa do nosso cliente ideal utilizando o Canva.",
        perguntas: [
          {
            pergunta: "Identificação do Cliente",
            resposta:
              "Definição visual e demográfica, incluindo nome fictício, idade, profissão e um avatar representativo para humanizar a persona.",
          },
          {
            pergunta: "Perfil & Hábitos de Consumo",
            resposta:
              "Mapeamento da rotina diária do cliente, sua frequência de pedidos de comida (delivery ou fora) e o nível de familiaridade e facilidade no uso de smartphones.",
          },
          {
            pergunta: "Objetivos & Desejos",
            resposta:
              "Identificação das metas do usuário ao utilizar o app, como: buscar agilidade para almoçar durante o expediente, conseguir acompanhar o status da entrega em tempo real e encontrar opções de desconto.",
          },
          {
            pergunta: "Dores & Frustrações (Pain Points)",
            resposta:
              "Mapeamento dos problemas enfrentados pelo usuário em soluções concorrentes, como taxas abusivas de entrega, lentidão, cardápios difíceis de navegar e erros frequentes nos pedidos.",
          },
        ],
      },
    ],
    reflexaoIndividual:
      "Construir essa persona transformou um 'usuário genérico' em alguém com rotina, pressa e frustrações reais. Compreender os pain points nos dá um direcionamento muito mais assertivo para desenhar as funcionalidades e a interface do aplicativo do restaurante, focando no que realmente gera valor e alívio para o cliente.",
  },

  {
    id: "atividade-18-09-ihc",
    tipo: "cenarios",
    titulo:
      "Avaliação I: Planejamento de Experiência do Usuário (UX) e Mapeamento de Jornada",
    disciplina: "Interação Humano-Computador (IHC) / 3º DSM",
    professora: "Waldinelly Costa",
    data: "18/09/2026",
    orientacao:
      "Atividade em grupo — Projeto Integrador (PI) — Persona e Mapa de Jornada produzidos no Canva, referentes ao AmbyData.",
    anexoPdf: "avaliacaoIHC.pdf",
    anexoPdfLabel: "Persona + Mapa de Jornada — AmbyData",
    cenarios: [
      {
        titulo: "Persona: João, Gerente de Produção",
        enunciado:
          "Persona representativa do usuário principal do AmbyData, construída para orientar as decisões de IHC do dashboard de monitoramento industrial.",
        perguntas: [
          {
            pergunta: "Perfil & Bio",
            resposta:
              "João, 40 anos, formado em Engenharia da Produção. Trabalha como gerente de produção em uma indústria alimentícia de grande porte em São Paulo.",
          },
          {
            pergunta: "Objetivos",
            resposta:
              "Melhorar a eficiência e reduzir desperdícios na linha de produção; ter acesso rápido a relatórios e gráficos atualizados sobre produtividade, rendimento e custos; tomar decisões baseadas em dados em vez de relatórios manuais demorados.",
          },
          {
            pergunta: "Frustrações (Dores)",
            resposta:
              "Falta de integração entre os sistemas de produção e relatórios; dificuldade em visualizar dados em tempo real; equipe com pouca familiaridade em ferramentas analíticas complexas.",
          },
          {
            pergunta: "Cenário de Uso",
            resposta:
              "No início do turno da manhã, acessa o AmbyData para acompanhar os dados de produção do dia anterior e identificar rapidamente qualquer queda de eficiência.",
          },
        ],
      },
      {
        titulo: "Mapa de Jornada do Usuário",
        enunciado:
          "Jornada de João ao identificar e resolver uma queda de eficiência na linha de produção, do acesso ao painel até a solicitação de manutenção.",
        perguntas: [
          {
            pergunta: "Fase 1 — Acesso ao Painel",
            resposta:
              'Ação: acessa o AmbyData no início do turno da manhã. Pensamento: "Espero que os dados estejam atualizados." Dor: falta de integração entre sistemas de produção e relatórios. Oportunidade de IHC: interface simples e intuitiva, painel organizado.',
          },
          {
            pergunta: "Fase 2 — Visualização dos Dados",
            resposta:
              'Ação: visualiza o painel principal com dados de produção do dia anterior. Pensamento: "Por que a eficiência caiu nesse setor?" Dor: dificuldade em visualizar dados em tempo real. Oportunidade de IHC: gráficos fáceis de entender, alertas por cores.',
          },
          {
            pergunta: "Fase 3 — Diagnóstico da Falha",
            resposta:
              'Ação: usa os gráficos para localizar a máquina responsável pela queda de eficiência. Pensamento: "Achei, é essa máquina." Dor: falta de filtro rápido para localizar falhas. Oportunidade de IHC: filtros para localizar falhas rapidamente.',
          },
          {
            pergunta: "Fase 4 — Ação/Resolução",
            resposta:
              'Ação: solicita manutenção da máquina pelo sistema. Pensamento: "Preciso agir antes que afete o turno." Dor: equipe com pouca familiaridade em ferramentas analíticas. Oportunidade de IHC: notificações em tempo real.',
          },
        ],
      },
    ],
    reflexaoIndividual:
      "Separar Persona e Jornada em artefatos distintos deixou mais claro o papel de cada um: a Persona ancora quem é o usuário e o que ele precisa, enquanto a Jornada revela onde exatamente a interface do AmbyData precisa reduzir atrito — informação que não aparece olhando só o perfil isolado.",
  },
];
