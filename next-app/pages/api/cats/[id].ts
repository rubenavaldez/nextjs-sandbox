// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// localhost:3001/api/hello

import type { NextApiRequest, NextApiResponse } from 'next'
import {cats} from '../../../data'
type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {id} = req.query;
  const cat:Object = cats.find(cat => cat.id ==Number(id))

  res.status(200).json(cat)
}
