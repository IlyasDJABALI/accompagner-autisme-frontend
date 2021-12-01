import {
  Box, Button,
  ChakraProvider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input, theme
} from "@chakra-ui/react";
import { FormEvent } from "react";


export default function EmailForm({
  errorMessage,
  onSubmit,
}: {
  errorMessage: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}) {

  return (
    <ChakraProvider theme={theme}>
      <Box maxW="500px">
        <form onSubmit={onSubmit}>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="email"
            />
            <FormErrorMessage>{errorMessage}</FormErrorMessage>
          </FormControl>
          <Button
            mt={4}
            colorScheme="teal"
            type="submit"
          >
            Me connecter / M&apos;inscrire
          </Button>
        </form>
      </Box>
    </ChakraProvider>
  );
}
