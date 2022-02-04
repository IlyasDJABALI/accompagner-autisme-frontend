import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '../../../lib/session'
import { NextApiRequest, NextApiResponse } from 'next'

export default withIronSessionApiRoute(formationIdRoute, sessionOptions);

async function formationIdRoute(req: NextApiRequest, res: NextApiResponse) {
    const { formationId } = req.query
    console.log(req.query)
    let data = "";
    if (formationId === '1'){
        data = `{
            "formation" :
                {
                    "titre" : "Alimentation",
                    "date" : "Mercredi 12 janvier 2022",
                    "id" : 1,
                    "objectif" : "Test",
                    "programme" : "Test",
                    "public" : "Test",
                    "tarif" : "x",
                    "adresse" : "Test",
                    "intervenante" : "Test"
                }
        }`;
    }
    else if (formationId === '2'){
        data = `{
            "formation" :
                {
                    "titre" : "Sommeil",
                    "date" : "Vendredi 18 février 2022",
                    "id" : 2,
                    "objectif" : "Test",
                    "programme" : "Test",
                    "public" : "Test",
                    "tarif" : "x",
                    "adresse" : "Test",
                    "intervenante" : "Test"
                }
        }`;
    }
    else if (formationId === '3'){
        data = `{
            "formation" :
                {
                    "titre" : "ABA",
                    "date" : "Mardi 15 mars 2022",
                    "id" : 3,
                    "objectif" : "Test",
                    "programme" : "Test",
                    "public" : "Test",
                    "tarif" : "x",
                    "adresse" : "Test",
                    "intervenante" : "Test"
                }
        }`;
    }
    res.status(200).json(data);
}
