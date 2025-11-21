import { Box, Heading } from "@chakra-ui/react";

export const Header = () => {
	return (
		<Box
			as="header"
			width="100%"
			backgroundColor="#6B46C1"
			padding={4}
			color="white"
			boxShadow="md"
		>
			<Heading as="h1" size="lg" textAlign="center">
				MAX Bank
			</Heading>
		</Box>
	);
};
