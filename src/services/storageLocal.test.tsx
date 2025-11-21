// 016-react\my-app-ts\src\services\storageLocal.test.tsx
import {
  getAllLocalStorage,
  getLocalStorage,
  setLocalStorage,
  deleteLocalStorage,
  updateLocalStorage,
  clearLocalStorage,
  generateAndStoreToken,
  getStoredToken,
  removeStoredToken,
  updateStoredToken,
} from "./storageLocal";

describe("Funções de LocalStorage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe("getAllLocalStorage", () => {
    it("deve retornar o objeto localStorage", () => {
      expect(getAllLocalStorage()).toBe(localStorage);
    });
  });

  describe("getLocalStorage", () => {
    it("deve retornar o valor armazenado para uma chave específica", () => {
      localStorage.setItem("teste", "valor");
      expect(getLocalStorage("teste")).toBe("valor");
    });

    it("deve retornar null para uma chave que não existe", () => {
      expect(getLocalStorage("naoExiste")).toBeNull();
    });
  });

  describe("setLocalStorage", () => {
    it("deve armazenar um valor para uma chave específica", () => {
      setLocalStorage("novaChave", "novoValor");
      expect(localStorage.getItem("novaChave")).toBe("novoValor");
    });
  });

  describe("deleteLocalStorage", () => {
    it("deve remover um item do localStorage", () => {
      localStorage.setItem("paraRemover", "valor");
      deleteLocalStorage("paraRemover");
      expect(localStorage.getItem("paraRemover")).toBeNull();
    });
  });

  describe("updateLocalStorage", () => {
    it("deve atualizar o valor de uma chave existente", () => {
      localStorage.setItem("paraAtualizar", "valorAntigo");
      updateLocalStorage("paraAtualizar", "valorNovo");
      expect(localStorage.getItem("paraAtualizar")).toBe("valorNovo");
    });

    it("deve criar um novo item se a chave não existir", () => {
      updateLocalStorage("novaChave", "novoValor");
      expect(localStorage.getItem("novaChave")).toBe("novoValor");
    });
  });

  describe("clearLocalStorage", () => {
    it("deve limpar todos os itens do localStorage", () => {
      localStorage.setItem("chave1", "valor1");
      localStorage.setItem("chave2", "valor2");
      clearLocalStorage();
      expect(localStorage.length).toBe(0);
    });
  });

  describe("generateAndStoreToken", () => {
    it("deve gerar e armazenar um token", () => {
      generateAndStoreToken();
      const storedToken = localStorage.getItem("token");
      expect(storedToken).not.toBeNull();
      const parsedToken = JSON.parse(storedToken!);
      expect(parsedToken).toHaveProperty("token");
      expect(parsedToken).toHaveProperty("createdAt");
      expect(parsedToken).toHaveProperty("isLogged", false);
    });
  });

  describe("getStoredToken", () => {
    it("deve retornar null se não houver token armazenado", () => {
      expect(getStoredToken()).toBeNull();
    });

    it("deve retornar o token armazenado", () => {
      generateAndStoreToken();
      const tokenData = getStoredToken();
      expect(tokenData).not.toBeNull();
      expect(tokenData).toHaveProperty("token");
      expect(tokenData).toHaveProperty("createdAt");
      expect(tokenData).toHaveProperty("isLogged", false);
    });
  });

  describe("removeStoredToken", () => {
    it("deve remover o token armazenado", () => {
      generateAndStoreToken();
      expect(localStorage.getItem("token")).not.toBeNull();
      removeStoredToken();
      expect(localStorage.getItem("token")).toBeNull();
    });
  });

  describe("updateStoredToken", () => {
    it("deve atualizar isLogged para true", () => {
      generateAndStoreToken();
      updateStoredToken("isLogged", true);
      const tokenData = getStoredToken();
      expect(tokenData?.isLogged).toBe(true);
    });

    it("deve atualizar o token", () => {
      generateAndStoreToken();
      const newToken = "newTokenValue";
      updateStoredToken("token", newToken);
      const tokenData = getStoredToken();
      expect(tokenData?.token).toBe(newToken);
    });

    it("deve atualizar createdAt", () => {
      generateAndStoreToken();
      const newDate = new Date(2023, 0, 1).getTime();
      updateStoredToken("createdAt", newDate);
      const tokenData = getStoredToken();
      expect(tokenData?.createdAt).toBe(newDate);
    });

    it("não deve fazer nada se não houver token armazenado", () => {
      updateStoredToken("isLogged", true);
      expect(getStoredToken()).toBeNull();
    });
  });
});
