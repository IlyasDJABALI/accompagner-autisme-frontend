//import type { User } from "./user";

import sgMail, { ResponseError } from "@sendgrid/mail";
import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import { sessionOptions } from "../../lib/session";

export default withIronSessionApiRoute(contactRoute, sessionOptions);

interface ContactDetails {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  recaptcha: string;
}

async function contactRoute(req: NextApiRequest, res: NextApiResponse) {
  try {
    //const user = req.session.user;
    const { body, method } = req;
    // Extract the email and captcha code from the request body
    const contactDetails = body.data as ContactDetails;

    if (method === "POST") {
      try {
        // Ping the google recaptcha verify API to verify the captcha code you received
        const response = await fetch(
          `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${contactDetails.recaptcha}`,
          {
            headers: {
              "Content-Type":
                "application/x-www-form-urlencoded; charset=utf-8",
            },
            method: "POST",
          },
        );
        const captchaValidation = await response.json();
        /**
         * The structure of response from the veirfy API is
         * {
         *  "success": true|false,
         *  "challenge_ts": timestamp,  // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
         *  "hostname": string,         // the hostname of the site where the reCAPTCHA was solved
         *  "error-codes": [...]        // optional
          }
         */
        if (captchaValidation.success) {
          // send the email
          // ex : Call sendGrid

          sgMail.setApiKey(
            process.env.SENDGRID_API_KEY ? process.env.SENDGRID_API_KEY : "",
          );
          const msg = {
            to: `${process.env.CONTACT_EMAIL}`, // Change to your recipient
            from: `${process.env.CONTACT_EMAIL}`, // Change to your verified sender
            replyTo: `${contactDetails.email}`,

            subject: `${contactDetails.subject}`,
            text: `Message reçu depuis le site accompagner-autisme.com de ${contactDetails.firstName} ${contactDetails.lastName} : ${contactDetails.message}`,
            html: `<h3>Message reçu depuis le site accompagner-autisme.com</h3><div><strong>Nom : </strong>${contactDetails.lastName}</div><div><strong>Prénom : </strong>${contactDetails.firstName}</div><div><strong>Message : </strong>${contactDetails.message}</div>`,
          };

          try {
            await sgMail.send(msg)
          } catch (error) {
            if (error instanceof ResponseError) {
              console.log(error.message)
            }
            return res.status(500).json({ message: "L'envoi de l'email a échoué" });
          }
          
          return res.status(200).json({
            message: `Merci ${contactDetails.firstName} ! Votre message a bien été envoyé.`,
          });
        } else {
          return res.status(422).json({
            message: "Code captcha invalide",
          });
        }
      } catch (error) {
        return res.status(422).json({ message: "Something went wrong" });
      }
    }
    // Return 404 if someone pings the API with a method other than
    // POST
    return res.status(404).json({ message: "Not found" });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}
