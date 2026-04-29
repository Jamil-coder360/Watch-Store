import { createContext, useState } from "react";

const ThemeContext = createContext({})

const ThemeProvider= ({children})=>{
    const [theme ,setTheme]= useState("light")

    const themeChange =() =>{
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
     document.documentElement.classList.toggle("dark");

    console.log(theme);

    };

    return(
        <ThemeContext.Provider value={{theme, themeChange}}>
            {children}
        </ThemeContext.Provider>
    )
}
export {ThemeContext};
export default ThemeProvider;