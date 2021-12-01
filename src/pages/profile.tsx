import React from "react";
import useUser from "../lib/useUser";

import {
  ChakraProvider,
  theme
} from "@chakra-ui/react";

const Profile = () => {
  const { user } = useUser({
    redirectTo: "/login",
  });
  return(
  <ChakraProvider theme={theme}>
      <h1>Your profile</h1>
      {user && (
        <>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}
  </ChakraProvider>
)
};

export default Profile;