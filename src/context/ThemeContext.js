import React, { useState } from "react";

export const ThemeContext = React.createContext();

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((prev) => !prev);
  };
  return (
    <>
      <ThemeContext.Provider value={{ theme: darkTheme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
}
