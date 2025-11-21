// src/components/header.tsx
import React, { useContext } from "react";
import { Box, Heading, Flex, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./appContext";
import { updateStoredToken } from "../services/storageLocal";

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    updateStoredToken("isLogged", false);
    navigate("/");
  };

  return (
    <Box
      as="header"
      width="100%"
      backgroundColor="#6B46C1"
      padding={4}
      color="white"
      boxShadow="md"
    >
      <Flex
        justifyContent={isLoggedIn ? "space-between" : "center"}
        alignItems="center"
      >
        <Heading
          as="h1"
          size="lg"
          whiteSpace="nowrap"
          flex={isLoggedIn ? "1" : "0"}
        >
          MAX Bank
        </Heading>
        {isLoggedIn && (
          <Button
            onClick={handleLogout}
            colorScheme="whiteAlpha"
            size="sm"
            ml={4}
          >
            Logout
          </Button>
        )}
      </Flex>
    </Box>
  );
};
