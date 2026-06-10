// ── Section toggle ──
const portfolio = document.getElementById("portfolio");
const portfolioBtn = document.getElementById("portfolio-btn");
const skills = document.getElementById("skills");
const skillsBtn = document.getElementById("skills-btn");
const themeBtn = document.getElementById("toggle-theme");
const themeIcon = themeBtn.querySelector("img");
const githubLogo = document.querySelector('a[aria-label="GitHub profile"] img');
const linkedinLogo = document.querySelector('a[aria-label="LinkedIn profile"] img');
const emailLogo = document.querySelector('a[aria-label="Send email"] img');

const lightLogos = {
  github: "assets/github_light.png",
  linkedin: "assets/linkedin_light.png",
  email: "assets/email_light.png",
  theme: "assets/theme_light.png",
};

const darkLogos = {
  github: "assets/github_dark.png",
  linkedin: "assets/linkedin_dark.png",
  email: "assets/email_dark.png",
  theme: "assets/theme_dark.png",
};

function showSection(section) {
  const showSkills = section === "skills";
  portfolio.hidden = showSkills;
  skills.hidden = !showSkills;
  portfolioBtn.classList.toggle("active-btn", !showSkills);
  skillsBtn.classList.toggle("active-btn", showSkills);
  portfolioBtn.setAttribute("aria-selected", String(!showSkills));
  skillsBtn.setAttribute("aria-selected", String(showSkills));
}

function setTheme(isDark) {
  const logos = isDark ? darkLogos : lightLogos;
  githubLogo.src = logos.github;
  linkedinLogo.src = logos.linkedin;
  emailLogo.src = logos.email;
  themeIcon.src = logos.theme;
}

portfolioBtn.addEventListener("click", () => showSection("portfolio"));
skillsBtn.addEventListener("click", () => showSection("skills"));

themeBtn.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-theme");
  localStorage.setItem("isDark", String(isDark));
  setTheme(isDark);
});

const savedDarkMode = localStorage.getItem("isDark") === "true";
document.body.classList.toggle("dark-theme", savedDarkMode);
setTheme(savedDarkMode);

// ── Internationalization (ES / EN) ──

