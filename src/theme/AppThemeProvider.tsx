import { css, Global, Theme, ThemeProvider } from "@emotion/react";
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import themes from "./themes";
import Globals from "./Globals";

const ThemeContext = createContext<
  | {
      appTheme: keyof typeof themes;
      setAppTheme: React.Dispatch<React.SetStateAction<keyof typeof themes>>;
    }
  | Record<string, never>
>({});

export const useAppTheme = () => {
  return useContext(ThemeContext);
};

const AppThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [appTheme, setAppTheme] = useState<keyof typeof themes>(
    (localStorage.getItem("theme") as keyof typeof themes) || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", appTheme);
  }, [appTheme]);

  return (
    <ThemeContext.Provider value={{ appTheme, setAppTheme }}>
      <Global styles={Globals(themes[appTheme] as Theme)} />
      <ThemeProvider theme={themes[appTheme] as Theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default AppThemeProvider;
