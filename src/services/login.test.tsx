import { login } from "./login";

describe("login", () => {
  it("Deve retornar true para um login bem-sucedido", async () => {
    const result = await login();
    expect(result).toBe(true);
  });

  it("Deve retornar false para um login mal-sucedido", async () => {
    const result = await login(false);
    expect(result).toBe(false);
  });

  it("Deve resolver a Promise após aproximadamente 1 segundo", async () => {
    const startTime = Date.now();
    await login();
    const endTime = Date.now();
    const elapsedTime = endTime - startTime;

    expect(elapsedTime).toBeGreaterThanOrEqual(900);
    expect(elapsedTime).toBeLessThanOrEqual(1100);
  });
});
