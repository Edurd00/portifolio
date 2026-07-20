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
      title: "Sistema de Controle Patrimonial",
      category: "form-automation",
      description:
        "Demonstração de formulário avançado em duas etapas para digitalizar inventário, validar dados, organizar respostas e integrar informações com Google Sheets via Apps Script.",
      tags: ["HTML5", "CSS3", "JavaScript", "Google Apps Script", "Google Sheets", "TOTVS"],
      demoUrl: "https://formulario-patrimonio-completo-hwdw.vercel.app/",
      codeUrl: "#",
    },
    {
      title: "Sistema Administrativo de Cadastro de Membros",
      category: "form-automation",
      description:
        "Demonstração de formulário responsivo para cadastro, com validação de CPF, bloqueio de duplicidades, máscaras automáticas, feedback visual e armazenamento online.",
      tags: ["HTML5", "CSS3", "JavaScript", "Google Sheets", "Apps Script", "Responsivo"],
      demoUrl: "https://ipda-cadastro-membros.netlify.app/",
      codeUrl: "https://github.com/Edurd00/sistema-cadastro-membros",
    },
    {
      title: "E-commerce para Igrejas e Produtos Personalizados",
      category: "ecommerce-saas",
      description:
        "Plataforma de comércio eletrônico desenvolvida para igrejas e público cristão, com catálogo organizado por categorias, cálculo automático de orçamento para produtos personalizados, seleção de tamanhos, carrinho de compras, integração com WhatsApp e arquitetura escalável para futuras integrações com banco de dados e painel administrativo.",
      tags: ["HTML5", "Tailwind CSS", "JavaScript", "E-commerce", "Google Sheets", "Responsivo"],
      demoUrl: "https://loja-dani.vercel.app/",
      codeUrl: "https://github.com/Edurd00/loja-do-dani",
    },
    {
      title: "Plataforma de E-commerce SaaS Multi-Nicho",
      category: "ecommerce-saas",
      description:
        "Sistema completo de gestão de e-commerce com painel administrativo dinâmico. Permite aos lojistas personalizarem sua identidade visual (cores, logo, banner), gerenciarem produtos, categorias e status de pedidos em tempo real. A arquitetura utiliza Supabase para persistência de dados, Tailwind CSS para design responsivo e um fluxo de gestão automatizado via banco de dados, eliminando a necessidade de configurações manuais externas.",
      tags: ["JavaScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Vite", "Painel Administrativo"],
      demoUrl: "https://meu-catalogo-profissional.vercel.app/",
      codeUrl: "https://github.com/Edurd00/projeto-multi-plataforma",
    },
    {
      title: "Sistema para Restaurante Pequeno",
      category: "form-automation",
      description:
        "Modelo de projeto em desenvolvimento para pequenos restaurantes, com possibilidade de cardápio online, pedidos via formulário, reservas, cadastro de clientes e organização das informações em planilha.",
      tags: ["HTML5", "CSS3", "JavaScript", "Google Sheets", "Pedidos", "Restaurantes"],
      demoUrl: "#",
      codeUrl: "#",
    },
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
          </div>
        </article>
      `;
    })
    .join("");

  if (window.lucide) {
    window.lucide.createIcons();
  }
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

function isImageFile(url) {
  return /\.(png|jpe?g|webp|gif|avif)$/i.test(url);
}

function renderCertificates() {
  certificatesGrid.innerHTML = profile.certificates
    .map((certificate) => {
      const preview = isImageFile(certificate.fileUrl)
        ? `<img src="${certificate.fileUrl}" alt="Certificado ${certificate.title}" class="certificate-image cursor-pointer" />`
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
}

function renderContacts() {
  contactLinks.innerHTML = profile.contacts
    .map(
      (contact) => `
        <a class="contact-card" href="${contact.href}" target="_blank" rel="noreferrer" aria-label="Acessar ${contact.label} de Luiz Eduardo Silva: ${contact.value}">
          <i data-lucide="${contact.icon}"></i>
          <strong>${contact.label}<span>${contact.value}</span></strong>
        </a>
      `
    )
    .join("");
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

renderProjects();
renderCertificates();
renderContacts();
setupMenu();
setupProjectFilters();
setupCertificatesModal();
year.textContent = new Date().getFullYear();

if (window.lucide) {
  window.lucide.createIcons();
}
