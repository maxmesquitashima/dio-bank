export const login = (shouldSucceed: boolean = true): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(shouldSucceed);
    }, 1000);
  });
};
