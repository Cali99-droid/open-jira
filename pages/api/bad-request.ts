// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    ok:boolean,
  name: string | string[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const {name='bad request'} = req.query;
  res.status(400).json({ 
    ok:false,
    name: 'algo salio mal' })
}
