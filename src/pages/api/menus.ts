import { NextApiRequest, NextApiResponse } from 'next';
import withHandler, { ResponseType } from '../../lib/server/withHandler';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const menus = await client?.gifticon.findMany();
  res.json({
    ok: true,
    menus,
  });
  res.end();
}

export default withHandler({
  methods: ['GET'],
  handler,
});
