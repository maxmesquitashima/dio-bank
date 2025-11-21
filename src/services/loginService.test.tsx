// Em loginService.test.tsx
import { login } from "./loginService";
import * as authService from "./authService";

jest.mock("./authService");

describe("login", () => {
  const mockValidateCredentials =
    authService.validateCredentials as jest.MockedFunction<
      typeof authService.validateCredentials
    >;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("deve retornar sucesso e userId para um login bem-sucedido", async () => {
    mockValidateCredentials.mockResolvedValue({
      isValid: true,
      userId: "123",
    });

    const result = await login("qualquer@email.com", "qualquersenha");

    expect(result).toEqual({ success: true, userId: "123" });
    expect(mockValidateCredentials).toHaveBeenCalledWith(
      "qualquer@email.com",
      "qualquersenha"
    );
  });

  it("deve retornar falha sem userId para um login mal-sucedido", async () => {
    mockValidateCredentials.mockResolvedValue({ isValid: false });

    const result = await login("email@invalido.com", "senhaerrada");

    expect(result).toEqual({ success: false, userId: undefined });
    expect(mockValidateCredentials).toHaveBeenCalledWith(
      "email@invalido.com",
      "senhaerrada"
    );
  });

  it("deve resolver a Promise após aproximadamente 1 segundo", async () => {
    jest.useFakeTimers();
    mockValidateCredentials.mockResolvedValue({
      isValid: true,
      userId: "123",
    });

    const loginPromise = login("test@email.com", "testpassword");

    jest.advanceTimersByTime(1000);

    const result = await loginPromise;

    expect(result).toEqual({ success: true, userId: "123" });
    jest.useRealTimers();
  });

  it("deve tratar corretamente email e senha com espaços em branco", async () => {
    mockValidateCredentials.mockResolvedValue({
      isValid: true,
      userId: "123",
    });

    const result = await login(" email@teste.com ", " senha123 ");

    expect(mockValidateCredentials).toHaveBeenCalledWith(
      "email@teste.com",
      "senha123"
    );
    expect(result).toEqual({ success: true, userId: "123" });
  });

  it("deve remover espaços em branco do email e senha antes de chamar validateCredentials", async () => {
    mockValidateCredentials.mockResolvedValue({
      isValid: true,
      userId: "123",
    });

    await login("  user@example.com  ", "  password123  ");

    expect(mockValidateCredentials).toHaveBeenCalledWith(
      "user@example.com",
      "password123"
    );
  });

  it("deve falhar para entradas vazias", async () => {
    mockValidateCredentials.mockResolvedValue({ isValid: false });

    const result = await login("", "");

    expect(result).toEqual({ success: false, userId: undefined });
    expect(mockValidateCredentials).toHaveBeenCalledWith("", "");
  });
});
