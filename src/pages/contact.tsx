import {
  Box,
  Button,
  ChakraProvider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  theme,
  ToastId,
  useToast,
  UseToastOptions,
} from "@chakra-ui/react";
import { FormikHelpers, FormikState, useFormik } from "formik";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import * as Yup from "yup";
import fetchJson, { FetchError } from "../lib/fetchJson";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  recaptcha: string;
}

interface ResponseDetails {
  message: string;
}

const handlesubmit = async (
  formValues: Values,
  setSubmitting: { (isSubmitting: boolean): void; (arg0: boolean): void },
  resetForm: (nextState?: Partial<FormikState<Values>> | undefined) => void,
  toastRef: React.MutableRefObject<ToastId | undefined>,
  updateToast: { (id: ToastId, options: Omit<UseToastOptions, "id">): void }
) => {
  try {
    const response = await fetchJson<ResponseDetails>("/api/contact", {
      method: "POST",
      body: JSON.stringify({ data: formValues }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // Reset the form when the request has succeeeded
    resetForm();
    toastRef.current &&
      updateToast(toastRef.current, {
        title: "Message envoyé",
        description: response.message,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
  } catch (error) {
    if (error instanceof FetchError) {
      toastRef.current &&
        updateToast(toastRef.current, {
          title: "Oups :(",
          description: error.data.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
    } else {
      console.error("An unexpected error happened:", error);
    }
  } finally {
    setSubmitting(false);
  }
};

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
  subject: Yup.string()
    .min(2, "Trop court")
    .max(200, "Trop long")
    .required("Requis"),
  message: Yup.string()
    .min(2, "Trop court")
    .max(2000, "Trop long")
    .required("Requis"),
  recaptcha: Yup.string()
    .nullable()
    .required('Vous devez cocher la case "Je ne suis pas un robot"'),
});

const ContactPage = () => {
  const recaptchaRef = React.createRef<ReCAPTCHA>();
  const toastRef = React.useRef<ToastId>();
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
      recaptcha: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (
      values: Values,
      { setSubmitting, resetForm }: FormikHelpers<Values>,
    ) => {
      handlesubmit(
        values,
        setSubmitting,
        resetForm,
        toastRef,
        toast.update
      );
      toastRef.current = toast({});

      recaptchaRef.current?.reset();
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
            <Input
              value={formik.values.email}
              id="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
            />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl
            isInvalid={Boolean(formik.errors.subject) && formik.touched.subject}
          >
            <FormLabel htmlFor="subject">Sujet</FormLabel>
            <Input
              value={formik.values.subject}
              name="subject"
              id="subject"
              placeholder="Sujet"
              onChange={formik.handleChange}
            />
            {/* <FormHelperText>We&apos;ll never share your email.</FormHelperText> */}
            <FormErrorMessage>{formik.errors.subject}</FormErrorMessage>
          </FormControl>
          <FormControl
            isInvalid={Boolean(formik.errors.message) && formik.touched.message}
          >
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea
              value={formik.values.message}
              id="message"
              type="message"
              placeholder="Message"
              onChange={formik.handleChange}
            />
            {/* <FormHelperText>We&apos;ll never share your email.</FormHelperText> */}
            <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
          </FormControl>
          <FormControl
            py={3}
            isInvalid={
              Boolean(formik.errors.recaptcha) && formik.touched.recaptcha
            }
          >
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={
                process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
                  ? process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
                  : ""
              }
              size="compact"
              onChange={(v) => formik.setFieldValue("recaptcha", v)}
            />
            <FormErrorMessage>{formik.errors.recaptcha}</FormErrorMessage>
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
