// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import Digipol from '../../../public/assets/digipol.png';
import AlatBerat from "../../../public/assets/AlatBerat.png"

type Data = {
  status: boolean;
  statusCode: number;
  data: {
    name?: string;
    fullName?: string;
    img?: string;
    description?: string;
    link?: string;
  }[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const data = [
    {
      name: 'Digipol',
      fullName: 'Digital Politics',
      img: Digipol.src,
      description:
        'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
      link: 'https://demo-dcc.thinkspedia.id/pages/authentication/login',
    },
    {
      name: 'Alat Berat',
      fullName: '',
      img: AlatBerat.src,
      description:
        'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
      link: 'https://www.ulunsyahroni.com',
    },
  ];
  res.status(200).json({ status: true, statusCode: 200, data });
}
