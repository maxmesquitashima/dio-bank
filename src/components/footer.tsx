import { Box, Text, HStack, Icon } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <Box
      as="footer"
      width="100%"
      backgroundColor="#6B46C1"
      color="white"
      padding={4}
      boxShadow="md"
      textAlign="center"
    >
      <Text fontSize="sm">© 2025 MAX Bank. Todos os direitos reservados.</Text>
      <HStack
        justifyContent="center"
        spacing={4}
        mt={2}
      >
        <Icon
          as={FaFacebook}
          boxSize={6}
          cursor="pointer"
        />
        <Icon
          as={FaTwitter}
          boxSize={6}
          cursor="pointer"
        />
        <Icon
          as={FaInstagram}
          boxSize={6}
          cursor="pointer"
        />
      </HStack>
    </Box>
  );
};
