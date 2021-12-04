import { Magic } from "@magic-sdk/admin";

// Initiating Magic instance for server-side methods
const magic = new Magic(process.env.MAGIC_SECRET_KEY);

import type { User } from "./user";

import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "../../lib/session";
import { NextApiRequest, NextApiResponse } from "next";

export default withIronSessionApiRoute(loginRoute, sessionOptions);

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  try {

    const didToken =
      req.headers.authorization &&
      magic.utils.parseAuthorizationHeader(req.headers.authorization);
    didToken && magic.token.validate(didToken);

    const user = { isLoggedIn: true } as User;
    req.session.user = user;
    await req.session.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}
