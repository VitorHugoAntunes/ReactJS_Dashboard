import { ReactNode, useState } from "react";
import { createContext } from "react";

// Definindo o tema personalizado
const customTheme = {
  light: {
    backgroundColor: 'white',
    textColor: 'black',
    buttonColor: 'blue',
  },
  dark: {
    backgroundColor: 'black',
    textColor: 'white',
    buttonColor: 'green',
  },
};

// Tipagem do contexto
interface ThemeContextType {
  activeTheme: typeof customTheme.dark;
  changeTheme: (theme: string) => void;
}

// Propriedades do provider
interface ThemeProviderProps {
  children: ReactNode;
}

// Criacao do contexto
export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [activeTheme, setActiveTheme] = useState<typeof customTheme.dark>(customTheme.dark); // Defina o tema inicial aqui

  // Mudanca de estado do contexto com base no estado atual
  function changeTheme(theme: string) {
    if (theme === 'lightMode') {
      setActiveTheme(customTheme.light);
    } else {
      setActiveTheme(customTheme.dark);
    }
  }

  return (
    <ThemeContext.Provider value={{ activeTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
