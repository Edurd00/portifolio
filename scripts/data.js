export const profile = {
  // Edite estes dados sempre que quiser atualizar seus contatos, projetos ou certificados.
  contacts: [
    { label: "Instagram", value: "@luiz_edurd00", href: "https://www.instagram.com/luiz_edurd00/", icon: "instagram" },
    { label: "LinkedIn", value: "/in/luiz-eduardo-988a451b8", href: "https://www.linkedin.com/in/luiz-eduardo-988a451b8/", icon: "linkedin" },
    { label: "GitHub", value: "Edurd00", href: "https://github.com/Edurd00", icon: "github" },
    { label: "WhatsApp", value: "+55 (11) 94066-2259", href: "https://wa.me/5511940662259", icon: "message-circle" },
    { label: "E-mail", value: "luiizeduardo63@gmail.com", href: "mailto:luiizeduardo63@gmail.com", icon: "mail" },
  ],
  projects: [
 
  {
  id: "localizacao-ipda",
  title: "Localização IPDA - Sistema GEO-VALIG",
  category: "full-stack-web",
  description:
    "Sistema geoespacial robusto para validação e visualização de 12.000+ unidades eclesiásticas, com integração de grafos hierárquicos, clustering dinâmico por estados e processamento de dados em larga escala.",
  tags: ["Next.js", "TypeScript", "Leaflet", "PostgreSQL", "Superbase", "Tailwind CSS"],
  demoUrl: "https://geolocalizacoes-ipda.vercel.app/",
  codeUrl: "#",
  challenge: "A gestão de mais de 12.000 unidades físicas exigia um controle geográfico descentralizado e inconsistente, com a necessidade urgente de visualizar hierarquias corporativas complexas (coligações) em um mapa de alta precisão.",
  solution: "Desenvolvemos um ecossistema completo em Next.js com processamento de geocoding, armazenamento em Neon DB, e um front-end interativo com Leaflet. Implementamos um motor de grafos para desenhar conexões hierárquicas dinâmicas e clustering inteligente segmentado por regiões geográficas.",
  result: "Centralização do controle geográfico da instituição, permitindo navegação fluida entre milhares de pontos, automação no cálculo de hierarquias de coligações e suporte a operações de alta carga com processamento em lote (Bulk Upsert)."
},
    {
      id: "patrimonial",
      title: "Sistema de Controle Patrimonial",
      category: "form-automation",
      description:
        "Demonstração de formulário avançado em duas etapas para digitalizar inventário, validar dados, organizar respostas e integrar informações com Google Sheets via Apps Script.",
      tags: ["HTML5", "CSS3", "JavaScript", "Google Apps Script", "Google Sheets", "TOTVS"],
      demoUrl: "https://formulario-patrimonio.vercel.app/",
      codeUrl: "#",
      challenge: "Equipes de logística e patrimônio gastavam horas com formulários em papel ou controles locais inconsistentes, gerando desorganização e perda de informações históricas no inventário.",
      solution: "Criamos um formulário web inteligente em duas etapas com validações rigorosas e integração direta via Google Apps Script para o Google Sheets, salvando as informações em tempo real e de forma segura.",
      result: "Redução de 90% no tempo de digitação de dados de inventário, eliminação de duplicidades e visualização de planilhas com relatórios unificados atualizados automaticamente."
    },
    {
      id: "cadastro-membros",
      title: "Sistema Administrativo de Cadastro de Membros",
      category: "form-automation",
      description:
        "Demonstração de formulário responsivo para cadastro, com validação de CPF, bloqueio de duplicidades, máscaras automáticas, feedback visual e armazenamento online.",
      tags: ["HTML5", "CSS3", "JavaScript", "Google Sheets", "Apps Script", "Responsivo"],
      demoUrl: "https://ipda-cadastro-membros.netlify.app/",
      codeUrl: "https://github.com/Edurd00/sistema-cadastro-membros",
      challenge: "Inconsistências no registro de membros, como CPF inválido, registros duplicados e preenchimentos confusos que afetavam as tomadas de decisões internas da instituição.",
      solution: "Formulário responsivo com máscaras automatizadas de preenchimento, validação de CPF pontual e verificação de duplicidade diretamente em uma base online do Google Sheets.",
      result: "Cadastro de novos registros unificado, limpo e à prova de falhas com relatórios prontos e acessíveis pelo celular ou computador."
    },
       {
  id: "anderson-streaming",
  title: "Landing Page para Serviço de Streaming / IPTV",
  category: "landing-page",
  description:
    "Landing page de alta conversão desenvolvida para serviços de streaming e IPTV, com design dark moderno, acentos em dourado, mockups interativos de telas e integração direta de vendas via WhatsApp.",
  tags: ["HTML5", "Tailwind CSS", "JavaScript", "Landing Page", "UI/UX", "Conversão"],
  demoUrl: "https://andersonsreaming-iptv.vercel.app/",
  codeUrl: "#",
  challenge: "Serviços de streaming e IPTV frequentemente enfrentam desconfiança de clientes e dificuldades na exibição de planos de assinatura, necessitando de uma interface visualmente profissional e de navegação intuitiva.",
  solution: "Desenvolvimento de uma landing page responsiva em Tailwind CSS com tema escuro de luxo (gold glow), simuladores visuais de aplicativo para Smart TV e mobile, seção dinâmica de FAQ interativo em JS e CTAs diretos direcionando para o WhatsApp.",
  result: "Aumento na taxa de conversão para solicitações de testes grátis, excelente velocidade de carregamento e melhoria imediata na percepção de valor e autoridade do serviço."
},
    {
      id: "ecommerce-saas",
      title: "Plataforma de E-commerce SaaS Multi-Nicho",
      category: "ecommerce-saas",
      description:
        "Sistema completo de gestão de e-commerce com painel administrativo dinâmico. Permite aos lojistas personalizarem sua identidade visual (cores, logo, banner), gerenciarem produtos, categorias e status de pedidos em tempo real. A arquitetura utiliza Supabase para persistência de dados, Tailwind CSS para design responsivo e um fluxo de gestão automatizado via banco de dados, eliminando a necessidade de configurações manuais externas.",
      tags: ["JavaScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Vite", "Painel Administrativo"],
      demoUrl: "https://meu-catalogo-profissional.vercel.app/",
      codeUrl: "https://github.com/Edurd00/projeto-multi-plataforma",
      challenge: "Pequenos lojistas necessitavam de uma ferramenta dinâmica e independente para gerenciar múltiplos catálogos sem precisar lidar com integrações de código complexas.",
      solution: "Desenvolvemos um ecossistema SaaS completo com banco de dados PostgreSQL integrado via Supabase e um painel de controle administrativo customizado com Tailwind CSS.",
      result: "Autonomia completa para gerenciar produtos, cadastros e status de pedidos instantaneamente, centralizado sob uma única arquitetura robusta."
    },
    {
      id: "restaurante",
      title: "Sistema para Restaurante Pequeno",
      category: "form-automation",
      description:
        "Modelo de projeto em desenvolvimento para pequenos restaurantes, com possibilidade de cardápio online, pedidos via formulário, reservas, cadastro de clientes e organização das informações em planilha.",
      tags: ["HTML5", "CSS3", "JavaScript", "Google Sheets", "Pedidos", "Restaurantes"],
      demoUrl: "#",
      codeUrl: "#",
      challenge: "Estabelecimentos locais lidam frequentemente com pedidos manuais via chamadas telefônicas ou mensagens soltas, dificultando a gestão do cardápio e das mesas em tempo real.",
      solution: "Protótipo focado em um painel interativo de reservas e pedidos via formulários simplificados, gerando ordens de produção salvas e estruturadas diretamente no Google Sheets.",
      result: "Otimização do tempo de recepção de pedidos, eliminação de mal-entendidos e melhor controle dos fluxos internos de atendimento."
    }
  ],
  certificates: [
     {
      title: "Trilha Analise de Dados e IA",
      issuer: "Curso complementar",
      type: "png",
      fileUrl: "certificados/analise-de-dados-e-ia.jpeg",
      credentialUrl: "#",
    },
    // {
    //   title: "Inglês",
    //   issuer: "Curso complementar",
    //   type: "png",
    //   fileUrl: "certificados/ingles.png",
    //   credentialUrl: "#",
    // },
    {
      title: "Trilha Alura Power BI",
      issuer: "Alura",
      type: "png",
      fileUrl: "certificados/power-bi.png",
      credentialUrl: "https://cursos.alura.com.br/degree/certificate/326f7d07-dbc8-4661-8f84-98c2e660ed58",
    },
    {
      title: "Engenharia de Prompt para IA Generativa",
      issuer: "Alura",
      type: "png",
      fileUrl: "certificados/engenharia-de-prompt.png",
      credentialUrl: "https://cursos.alura.com.br/user/luiizeduardo63/course/engenharia-prompt-criando-prompts-eficazes-ia-generativa/certificate",
    },
    // {
    //   title: "IA: explorando o potencial da inteligência artificial generativa",
    //   issuer: "Alura",
    //   type: "png",
    //   fileUrl: "certificados/ia.png",
    //   credentialUrl: "https://cursos.alura.com.br/user/luiizeduardo63/course/ia-explorando-potencial-inteligencia-artificial-generativa/certificate",
    // },
    // {
    //   title: "Excel: domine o editor de planilhas",
    //   issuer: "Alura",
    //   type: "png",
    //   fileUrl: "certificados/excel-domine-o-editor-de-planilhas.png",
    //   credentialUrl: "https://cursos.alura.com.br/certificate/luiizeduardo63/excel-domine-editor-planilhas",
    // },
    // {
    //   title: "Funções com Excel: operações matemáticas e filtros",
    //   issuer: "Alura",
    //   type: "png",
    //   fileUrl: "certificados/funcoes-com-excel-operacoes-matematicas-e-filtros.png",
    //   credentialUrl: "https://cursos.alura.com.br/user/luiizeduardo63/course/funcoes-excel-operacoes-matematicas-filtros/certificate",
    // },
    {
      title: "Google Data Analytics",
      issuer: "Coursera",
      type: "jpeg",
      fileUrl: "certificados/google-data-analytics.jpeg",
      credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/SSL9L5PAZAZW",
    },
    {
      title: "Algoritmos e Lógica de Programação",
      issuer: "Udemy",
      type: "png",
      fileUrl: "certificados/algoritmos-e-logica-de-programacao.png",
      credentialUrl: "https://www.udemy.com/certificate/UC-bb9feddb-2c78-4bea-8165-f0f16d9e34d8/",
    },
    {
      title: "Power BI Completo - Do Básico ao Avançado",
      issuer: "Udemy",
      type: "png",
      fileUrl: "certificados/power-bi-completo.png",
      credentialUrl: "https://www.udemy.com/certificate/UC-8b395e78-75d8-491f-8b11-4ee54f9ba0fd/",
    },
    {
      title: "Curso Excel COMPLETO do Básico ao Avançado",
      issuer: "Udemy",
      type: "png",
      fileUrl: "certificados/curso-excel-completo-do-basico-ao-avancado.png",
      credentialUrl: "https://www.udemy.com/certificate/UC-93341527-4835-44a8-a8af-24af03b81b37/",
    },
  ],
};
