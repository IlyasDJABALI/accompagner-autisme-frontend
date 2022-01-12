import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "../../lib/session";
import { NextApiRequest, NextApiResponse } from "next";

export default withIronSessionApiRoute(formationsRoute, sessionOptions);

async function formationsRoute(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = `{
    "formations": [
      {
        "titre": "Alimentation",
        "date": "12/01/2022"
      },
      {
        "titre": "Sommeil",
        "date": "18/02/2022"
      },
      {
        "titre": "ABA",
        "date": "15/03/2022"
      }
    ]
  }`;

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}