const translations = {
  en: {
    lang_toggle: "ES",
    hero_eyebrow: "Frontend Dev · Data Engineering background",
    hero_title: "Frontend Developer for data-rich products",
    hero_subtitle: "React · TypeScript · Tailwind CSS · Dashboards · Realtime UI",
    hero_copy: "I build polished interfaces for analytical tools, POS systems, realtime monitoring, and media-heavy dashboards — with the data-product judgment that comes from 3+ years in analytics and data engineering.",
    exp1: "featured projects",
    exp2: "years in data products",
    exp3: "timezone overlap",
    cta_download: "Download CV",
    cta_contact: "Contact Me",
    pos_eyebrow: "My work style",
    pos_title: "My projects bridge data analysis with web interfaces.",
    pos_copy: "Most of my strongest projects are dashboards, admin panels, realtime tools, and data-heavy workflows. I enjoy the part where UI craft meets messy real data: clear states, useful charts, API edge cases, responsive layouts, and screens that help people make decisions without fighting the product.",
    tab_portfolio: "Portfolio",
    tab_skills: "Skills",
    proj1_title: "FinPilot — Personal Finance",
    proj1_tech: "React 19 · TypeScript · Recharts · Supabase · PWA",
    proj1_desc: "Realtime finance dashboard with charts, KPI cards, categorization, persistent state, and mobile-first behavior.",
    proj2_title: "Savia Inventory — POS",
    proj2_tech: "React 18 · TypeScript · Tailwind · Supabase",
    proj2_desc: "Restaurant POS and operations platform with complex cart state, split payments, inventory modules, analytics, and AI strategy support.",
    proj3_title: "Casa — Facial Access",
    proj3_tech: "React 19 · Supabase · Recharts · Media UI",
    proj3_desc: "Realtime dashboard for a Raspberry Pi facial-recognition system with device metrics, camera previews, logs, remote commands, and video playback.",
    proj4_title: "Fondo Fortuna",
    proj4_tech: "React 19 · Tailwind · Recharts · Firebase",
    proj4_desc: "Cooperative management platform with role-based routing, dashboards, loan/savings flows, mobile cart, and Gemini-powered financial advisor.",
    proj5_title: "Bosques del Limonar",
    proj5_tech: "React 18 · TypeScript · GSAP · Framer Motion",
    proj5_desc: "Premium landing page with scroll-triggered motion, parallax, responsive visual storytelling, and reduced-motion support.",
    proj6_title: "SAVIA — Digital Menu",
    proj6_tech: "React 19 · Tailwind · Vanilla JS · JSON",
    proj6_desc: "Fast digital menu with JSON data, live search, responsive layout, print stylesheet, and GitHub Pages deployment.",
    proj7_title: "MotoShop Data Platform",
    proj7_tech: "Next.js 14 · FastAPI · DuckDB · Recharts · PWA",
    proj7_desc: "Digital transformation platform for a motorcycle parts business: ETL, data products, SKU search, dashboards, forecasting, and AI-assisted operational insights.",
    proj8_title: "Sign Language Recognition",
    proj8_tech: "Streamlit · gRPC · Docker · YOLO · ONNX",
    proj8_desc: "Microservice-based computer vision system: Streamlit UI sends image/video frames to a gRPC inference service running a YOLO model exported to ONNX.",
    proj9_title: "Qbano Conversational Agent",
    proj9_tech: "Streamlit · FastAPI · LangChain · LangGraph · RAG",
    proj9_desc: "Academic LLM agent for Sandwich Qbano with RAG, memory, prompt experiments, FastAPI endpoints, batch evaluation, and n8n workflow documentation.",
    skill_fe: "Frontend",
    skill_data_ui: "Data UI",
    skill_state: "State & APIs",
    skill_interaction: "Interaction",
    skill_quality: "Quality",
    skill_data_bg: "Data Background",
    skill_lang: "Languages",
    skill_native: "Spanish Native",
    skill_remote: "US Remote Collaboration",
    footer: "\u00a9 Javier Portilla Rosero 2026",
  },

  es: {
    lang_toggle: "EN",
    hero_eyebrow: "Frontend Dev · Background en Datos",
    hero_title: "Frontend Developer especializado en productos de datos",
    hero_subtitle: "React · TypeScript · Tailwind CSS · Dashboards · UI en Tiempo Real",
    hero_copy: "Creo interfaces que funcionan bien para herramientas de análisis, sistemas POS, monitoreo en tiempo real y dashboards con video. Mi experiencia en datos me ayuda a entender cómo se comporta la información real y a diseñar pantallas que resuelven problemas de verdad.",
    exp1: "proyectos destacados",
    exp2: "años trabajando con datos",
    exp3: "horario compatible con US Eastern Time",
    cta_download: "Descargar CV",
    cta_contact: "Contáctame",
    pos_eyebrow: "Mi estilo de trabajo",
    pos_title: "Mis proyectos unen el análisis de datos con interfaces web.",
    pos_copy: "Mis proyectos se basan en dashboards, paneles administrativos, herramientas en tiempo real y flujos de trabajo con muchos datos. Me gusta la parte donde el diseño se encuentra con datos reales y complicados: estados bien manejados, gráficos útiles, casos borde de APIs, layouts responsivos y pantallas que realmente ayudan a tomar decisiones.",
    tab_portfolio: "Portafolio",
    tab_skills: "Habilidades",
    proj1_title: "FinPilot — Finanzas Personales",
    proj1_tech: "React 19 · TypeScript · Recharts · Supabase · PWA",
    proj1_desc: "Dashboard financiero que se actualiza en tiempo real, con gráficos, tarjetas de indicadores, categorización inteligente de gastos y diseño pensado primero para móvil.",
    proj2_title: "Savia Inventory — POS",
    proj2_tech: "React 18 · TypeScript · Tailwind · Supabase",
    proj2_desc: "Sistema POS para restaurante con carrito de compras inteligente, pagos divididos entre varias formas de pago, control de inventario, analítica de ventas y estrategias generadas por IA.",
    proj3_title: "Casa — Acceso Facial",
    proj3_tech: "React 19 · Supabase · Recharts · UI Multimedia",
    proj3_desc: "Dashboard en vivo para un sistema de reconocimiento facial en Raspberry Pi. Muestra métricas del dispositivo, vista previa de cámara, registros, comandos remotos y reproducción de video.",
    proj4_title: "Fondo Fortuna",
    proj4_tech: "React 19 · Tailwind · Recharts · Firebase",
    proj4_desc: "Plataforma para cooperativa con diferentes vistas según el rol, dashboards financieros, gestión de préstamos y ahorros, carrito de compras móvil y un asesor financiero con IA de Gemini.",
    proj5_title: "Bosques del Limonar",
    proj5_tech: "React 18 · TypeScript · GSAP · Framer Motion",
    proj5_desc: "Landing page con animaciones suaves al hacer scroll, efecto parallax, diseño responsivo y soporte para personas que prefieren movimiento reducido.",
    proj6_title: "SAVIA — Menú Digital",
    proj6_tech: "React 19 · Tailwind · JS Vanilla · JSON",
    proj6_desc: "Menú digital rápido con datos en JSON, búsqueda en vivo, layout responsivo, hoja de estilos para impresión y despliegue en GitHub Pages.",
    proj7_title: "MotoShop Data Platform",
    proj7_tech: "Next.js 14 · FastAPI · DuckDB · Recharts · PWA",
    proj7_desc: "Plataforma de transformación digital para un negocio de motopartes: ETL, productos de datos, búsqueda SKU, dashboards, forecasting y asistencia operativa con IA.",
    proj8_title: "Reconocimiento de Lenguaje de Señas",
    proj8_tech: "Streamlit · gRPC · Docker · YOLO · ONNX",
    proj8_desc: "Sistema de visión por computadora basado en microservicios: la UI en Streamlit envía imágenes y video a un servicio de inferencia gRPC con un modelo YOLO exportado a ONNX.",
    proj9_title: "Agente Conversacional Qbano",
    proj9_tech: "Streamlit · FastAPI · LangChain · LangGraph · RAG",
    proj9_desc: "Agente académico con LLM para Sandwich Qbano usando RAG, memoria conversacional, experimentos con prompts, endpoints FastAPI y evaluación automatizada.",
    skill_fe: "Frontend",
    skill_data_ui: "UI de Datos",
    skill_state: "Estado y APIs",
    skill_interaction: "Interacción",
    skill_quality: "Calidad",
    skill_data_bg: "Experiencia en Datos",
    skill_lang: "Idiomas",
    skill_native: "Español Nativo",
    skill_remote: "Trabajo remoto con equipos en US",
    footer: "\u00a9 Javier Portilla Rosero 2026",
  },
};

let currentLang = localStorage.getItem("lang") || "en";

function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  document.documentElement.lang = lang === "es" ? "es" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  // Update toggle button text (shows the OTHER language)
  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.textContent = t.lang_toggle;
    langBtn.setAttribute("aria-label", lang === "en" ? "Cambiar a español" : "Switch to English");
    langBtn.setAttribute("title", lang === "en" ? "Español / English" : "English / Español");
  }

  currentLang = lang;
  localStorage.setItem("lang", lang);
}

// Language toggle
document.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      const next = currentLang === "en" ? "es" : "en";
      applyLanguage(next);
    });
  }

  // Apply saved language
  applyLanguage(currentLang);
});
