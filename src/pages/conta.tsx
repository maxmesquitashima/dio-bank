// 016-react\my-app-ts\src\pages\conta.tsx
import React, { useEffect, useState, useContext } from "react";
import { SimpleGrid, Spinner, Center, VStack, Text } from "@chakra-ui/react";
import { InfoBox } from "../components/infoBox";
import { api, User } from "../api";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../components/appContext";

export const Conta: React.FC = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AppContext);
  const { id } = useParams();
  const [userData, setUserData] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await api;
        if (user.id === id) {
          setUserData(user);
        } else {
          setError("Você não tem permissão para acessar esta conta.");
        }
      } catch (error) {
        console.error("Erro ao carregar dados do usuário:", error);
        setError(
          "Erro ao carregar dados. Por favor, tente novamente mais tarde."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [id, isLoggedIn, navigate]);

  if (isLoading) {
    return (
      <Center
        padding="10px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={4}
        flex="1"
        bg="#9413DC"
      >
        <VStack spacing={4}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="white"
            size="xl"
          />
          <Text
            color="white"
            fontSize="lg"
            fontWeight="bold"
          >
            Carregando informações...
          </Text>
        </VStack>
      </Center>
    );
  }

  if (error || !userData) {
    return (
      <Center
        padding="10px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={4}
        flex="1"
        bg="#9413DC"
      >
        <Text
          color="white"
          fontSize="lg"
          fontWeight="bold"
        >
          {error ||
            "Erro ao carregar dados. Por favor, tente novamente mais tarde."}
        </Text>
      </Center>
    );
  }

  return (
    <Center
      backgroundColor="#9413DC"
      padding="10px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={4}
      flex="1"
    >
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={6}
        width="100%"
        maxWidth="1200px"
      >
        <InfoBox
          title="Informações da Conta"
          infoArray={userData.accountInfo}
        />
        <InfoBox
          title="Informações de Acesso"
          infoArray={userData.accessInfo}
        />
      </SimpleGrid>
    </Center>
  );
};
