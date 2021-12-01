import {
  Button,
  ChakraProvider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  FormHelperText,
  Box,
  theme,
} from "@chakra-ui/react";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import useUser from "../lib/useUser";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Trop court")
    .max(50, "Trop long")
    .required("Requis"),
  lastName: Yup.string()
    .min(2, "Trop court")
    .max(50, "Trop long")
    .required("Requis"),
  email: Yup.string().email("Email invalide").required("Requis"),
});

const ContactPage = () => {

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 500);
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Box maxW="500px">
        <form onSubmit={formik.handleSubmit}>
          <FormControl
            isInvalid={
              Boolean(formik.errors.firstName) && formik.touched.firstName
            }
          >
            <FormLabel htmlFor="firstName">Prénom</FormLabel>
            {/* <Input {...values.firstName} id="firstName" placeholder="firstName" /> */}
            <Input
              value={formik.values.firstName}
              name="firstName"
              id="firstName"
              placeholder="Prénom"
              onChange={formik.handleChange}
            />
            <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
          </FormControl>

          <FormControl
            isInvalid={
              Boolean(formik.errors.lastName) && formik.touched.lastName
            }
          >
            <FormLabel htmlFor="lastName">Nom</FormLabel>
            {/* <Input {...values.lastName} id="lastName" placeholder="lastName" /> */}
            <Input
              value={formik.values.lastName}
              name="lastName"
              id="lastName"
              placeholder="Nom"
              onChange={formik.handleChange}
            />
            <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
          </FormControl>
          <FormControl
            isInvalid={Boolean(formik.errors.email) && formik.touched.email}
          >
            <FormLabel htmlFor="email">Email</FormLabel>
            {/* <Input {...values.email} id="email" type="email" placeholder="email" /> */}
            <Input
              value={formik.values.email}
              id="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
            />
            {/* <FormHelperText>We&apos;ll never share your email.</FormHelperText> */}
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={formik.isSubmitting}
            type="submit"
          >
            Envoyer
          </Button>
        </form>
      </Box>
    </ChakraProvider>
  );
};
export default ContactPage;
