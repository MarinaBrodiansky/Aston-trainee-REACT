import { useState, createContext, useMemo } from "react";

export const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const value = useMemo(() => {
    return ({
      theme,
      setTheme,
    })
  })

  return (
    <ThemeContext.Provider
      value={value}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider };
