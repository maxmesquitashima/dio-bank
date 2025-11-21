// src/components/InfoBox.tsx
import React from "react";
import { Box, Heading, VStack, Text, Divider, HStack } from "@chakra-ui/react";

export interface InfoItem {
  label: string;
  value: string;
}

interface InfoBoxProps {
  title: string;
  infoArray: InfoItem[];
}

export const InfoBox: React.FC<InfoBoxProps> = ({ title, infoArray }) => (
  <Box
    backgroundColor="white"
    borderRadius="lg"
    padding={6}
    boxShadow="md"
    width="100%"
    maxHeight="calc(100vh - 2rem)" // Altura máxima com um pouco de margem
    overflowY="auto" // Adiciona scroll vertical se necessário
  >
    <Heading
      as="h2"
      size="md"
      mb={4}
      textAlign="center"
      color="#9413DC"
    >
      {title}
    </Heading>
    <VStack
      spacing={1}
      align="stretch"
    >
      {infoArray.map((info, index) => (
        <Box key={index}>
          <HStack justifyContent="space-between">
            <Text
              fontWeight="bold"
              fontSize="sm"
            >
              {info.label}:
            </Text>
            <Text fontSize="sm">{info.value}</Text>
          </HStack>
          {index < infoArray.length - 1 && (
            <Divider
              mt={1}
              mb={1}
            />
          )}
        </Box>
      ))}
    </VStack>
  </Box>
);
