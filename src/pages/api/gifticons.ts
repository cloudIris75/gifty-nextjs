import { NextApiRequest, NextApiResponse } from 'next';
import withHandler, { ResponseType } from '../../lib/server/withHandler';
import client from '../../lib/server/client';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const gifticons = await client.gifticon.findMany();
  res.json({
    ok: true,
    gifticons,
  });
  res.end();
}

export default withHandler({
  methods: ['GET'],
  handler,
});
