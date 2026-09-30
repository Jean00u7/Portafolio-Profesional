import "./styles/index.css";

// Ajusta el enlace de inicio a la ruta base del sitio (GitHub Pages).
const link = document.getElementById("home-link");
if (link instanceof HTMLAnchorElement) {
  link.href = import.meta.env.BASE_URL;
}
