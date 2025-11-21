// 016-react\my-app-ts\src\App.tsx
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./components/Layout";
import { AppContextProvider } from "./components/appContext";
import { MainRoutes } from "./routes";
import { generateAndStoreToken, getStoredToken } from "./services/storageLocal";

function App() {
  const token = getStoredToken();
  const isLogged = token?.isLogged;

  if (!isLogged) {
    generateAndStoreToken();
  }

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <MainRoutes />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
