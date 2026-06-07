const profile = {
  // Edite estes dados sempre que quiser atualizar seus contatos, projetos ou certificados.
  contacts: [
    { label: "Instagram", value: "", href: "https://www.instagram.com/luiz_edurd00/", icon: "instagram" },
    { label: "LinkedIn", value: "", href: "https://www.linkedin.com/in/luiz-eduardo-988a451b8/", icon: "linkedin" },
    { label: "GitHub", value: "", href: "https://github.com/Edurd00", icon: "github" },
    { label: "WhatsApp", value: "+55 (11) 94066-2259", href: "https://wa.me/5511940662259", icon: "message-circle" },
    { label: "E-mail", value: "luiizeduardo62@gmail.com", href: "mailto:luiizeduardo62@gmail.com", icon: "mail" },
  ],
  projects: [
    {
      title: "Sistema de Controle Patrimonial",
      description:
        "Demonstração de formulário avançado em duas etapas para digitalizar inventário, validar dados, organizar respostas e integrar informações com Google Sheets via Apps Script.",
      tags: ["HTML5", "CSS3", "JavaScript", "Google Apps Script", "Google Sheets", "TOTVS"],
      demoUrl: "https://controle-patrimonial-ipda.netlify.app/",
      codeUrl: "#",
    },
    {
      title: "Sistema Administrativo de Cadastro de Membros",
      description:
        "Demonstração de formulário responsivo para cadastro, com validação de CPF, bloqueio de duplicidades, máscaras automáticas, feedback visual e armazenamento online.",
      tags: ["HTML5", "CSS3", "JavaScript", "Google Sheets", "Apps Script", "Responsivo"],
      demoUrl: "https://ipda-cadastro-membros.netlify.app/",
      codeUrl: "https://github.com/Edurd00/sistema-cadastro-membros",
    },
    {
      title: "E-commerce para Igrejas e Produtos Personalizados",
      description:
        "Plataforma de comércio eletrônico desenvolvida para igrejas e público cristão, com catálogo organizado por categorias, cálculo automático de orçamento para produtos personalizados, seleção de tamanhos, carrinho de compras, integração com WhatsApp e arquitetura escalável para futuras integrações com banco de dados e painel administrativo.",
      tags: ["HTML5", "Tailwind CSS", "JavaScript", "E-commerce", "Google Sheets", "Responsivo"],
      demoUrl: "https://loja-dani.vercel.app/",
      codeUrl: "https://github.com/Edurd00/loja-do-dani",
    },
    {
      title: "Plataforma de E-commerce SaaS Multi-Nicho",
      description:
        "Sistema completo de gestão de e-commerce com painel administrativo dinâmico. Permite aos lojistas personalizarem sua identidade visual (cores, logo, banner), gerenciarem produtos, categorias e status de pedidos em tempo real. A arquitetura utiliza Supabase para persistência de dados, Tailwind CSS para design responsivo e um fluxo de gestão automatizado via banco de dados, eliminando a necessidade de configurações manuais externas.",
      tags: ["JavaScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Vite", "Painel Administrativo"],
      demoUrl: "https://projeto-multi-plataforma.vercel.app/",
      codeUrl: "https://github.com/Edurd00/projeto-multi-plataforma",
    },
    {
      title: "Sistema para Restaurante Pequeno",
      description:
        "Modelo de projeto em desenvolvimento para pequenos restaurantes, com possibilidade de cardápio online, pedidos via formulário, reservas, cadastro de clientes e organização das informações em planilha.",
      tags: ["HTML5", "CSS3", "JavaScript", "Google Sheets", "Pedidos", "Restaurantes"],
      demoUrl: "#",
      codeUrl: "#",
    },
  ],
  certificates: [
    {
      title: "Inglês",
      issuer: "Curso complementar",
      type: "png",
      fileUrl: "certificados/ingles.png",
      credentialUrl: "https://cursos.alura.com.br/certificate/luiizeduardo63/ingles",
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
      issuer: "Cousera",
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

function renderProjects() {
  projectsGrid.innerHTML = profile.projects
    .map((project) => {
      const demoButton =
        project.demoUrl && project.demoUrl !== "#"
          ? `<a class="link-button" href="${project.demoUrl}" target="_blank" rel="noreferrer">
              <i data-lucide="external-link" class="h-4 w-4"></i>
              Demonstração
            </a>`
          : `<span class="status-pill">
              <i data-lucide="clock-3" class="h-4 w-4"></i>
              Em breve
            </span>`;
      const codeButton =
        project.codeUrl && project.codeUrl !== "#"
          ? `<a class="link-button" href="${project.codeUrl}" target="_blank" rel="noreferrer">
              <i data-lucide="github" class="h-4 w-4"></i>
              Código
            </a>`
          : "";

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
}

function isImageFile(url) {
  return /\.(png|jpe?g|webp|gif|avif)$/i.test(url);
}

function renderCertificates() {
  certificatesGrid.innerHTML = profile.certificates
    .map((certificate) => {
      const preview = isImageFile(certificate.fileUrl)
        ? `<img src="${certificate.fileUrl}" alt="Certificado ${certificate.title}" class="certificate-image" />`
        : `<div class="certificate-file">
            <i data-lucide="file-badge-2"></i>
            <span>${certificate.type || "PDF"}</span>
          </div>`;

      return `
        <article class="certificate-card">
          <div class="certificate-preview">${preview}</div>
          <div class="certificate-content">
            <span>${certificate.issuer}</span>
            <h3>${certificate.title}</h3>
            <a class="link-button" href="${certificate.credentialUrl || certificate.fileUrl}" target="_blank" rel="noreferrer">
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
        <a class="contact-card" href="${contact.href}" target="_blank" rel="noreferrer">
          <i data-lucide="${contact.icon}"></i>
          <strong>${contact.label}<span>${contact.value}</span></strong>
        </a>
      `
    )
    .join("");
}

function setupMenu() {
  menuButton.addEventListener("click", () => {
    const isOpen = !mobileMenu.classList.contains("hidden");
    mobileMenu.classList.toggle("hidden", isOpen);
    menuButton.setAttribute("aria-expanded", String(!isOpen));
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

renderProjects();
renderCertificates();
renderContacts();
setupMenu();
year.textContent = new Date().getFullYear();

if (window.lucide) {
  window.lucide.createIcons();
}
