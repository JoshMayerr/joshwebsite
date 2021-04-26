import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

export default function DarkToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div className=" ">
      {theme === "light" ? (
        <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <MoonIcon />
        </div>
      ) : (
        <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <SunIcon />
        </div>
      )}
    </div>
  );
}
