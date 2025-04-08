"use client";

import { createContext, useState } from "react";

export const ThemeContex =  createContext();
export const ThemeProvider = ({children}) => {
    const [mode, setMode] = useState("dark");

    const toogle = () => {
        setMode((prev) => (prev === 'dark' ? "light" : "dark"));
    }

    return(
        <ThemeContex.Provider value={{toogle , mode}}>
            <div className={`theme ${mode}`}>{children}</div>
        </ThemeContex.Provider>
    )
}