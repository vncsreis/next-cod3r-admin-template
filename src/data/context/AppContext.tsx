import { prependOnceListener } from "process";
import { createContext, useState } from "react";

type Tema = "dark" | "";

interface AppContextProps {
  tema: Tema;
  alternarTema: () => void;
}

const AppContext = createContext<AppContextProps>({
  tema: "dark",
  alternarTema: () => {},
});

interface AppProviderProps {
  children: any;
}

export function AppProvider(props: AppProviderProps) {
  const [tema, setTema] = useState<Tema>("dark");

  function alternarTema() {
    setTema(tema === "" ? "dark" : "");
  }

  return (
    <AppContext.Provider
      value={{
        tema,
        alternarTema,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
