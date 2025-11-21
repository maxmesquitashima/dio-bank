import React, { useEffect } from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton,
  Box,
} from "@chakra-ui/react";

interface CustomAlertProps {
  status: "success" | "error" | "info" | "warning";
  title: string;
  onClose: () => void;
  autoCloseTime?: number;
}

export const CustomAlert: React.FC<CustomAlertProps> = ({
  status,
  title,
  onClose,
  autoCloseTime = 5000, // Tempo padrão de 5 segundos para fechar automaticamente
}) => {
  useEffect(() => {
    if (autoCloseTime > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseTime);
      return () => clearTimeout(timer);
    }
  }, [onClose, autoCloseTime]);

  return (
    <Alert
      status={status}
      variant="subtle"
      borderRadius="md"
      mb={4}
      alignItems="center"
      justifyContent="space-between"
    >
      <Box
        display="flex"
        alignItems="center"
      >
        <AlertIcon />
        <AlertTitle mr={2}>{title}</AlertTitle>
      </Box>
      <CloseButton onClick={onClose} />
    </Alert>
  );
};
