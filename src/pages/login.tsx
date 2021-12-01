import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import React, { FormEvent, useState } from "react";
import EmailForm from "../components/EmailForm";
import fetchJson, { FetchError } from "../lib/fetchJson";
import { magic } from "../lib/magic";
import useUser from "../lib/useUser";

const Login = () => {
  // here we just check if user is already logged in and redirect to profile
  const { mutateUser } = useUser({
    redirectTo: "/profile",
    redirectIfFound: true,
  });

  const [errorMsg, setErrorMsg] = useState("");

  return (
    <ChakraProvider theme={theme}>
      <Box maxW="500px">
        <EmailForm
          errorMessage={errorMsg}
          onSubmit={async function handleLoginWithEmail(
            event: FormEvent<HTMLFormElement>,
          ) {
            event.preventDefault();

            const email = event.currentTarget.email.value;

            try {
              // Trigger Magic link to be sent to user
              const didToken = await magic.auth.loginWithMagicLink({
                email,
              });

              // Validate didToken with server
              mutateUser(
                await fetchJson("/api/login", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + didToken,
                  },
                }),
              );
            } catch (error) {
              if (error instanceof FetchError) {
                setErrorMsg(error.data.message);
              } else {
                console.error("An unexpected error happened:", error);
              }
            }
          }}
        />
      </Box>
    </ChakraProvider>
  );
};

export default Login;
