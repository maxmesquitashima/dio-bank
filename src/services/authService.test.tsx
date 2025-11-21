// src/services/authService.test.tsx

import { validateCredentials } from "./authService";

describe("authService", () => {
  describe("validateCredentials", () => {
    const validEmail = "usuario@exemplo.com";
    const validPassword = "senha123";

    it("deve retornar true para credenciais válidas", async () => {
      const result = await validateCredentials(validEmail, validPassword);
      expect(result).toEqual({
        isValid: true,
        userId: expect.any(String),
      });
    });

    it("deve retornar false para email inválido", async () => {
      const result = await validateCredentials(
        "email_invalido@exemplo.com",
        validPassword
      );
      expect(result).toEqual({ isValid: false, userId: undefined });
    });

    it("deve retornar false para senha inválida", async () => {
      const result = await validateCredentials(validEmail, "senha_invalida");
      expect(result).toEqual({ isValid: false, userId: undefined });
    });

    it("deve retornar false para email e senha inválidos", async () => {
      const result = await validateCredentials(
        "email_invalido@exemplo.com",
        "senha_invalida"
      );
      expect(result).toEqual({ isValid: false, userId: undefined });
    });

    it("deve ser case-sensitive para o email", async () => {
      const result = await validateCredentials(
        "USUARIO@exemplo.com",
        validPassword
      );
      expect(result).toEqual({ isValid: false, userId: undefined });
    });

    it("deve ser case-sensitive para a senha", async () => {
      const result = await validateCredentials(validEmail, "SENHA123");
      expect(result).toEqual({ isValid: false, userId: undefined });
    });

    it("deve rejeitar emails vazios", async () => {
      const result = await validateCredentials("", validPassword);
      expect(result).toEqual({ isValid: false, userId: undefined });
    });

    it("deve rejeitar senhas vazias", async () => {
      const result = await validateCredentials(validEmail, "");
      expect(result).toEqual({ isValid: false, userId: undefined });
    });
  });
});
