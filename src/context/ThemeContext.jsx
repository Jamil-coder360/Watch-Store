import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  // প্রথমে localStorage থেকে theme load করবে
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // theme change function
  const themeChange = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // theme change হলে localStorage + html class update হবে
  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    console.log(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, themeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext };
export default ThemeProvider;