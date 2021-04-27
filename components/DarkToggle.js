import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

const DarkToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="hover:border-indigo-500 hover:border-2 rounded-full transition duration-500 ease-in-out ">
      {theme === "light" ? (
        <div onClick={() => setTheme("dark")}>
          <MoonIcon />
        </div>
      ) : (
        <div onClick={() => setTheme("light")}>
          <SunIcon />
        </div>
      )}
    </div>
  );
};

export default DarkToggle;
