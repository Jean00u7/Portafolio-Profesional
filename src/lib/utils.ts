/** Antepone la ruta base del sitio (necesario en GitHub Pages) a un archivo de public/. */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}

/** Quita elementos con hidden: true en el sitio publicado. En local se ven para poder editarlos. */
export function visible<T extends { hidden?: boolean }>(items: T[]): T[] {
  return import.meta.env.DEV ? items : items.filter((i) => !i.hidden);
}
