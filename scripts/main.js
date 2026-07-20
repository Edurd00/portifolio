const profile = {
  // Edite estes dados sempre que quiser atualizar seus contatos, projetos ou certificados.
  contacts: [
    { label: "Instagram", value: "@luiz_edurd00", href: "https://www.instagram.com/luiz_edurd00/", icon: "instagram" },
    { label: "LinkedIn", value: "/in/luiz-eduardo-988a451b8", href: "https://www.linkedin.com/in/luiz-eduardo-988a451b8/", icon: "linkedin" },
    { label: "GitHub", value: "Edurd00", href: "https://github.com/Edurd00", icon: "github" },
    { label: "WhatsApp", value: "+55 (11) 94066-2259", href: "https://wa.me/5511940662259", icon: "message-circle" },
    { label: "E-mail", value: "luiizeduardo62@gmail.com", href: "mailto:luiizeduardo62@gmail.com", icon: "mail" },
  ],
  projects: [
    {
      id: "patrimonial",
      title: "Sistema de Controle Patrimonial",
      category: "form-automation",
      description:
        "Demonstração de formulário avançado em duas etapas para digitalizar inventário, validar dados, organizar respostas e integrar informações com Google Sheets via Apps Script.",
      tags: ["HTML5", "CSS3", "JavaScript", "Google Apps Script", "Google Sheets", "TOTVS"],
      demoUrl: "https://formulario-patrimonio-completo-hwdw.vercel.app/",
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
      id: "ecommerce-igrejas",
      title: "E-commerce para Igrejas e Produtos Personalizados",
      category: "ecommerce-saas",
      description:
        "Plataforma de comércio eletrônico desenvolvida para igrejas e público cristão, com catálogo organizado por categorias, cálculo automático de orçamento para produtos personalizados, seleção de tamanhos, carrinho de compras, integração com WhatsApp e arquitetura escalável para futuras integrações com banco de dados e painel administrativo.",
      tags: ["HTML5", "Tailwind CSS", "JavaScript", "E-commerce", "Google Sheets", "Responsivo"],
      demoUrl: "https://loja-dani.vercel.app/",
      codeUrl: "https://github.com/Edurd00/loja-do-dani",
      challenge: "Falta de um canal simples e eficiente para que membros pudessem escolher produtos e tamanhos personalizados de forma direta, sem processos burocráticos.",
      solution: "E-commerce elegante com catálogo categorizado, carrinho dinâmico de compras com seleção de tamanhos e finalização rápida de orçamentos integrada ao WhatsApp.",
      result: "Aumento expressivo nas solicitações de produtos personalizados, com as informações de pedidos chegando prontas e formatadas para a equipe de atendimento."
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
      fileUrl: "certificados/Analise de Dados e IA.jpeg",
      credentialUrl: "#",
    },
    {
      title: "Inglês",
      issuer: "Curso complementar",
      type: "png",
      fileUrl: "certificados/ingles.png",
      credentialUrl: "#",
    },
    {
      title: "Trilha Alura Power BI",
      issuer: "Alura",
      type: "png",
      fileUrl: "certificados/Power BI.png",
      credentialUrl: "https://cursos.alura.com.br/degree/certificate/326f7d07-dbc8-4661-8f84-98c2e660ed58",
    },
    {
      title: "Engenharia de Prompt para IA Generativa",
      issuer: "Alura",
      type: "png",
      fileUrl: "certificados/engrenharia de prompt.png",
      credentialUrl: "https://cursos.alura.com.br/user/luiizeduardo63/course/engenharia-prompt-criando-prompts-eficazes-ia-generativa/certificate",
    },
    {
      title: "IA: explorando o potencial da inteligência artificial generativa",
      issuer: "Alura",
      type: "png",
      fileUrl: "certificados/IA.png",
      credentialUrl: "https://cursos.alura.com.br/user/luiizeduardo63/course/ia-explorando-potencial-inteligencia-artificial-generativa/certificate",
    },
    {
      title: "Excel: domine o editor de planilhas",
      issuer: "Alura",
      type: "png",
      fileUrl: "certificados/Excel domine o editor de planilhas.png",
      credentialUrl: "https://cursos.alura.com.br/certificate/luiizeduardo63/excel-domine-editor-planilhas",
    },
    {
      title: "Funções com Excel: operações matemáticas e filtros",
      issuer: "Alura",
      type: "png",
      fileUrl: "certificados/Funções com Excel_ operações matemáticas e filtros.png",
      credentialUrl: "https://cursos.alura.com.br/user/luiizeduardo63/course/funcoes-excel-operacoes-matematicas-filtros/certificate",
    },
    {
      title: "Google Data Analytics",
      issuer: "Coursera",
      type: "jpeg",
      fileUrl: "certificados/Google Data Analytics.jpeg",
      credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/SSL9L5PAZAZW",
    },
    {
      title: "Algoritmos e Lógica de Programação",
      issuer: "Udemy",
      type: "png",
      fileUrl: "certificados/Algoritmos e Lógica de Programação.png",
      credentialUrl: "https://www.udemy.com/certificate/UC-bb9feddb-2c78-4bea-8165-f0f16d9e34d8/",
    },
    {
      title: "Power BI Completo - Do Básico ao Avançado",
      issuer: "Udemy",
      type: "png",
      fileUrl: "certificados/Power BI Completo.png",
      credentialUrl: "https://www.udemy.com/certificate/UC-8b395e78-75d8-491f-8b11-4ee54f9ba0fd/",
    },
    {
      title: "Curso Excel COMPLETO do Básico ao Avançado",
      issuer: "Udemy",
      type: "png",
      fileUrl: "certificados/Curso Excel COMPLETO do Básico ao Avançado.png",
      credentialUrl: "https://www.udemy.com/certificate/UC-93341527-4835-44a8-a8af-24af03b81b37/",
    },
  ],
};

