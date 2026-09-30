import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";
  return (
    <button type="button" onClick={toggle} className="icon-btn" aria-label={dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}>
      {dark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
