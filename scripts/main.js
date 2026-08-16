import { profile } from "./data.js";

const projectsGrid = document.querySelector("#projectsGrid");
const certificatesGrid = document.querySelector("#certificatesGrid");
const contactLinks = document.querySelector("#contactLinks");
const menuButton = document.querySelector("#menuButton");
const mobileMenu = document.querySelector("#mobileMenu");
const year = document.querySelector("#year");

let currentFilter = "all";

function createIconsOrFallback() {
  if (window.lucide) {
    window.lucide.createIcons();
  } else {
    const lucideFallbackMap = {
      "external-link": "🔗",
      "github": "📁 [GitHub]",
      "instagram": "📸 [Instagram]",
      "linkedin": "💼 [LinkedIn]",
      "message-circle": "💬",
      "mail": "✉️ [E-mail]",
      "menu": "☰ Menu",
      "x": "✕ Fechar",
      "download": "⬇️",
      "briefcase-business": "💼",
      "send": "✉️",
      "info": "ℹ️",
      "alert-circle": "⚠️",
      "check-circle-2": "✅",
      "check-circle": "✅",
      "trending-up": "📈",
      "clock-3": "🕒",
      "calculator": "🧮",
      "file-badge-2": "📄",
    };

    const icons = document.querySelectorAll("i[data-lucide]");
    icons.forEach((icon) => {
      if (!icon.getAttribute("data-fallback-applied")) {
        const iconName = icon.getAttribute("data-lucide");
        const fallbackText = lucideFallbackMap[iconName] || `[${iconName.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}]`;
        icon.textContent = fallbackText;
        icon.style.fontStyle = "normal";
        icon.style.fontWeight = "bold";
        icon.setAttribute("data-fallback-applied", "true");
      }
    });
  }
}

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

  createIconsOrFallback();
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

        createIconsOrFallback();
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
  createIconsOrFallback();

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

function setupBudgetSimulator() {
  const checkboxes = document.querySelectorAll(".service-checkbox");
  const priceDisplay = document.querySelector("#calc-price");
  const timeDisplay = document.querySelector("#calc-time");
  const whatsappBtn = document.querySelector("#calc-whatsapp-btn");

  if (!checkboxes.length || !priceDisplay || !timeDisplay || !whatsappBtn) return;

  function updateEstimation() {
    let totalPrice = 0;
    let totalTime = 0;
    const selectedServices = [];

    checkboxes.forEach((cb) => {
      if (cb.checked) {
        const price = parseInt(cb.getAttribute("data-price"), 10) || 0;
        const time = parseInt(cb.getAttribute("data-time"), 10) || 0;
        const name = cb.getAttribute("data-name") || "";

        totalPrice += price;
        totalTime += time;
        selectedServices.push(`- ${name} (R$ ${price.toLocaleString("pt-BR")}, Prazo: ${time} dias)`);
      }
    });

    if (selectedServices.length === 0) {
      priceDisplay.textContent = "R$ 0,00";
      timeDisplay.textContent = "0 dias úteis";
      whatsappBtn.classList.add("opacity-50", "pointer-events-none", "cursor-not-allowed");
      whatsappBtn.setAttribute("aria-disabled", "true");
      whatsappBtn.href = "#";
      return;
    }

    whatsappBtn.classList.remove("opacity-50", "pointer-events-none", "cursor-not-allowed");
    whatsappBtn.removeAttribute("aria-disabled");

    priceDisplay.textContent = `R$ ${totalPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`;
    timeDisplay.textContent = `${totalTime} ${totalTime === 1 ? "dia útil" : "dias úteis"}`;

    const formattedPrice = totalPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    const formattedTime = `${totalTime} ${totalTime === 1 ? "dia útil" : "dias úteis"}`;

    const message = `Olá Luiz, realizei uma simulação de orçamento no seu portfólio para os seguintes serviços:\n\n` +
      selectedServices.join("\n") +
      `\n\n*Investimento Total Estimado:* R$ ${formattedPrice}` +
      `\n*Prazo Total Estimado:* ${formattedTime}` +
      `\n\nGostaria de iniciar o projeto e agendar uma conversa!`;

    const encodedMessage = encodeURIComponent(message);
    whatsappBtn.href = `https://wa.me/5511940662259?text=${encodedMessage}`;
  }

  checkboxes.forEach((cb) => {
    cb.addEventListener("change", updateEstimation);
  });

  // Run once initially to pre-populate with checked items
  updateEstimation();
}

function setupFaqAccordion() {
  const triggers = document.querySelectorAll(".faq-trigger");
  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".faq-item");
      const content = item.querySelector(".faq-content");
      const isExpanded = trigger.getAttribute("aria-expanded") === "true";

      // Close all other FAQ items
      document.querySelectorAll(".faq-item").forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          const otherTrigger = otherItem.querySelector(".faq-trigger");
          if (otherTrigger) {
            otherTrigger.setAttribute("aria-expanded", "false");
          }
          const otherContent = otherItem.querySelector(".faq-content");
          if (otherContent) {
            otherContent.style.maxHeight = "0px";
          }
        }
      });

      if (isExpanded) {
        item.classList.remove("active");
        trigger.setAttribute("aria-expanded", "false");
        content.style.maxHeight = "0px";
      } else {
        item.classList.add("active");
        trigger.setAttribute("aria-expanded", "true");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
}

renderProjects();
renderCertificates();
renderContacts();
setupMenu();
setupProjectFilters();
setupCertificatesModal();
setupProjectDetailsModal();
setupBudgetSimulator();
setupFaqAccordion();
year.textContent = new Date().getFullYear();

createIconsOrFallback();
