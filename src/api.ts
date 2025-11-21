export interface InfoItem {
  label: string;
  value: string;
}

export interface UserInfo {
  accountInfo: InfoItem[];
  accessInfo: InfoItem[];
}

// Atualizar a interface User
export interface User extends UserInfo {
  id: string;
  email: string;
  password: string;
  name: string;
}

function getCurrentDateTime(): string {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  return `${day}/${month}/${year} às ${hours}:${minutes}`;
}

// Atualizar o usuário mock
const user: User = {
  id: "1",
  email: "usuario@exemplo.com",
  password: "senha123",
  name: "João da Silva",
  accountInfo: [
    { label: "Nome", value: "João da Silva" },
    { label: "CPF", value: "123.456.789-00" },
    { label: "Agência", value: "0001" },
    { label: "Conta", value: "12345-6" },
    { label: "Saldo", value: "R$ 1.234,56" },
    { label: "Tipo de Conta", value: "Conta Corrente" },
    { label: "Data de Abertura", value: "01/01/2020" },
    { label: "Status", value: "Ativo" },
  ],
  accessInfo: [
    { label: "E-mail", value: "usuario@exemplo.com" },
    { label: "Senha", value: "********" },
    { label: "Último acesso", value: getCurrentDateTime() },
    { label: "Status", value: "Ativo" },
  ],
};

// Manter a definição da api como estava
export const api: Promise<User> = new Promise((resolve) => {
  setTimeout(() => {
    resolve(user);
  }, 3000);
});
