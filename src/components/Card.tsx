import { Center } from "@chakra-ui/react";

export const Card = ({ children }: any) => {
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
      {children}
    </Center>
  );
};
