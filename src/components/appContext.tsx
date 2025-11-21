// 016-react\my-app-ts\src\components\appContext.tsx
import { createContext, useEffect, useState } from "react";
import { getStoredToken } from "../services/storageLocal";

interface IAppContext {
  user: string;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const token = getStoredToken();

  useEffect(() => {
    if (token) {
      const isLogged = token?.isLogged;
      setIsLoggedIn(isLogged);
    }
  }, [token]);

  const user = "João da Silva";
  return (
    <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};