const projectsGrid = document.querySelector("#projectsGrid");
const certificatesGrid = document.querySelector("#certificatesGrid");
const contactLinks = document.querySelector("#contactLinks");
const menuButton = document.querySelector("#menuButton");
const mobileMenu = document.querySelector("#mobileMenu");
const year = document.querySelector("#year");

let currentFilter = "all";

function renderProjects(filter = "all") {
  currentFilter = filter;
  const filteredProjects = filter === "all"
    ? profile.projects
    : profile.projects.filter((p) => p.category === filter);

  projectsGrid.innerHTML = filteredProjects
    .map((project) => {
      const demoButton =
        project.demoUrl && project.demoUrl !== "#"
          ? `<a class="link-button" href="${project.demoUrl}" target="_blank" rel="noreferrer" aria-label="Ver demonstração online do projeto ${project.title}">
              <i data-lucide="external-link" class="h-4 w-4"></i>
              Demonstração
            </a>`
          : `<span class="status-pill opacity-75" aria-label="Demonstração do projeto ${project.title} estará disponível em breve">
              <i data-lucide="clock-3" class="h-4 w-4"></i>
              Em breve
            </span>`;
      const codeButton =
        project.codeUrl && project.codeUrl !== "#"
          ? `<a class="link-button" href="${project.codeUrl}" target="_blank" rel="noreferrer" aria-label="Ver código fonte do projeto ${project.title} no GitHub">
              <i data-lucide="github" class="h-4 w-4"></i>
              Código
            </a>`
          : `<span class="status-pill opacity-75 cursor-not-allowed" aria-label="Código fonte do projeto ${project.title} não disponível no momento">
              <i data-lucide="github" class="h-4 w-4"></i>
              Código em breve
            </span>`;

      return `
        <article class="project-card">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="tag-list">
            ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <div class="project-actions">
            ${demoButton}
            ${codeButton}
            <button class="link-button btn-details" data-project-id="${project.id}" aria-label="Ver estudos de caso e detalhes do projeto ${project.title}">
              <i data-lucide="info" class="h-4 w-4 text-sky-400"></i>
              Ver detalhes
            </button>
          </div>
        </article>
      `;
    })
    .join("");

  if (window.lucide) {
    window.lucide.createIcons();
  }
  setupScrollReveal();
}

function setupProjectFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("btn-active"));
      btn.classList.add("btn-active");
      const filterValue = btn.getAttribute("data-filter");
      renderProjects(filterValue);
    });
  });
}

