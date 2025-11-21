// 016-react\my-app-ts\src\services\storageLocal.tsx
interface ITokenData {
  token: string;
  createdAt: number;
  isLogged: boolean;
}

export const generateAndStoreToken = (): void => {
  const valorToken = new Date().getTime().toString(36);

  const tokenData: ITokenData = {
    token: valorToken,
    createdAt: new Date().getTime(),
    isLogged: false,
  };

  localStorage.setItem("token", JSON.stringify(tokenData));
};

export const getStoredToken = (): ITokenData | null => {
  const storedToken = localStorage.getItem("token");
  if (storedToken) {
    return JSON.parse(storedToken) as ITokenData;
  }
  return null;
};

export const updateStoredToken = <K extends keyof ITokenData>(
  key: K,
  value: ITokenData[K]
): void => {
  const tokenData = getStoredToken();
  if (tokenData) {
    tokenData[key] = value;
    localStorage.setItem("token", JSON.stringify(tokenData));
  }
};

export const removeStoredToken = (): void => {
  localStorage.removeItem("token");
};

export const getAllLocalStorage = (): Storage => {
  return localStorage;
};

export const getLocalStorage = (key: string): string | null => {
  return localStorage.getItem(key);
};

export const setLocalStorage = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

export const deleteLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};

export const updateLocalStorage = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

export const clearLocalStorage = (): void => {
  localStorage.clear();
};
