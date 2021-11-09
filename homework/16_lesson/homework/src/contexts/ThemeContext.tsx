import React, { ReactNode, useState } from 'react';

export interface ThemeContextState {
    darkTheme: boolean,
    toggleTheme: () => void,
}

interface Props {
    children: ReactNode,
}

const ThemeContext = React.createContext<Partial<ThemeContextState>>({});

const ThemeContextProvider = ({ children }: Props) => {
            const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    };

        return (
          <ThemeContext.Provider value={{
            darkTheme,
            toggleTheme,
        }}
          >
            {children}
          </ThemeContext.Provider>
);
};

export { ThemeContextProvider, ThemeContext };
