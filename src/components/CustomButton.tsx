import { Button } from "@chakra-ui/react";

interface IButton {
  onClick: () => void;
  label: string;
  isLoading?: boolean;
  loadingText?: string;
}

export const CustomButton = ({
  onClick,
  label,
  isLoading = false,
  loadingText = "Carregando...",
}: IButton) => {
  return (
    <Button
      onClick={onClick}
      colorScheme="purple"
      width="full"
      mt={4}
      isLoading={isLoading}
      loadingText={loadingText}
    >
      {label}
    </Button>
  );
};
