import { api, User } from "../api";

const fetchUser = async (): Promise<User> => {
  try {
    return await api;
  } catch (error) {
    console.error("Erro ao buscar o user:", error);
    throw error;
  }
};

// Função validateCredentials
export const validateCredentials = async (
  email: string,
  password: string
): Promise<{ isValid: boolean; userId?: string }> => {
  try {
    const user = await fetchUser();
    const isValid = email === user.email && password === user.password;
    return {
      isValid,
      userId: isValid ? user.id : undefined,
    };
  } catch (error) {
    console.error("Erro ao validar credenciais:", error);
    return { isValid: false };
  }
};
