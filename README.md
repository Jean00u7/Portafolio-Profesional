# Portafolio de Jean Paul Marchant

Sitio personal de Jean Paul Marchant Lillo: Técnico Analista Programador, soporte TI e infraestructura en un establecimiento educacional, estudiante de Ingeniería en Informática. Rancagua, Chile.

Sitio estático, sin base de datos ni servicios de pago. Se publica en GitHub Pages.

## Tecnologías

- React 19 + TypeScript
- Vite 6
- Tailwind CSS 4
- Lucide (íconos)
- GitHub Actions para publicar en GitHub Pages

## Características

- Una sola página: inicio, sobre mí, experiencia, formación, habilidades, proyectos y contacto.
- Modo claro y oscuro (sigue al sistema y recuerda la elección).
- Estados de proyecto: finalizado, en desarrollo, planificado.
- Datos separados de la interfaz: todo se edita en `src/data/`.
- Campos vacíos no se publican. En local muestran el aviso "Falta completar".
- Botón para descargar el CV en PDF.
- SEO, Open Graph, favicon y página 404.

## Estructura

```
.github/workflows/deploy.yml   Publicación automática
public/documents/              CV en PDF
public/favicon/                Íconos
public/images/                 Foto e imagen para redes sociales
src/data/                      TUS DATOS (perfil, experiencia, formación, habilidades, proyectos)
src/sections/                  Secciones de la página
src/components/                Piezas reutilizables
src/styles/index.css           Colores y estilos
```

## Instalación local

Requisitos: Node.js 20 o superior (recomendado 22) y Git.

```bash
# 1. Descomprime el proyecto y entra a la carpeta
cd portafolio

# 2. Instala dependencias
npm install

# 3. Levanta el sitio en modo desarrollo
npm run dev
```

Abre la dirección que muestra la terminal (normalmente http://localhost:5173).

Para probar la versión final:

```bash
npm run build
npm run preview
```

## Personalizar

Todo se edita en `src/data/`. No hace falta tocar componentes.

| Archivo | Contenido |
|---|---|
| `profile.ts` | Nombre, presentación, correo, LinkedIn, GitHub, foto, CV |
| `experience.ts` | Experiencia laboral |
| `education.ts` | Estudios y certificaciones |
| `skills.ts` | Habilidades por grupo |
| `projects.ts` | Proyectos |

Pendientes marcados con "Falta completar" en `npm run dev`:

1. `profile.ts`: `email`, `linkedin`, `github`.
2. `experience.ts`: fecha de inicio en el Colegio Leonardo da Vinci (`start`).
3. `education.ts`: institución de Ingeniería en Informática.
4. `projects.ts`: enlaces `repo` y `demo`.

Reglas:

- `hidden: true` oculta un elemento en el sitio publicado. En local sigue visible con la etiqueta "Oculto en producción".
- En `projects.ts`, `features` es solo lo que ya funciona. Lo siguiente va en `next`.
- Estados de proyecto: `"finalizado"`, `"en-desarrollo"`, `"planificado"`.

### Foto

Copia la imagen en `public/images/foto.jpg` (cuadrada, 400 × 400 px, menos de 100 KB) y en `profile.ts` escribe `photo: "images/foto.jpg"`.

### CV

Reemplaza `public/documents/CV-Jean-Paul-Marchant.pdf` por tu CV, con el mismo nombre. El PDF incluido es provisional: revísalo antes de publicar.

### Colores y tipografía

En `src/styles/index.css`, bloques `:root` (modo claro) y `.dark` (modo oscuro). La fuente es Manrope, desde Google Fonts.

## Publicar en GitHub Pages

1. Crea un repositorio público en GitHub, por ejemplo `portafolio`.
2. Sube el proyecto:

   ```bash
   git init
   git add .
   git commit -m "Portafolio inicial"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/portafolio.git
   git push -u origin main
   ```

3. En GitHub: **Settings > Pages > Build and deployment > Source: GitHub Actions**.
4. Espera 1 a 2 minutos. El sitio queda en `https://TU-USUARIO.github.io/portafolio/`.
5. Edita `.env` con esa URL en `VITE_SITE_URL` (para la vista previa al compartir) y vuelve a subir.

La ruta base se calcula sola. Si el repositorio se llama `TU-USUARIO.github.io`, el sitio queda en la raíz.

### Actualizar el sitio

```bash
git add .
git commit -m "Actualizo proyectos"
git push
```

Cada `push` a `main` vuelve a publicar. El avance se ve en la pestaña **Actions**.

## Seguridad y privacidad

- No hay credenciales, tokens ni claves en el código. No agregues ninguna: todo lo de este repositorio es público.
- No publiques datos internos del colegio: direcciones IP, nombres de equipos, usuarios, contraseñas ni capturas con información de personas.
- Revisa que las capturas de CLDV Nexus no muestren datos reales de funcionarios o estudiantes.