function setupCertificatesModal() {
  const modal = document.querySelector("#certModal");
  const modalContainer = document.querySelector("#certModalContainer");
  const modalImage = document.querySelector("#certModalImage");
  const modalTitle = document.querySelector("#certModalTitle");
  const closeBtn = document.querySelector("#closeCertModal");

  if (!modal || !certificatesGrid) return;

  certificatesGrid.addEventListener("click", (e) => {
    const preview = e.target.closest(".certificate-preview");
    if (preview) {
      const title = preview.getAttribute("data-title");
      const url = preview.getAttribute("data-url");

      modalImage.src = url;
      modalTitle.textContent = title;

      modal.classList.remove("hidden");
      modal.classList.add("flex");

      // Force reflow
      modal.offsetWidth;

      modal.classList.remove("opacity-0");
      modal.classList.add("opacity-100");
      modalContainer.classList.remove("scale-95");
      modalContainer.classList.add("scale-100");
    }
  });

  function closeModal() {
    modal.classList.remove("opacity-100");
    modal.classList.add("opacity-0");
    modalContainer.classList.remove("scale-100");
    modalContainer.classList.add("scale-95");

    setTimeout(() => {
      modal.classList.remove("flex");
      modal.classList.add("hidden");
      modalImage.src = "";
      modalTitle.textContent = "";
    }, 300);
  }

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (!modalContainer.contains(e.target)) {
      closeModal();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
}

function setupProjectDetailsModal() {
  const modal = document.querySelector("#projectDetailsModal");
  const modalContainer = document.querySelector("#projectDetailsContainer");
  const closeBtn = document.querySelector("#closeProjectModal");

  if (!modal || !projectsGrid) return;

  projectsGrid.addEventListener("click", (e) => {
    const detailsBtn = e.target.closest(".btn-details");
    if (detailsBtn) {
      const projectId = detailsBtn.getAttribute("data-project-id");
      const project = profile.projects.find((p) => p.id === projectId);
      if (project) {
        document.querySelector("#projectModalTitle").textContent = project.title;
        document.querySelector("#projectModalChallenge").textContent = project.challenge || "Desafio em breve.";
        document.querySelector("#projectModalSolution").textContent = project.solution || "Solução em breve.";
        document.querySelector("#projectModalResult").textContent = project.result || "Resultados em breve.";

        const techListContainer = document.querySelector("#projectModalTechList");
        techListContainer.innerHTML = project.tags.map(tag => `
          <span class="rounded-full bg-sky-500/10 border border-sky-500/20 px-3 py-1 text-xs font-semibold text-sky-300">${tag}</span>
        `).join("");

        modal.classList.remove("hidden");
        modal.classList.add("flex");

        // Force reflow
        modal.offsetWidth;

        modal.classList.remove("opacity-0");
        modal.classList.add("opacity-100");
        modalContainer.classList.remove("scale-95");
        modalContainer.classList.add("scale-100");

        if (window.lucide) {
          window.lucide.createIcons();
        }
      }
    }
  });

  function closeDetailsModal() {
    modal.classList.remove("opacity-100");
    modal.classList.add("opacity-0");
    modalContainer.classList.remove("scale-100");
    modalContainer.classList.add("scale-95");

    setTimeout(() => {
      modal.classList.remove("flex");
      modal.classList.add("hidden");
    }, 300);
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeDetailsModal);
  }

  modal.addEventListener("click", (e) => {
    if (!modalContainer.contains(e.target)) {
      closeDetailsModal();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeDetailsModal();
    }
  });
}

function isImageFile(url) {
  return /\.(png|jpe?g|webp|gif|avif)$/i.test(url);
}

function renderCertificates() {
  certificatesGrid.innerHTML = profile.certificates
    .map((certificate) => {
      const preview = isImageFile(certificate.fileUrl)
        ? `<img src="${certificate.fileUrl}" alt="Certificado ${certificate.title}" class="certificate-image cursor-pointer" loading="lazy" decoding="async" />`
        : `<div class="certificate-file cursor-pointer">
            <i data-lucide="file-badge-2"></i>
            <span>${certificate.type || "PDF"}</span>
          </div>`;

      const targetUrl = (!certificate.credentialUrl || certificate.credentialUrl === "#" || certificate.credentialUrl.trim() === "")
        ? certificate.fileUrl
        : certificate.credentialUrl;

      return `
        <article class="certificate-card">
          <div class="certificate-preview cursor-pointer" data-title="${certificate.title}" data-url="${certificate.fileUrl}" aria-label="Clique para ampliar o certificado ${certificate.title}">${preview}</div>
          <div class="certificate-content">
            <span>${certificate.issuer}</span>
            <h3>${certificate.title}</h3>
            <a class="link-button" href="${targetUrl}" target="_blank" rel="noreferrer" aria-label="Ver credencial oficial de ${certificate.title} emitida por ${certificate.issuer}">
              <i data-lucide="external-link" class="h-4 w-4"></i>
              Ver certificado
            </a>
          </div>
        </article>
      `;
    })
    .join("");
  setupScrollReveal();
}

