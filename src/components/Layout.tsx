import { Flex } from "@chakra-ui/react";
import { Footer } from "./footer";
import { Header } from "./header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Flex
        flexDirection="column"
        minHeight="100vh"
      >
        <Header />
        {children}
        <Footer />
      </Flex>
    </>
  );
};
