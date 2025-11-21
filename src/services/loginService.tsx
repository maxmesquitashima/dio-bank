// Em loginService.tsx
import { validateCredentials } from "./authService";

export interface LoginResult {
  success: boolean;
  userId?: string;
}

// Em loginService.tsx
export const login = async (
  email: string,
  password: string
): Promise<LoginResult> => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const trimmedEmail = email.trim();
      const trimmedPassword = password.trim();
      const result = await validateCredentials(trimmedEmail, trimmedPassword);
      resolve({
        success: result.isValid,
        userId: result.userId,
      });
    }, 1000);
  });
};