function showToast(message) {
  let toast = document.querySelector("#toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notification";
    toast.className = "fixed bottom-6 left-1/2 -translate-x-1/2 z-[20000] flex items-center gap-2 rounded-xl border border-sky-400/30 bg-navy-900/90 px-4 py-3 text-sm font-bold text-sky-200 shadow-2xl backdrop-blur-xl transition-all duration-300 translate-y-12 opacity-0 pointer-events-none";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <i data-lucide="check-circle" class="h-4 w-4 text-emerald-400 shrink-0"></i>
    <span>${message}</span>
  `;
  if (window.lucide) {
    window.lucide.createIcons();
  }

  toast.classList.remove("translate-y-12", "opacity-0", "pointer-events-none");
  toast.classList.add("translate-y-0", "opacity-100");

  setTimeout(() => {
    toast.classList.remove("translate-y-0", "opacity-100");
    toast.classList.add("translate-y-12", "opacity-0", "pointer-events-none");
  }, 2500);
}

function renderContacts() {
  contactLinks.innerHTML = profile.contacts
    .map((contact) => {
      if (contact.label === "E-mail") {
        return `
          <div class="contact-card flex flex-col justify-between items-start gap-3" aria-label="Contato via E-mail: ${contact.value}">
            <div class="flex items-center gap-3 w-full">
              <i data-lucide="${contact.icon}" class="h-5 w-5 text-sky-400 shrink-0"></i>
              <div class="flex-1 min-w-0">
                <strong class="block text-sm font-semibold text-white">E-mail</strong>
                <span class="block text-slate-400 text-xs truncate" id="emailValue">${contact.value}</span>
              </div>
            </div>
            <div class="flex gap-2 w-full mt-2">
              <a href="${contact.href}" target="_blank" rel="noreferrer" class="flex-1 text-center text-[11px] font-bold py-1.5 px-2.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-1" aria-label="Enviar e-mail para ${contact.value}">
                <i data-lucide="send" class="h-3 w-3"></i> Enviar
              </a>
              <button id="copyEmailBtn" class="flex-1 text-center text-[11px] font-bold py-1.5 px-2.5 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 hover:bg-sky-500/20 transition-all flex items-center justify-center gap-1" aria-label="Copiar e-mail para a área de transferência">
                <i data-lucide="copy" class="h-3 w-3"></i> Copiar
              </button>
            </div>
          </div>
        `;
      }
      return `
        <a class="contact-card" href="${contact.href}" target="_blank" rel="noreferrer" aria-label="Acessar ${contact.label} de Luiz Eduardo Silva: ${contact.value}">
          <i data-lucide="${contact.icon}"></i>
          <strong>${contact.label}<span>${contact.value}</span></strong>
        </a>
      `;
    })
    .join("");

  const copyBtn = document.querySelector("#copyEmailBtn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText("luiizeduardo62@gmail.com").then(() => {
        showToast("E-mail copiado!");
      }).catch((err) => {
        console.error("Falha ao copiar: ", err);
      });
    });
  }
}

function setupMenu() {
  function closeMenu() {
    mobileMenu.classList.add("hidden");
    menuButton.setAttribute("aria-expanded", "false");
  }

  function openMenu() {
    mobileMenu.classList.remove("hidden");
    menuButton.setAttribute("aria-expanded", "true");
  }

  menuButton.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = !mobileMenu.classList.contains("hidden");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  document.addEventListener("click", (e) => {
    const isMenuOpen = !mobileMenu.classList.contains("hidden");
    if (isMenuOpen && !mobileMenu.contains(e.target) && !menuButton.contains(e.target)) {
      closeMenu();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const isMenuOpen = !mobileMenu.classList.contains("hidden");
      if (isMenuOpen) {
        closeMenu();
      }
    }
  });
}

let scrollObserver;

function setupScrollReveal() {
  if (!("IntersectionObserver" in window)) return;

  if (scrollObserver) {
    scrollObserver.disconnect();
  }

  scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          scrollObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.05,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  const targets = document.querySelectorAll(
    "main > section, .project-card, .certificate-card, .panel, .feature"
  );

  targets.forEach((el) => {
    if (el.classList.contains("revealed")) return;
    el.classList.add("reveal-element");
    scrollObserver.observe(el);
  });
}

renderProjects();
renderCertificates();
renderContacts();
setupMenu();
setupProjectFilters();
setupCertificatesModal();
setupProjectDetailsModal();
year.textContent = new Date().getFullYear();

if (window.lucide) {
  window.lucide.createIcons();
}
