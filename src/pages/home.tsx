// 016-react\my-app-ts\src\pages\home.tsx
import { useContext, useState } from "react";
import { Box, Heading, VStack, Input } from "@chakra-ui/react";
import { CustomButton } from "../components/CustomButton";
import { CustomAlert } from "../components/CustomAlert";
import { login } from "../services/loginService";
import { useNavigate } from "react-router-dom";
import { Card } from "../components/Card";
import { AppContext } from "../components/appContext";
import { updateStoredToken } from "../services/storageLocal";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertConfig, setAlertConfig] = useState({
    show: false,
    status: "success" as "success" | "error",
    title: "",
  });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleCloseAlert = () => {
    setAlertConfig({ ...alertConfig, show: false });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin();
  };

  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AppContext);

  const handleLogin = async () => {
    setIsLoading(true);
    setAlertConfig({ show: false, status: "success", title: "" });
    try {
      const result = await login(email, password);
      if (result.success) {
        setIsLoggedIn(true);
        updateStoredToken("isLogged", true);
        setAlertConfig({
          show: true,
          status: "success",
          title: "Bem-vindo! Login realizado com sucesso.",
        });
        setTimeout(() => {
          navigate(`/conta/${result.userId}`);
        }, 1500);
      } else {
        setAlertConfig({
          show: true,
          status: "error",
          title:
            "Falha no login. Verifique suas credenciais e tente novamente.",
        });
      }
    } catch (error) {
      setAlertConfig({
        show: true,
        status: "error",
        title:
          "Erro ao tentar fazer login. Por favor, tente novamente mais tarde.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Card>
      <Box
        backgroundColor="white"
        borderRadius="lg"
        padding={8}
        boxShadow="xl"
        width="400px"
        mt={4}
      >
        {alertConfig.show && (
          <CustomAlert
            status={alertConfig.status}
            title={alertConfig.title}
            onClose={handleCloseAlert}
            autoCloseTime={5000}
          />
        )}
        <Heading
          as="h1"
          size="lg"
          mb={6}
          textAlign="center"
          color="#9413DC"
        >
          Faça o login
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <Input
              placeholder="Email"
              type="email"
              autoComplete="username"
              variant="filled"
              focusBorderColor="#9413DC"
              value={email}
              onChange={handleEmailChange}
              isDisabled={isLoading}
            />
            <Input
              placeholder="Password"
              type="password"
              autoComplete="current-password"
              variant="filled"
              focusBorderColor="#9413DC"
              value={password}
              onChange={handlePasswordChange}
              isDisabled={isLoading}
            />
            <CustomButton
              onClick={handleLogin}
              label="Login"
              isLoading={isLoading}
              loadingText="Entrando..."
            />
          </VStack>
        </form>
      </Box>
    </Card>
  );
};
