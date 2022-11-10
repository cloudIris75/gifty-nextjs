import { NextApiRequest, NextApiResponse } from 'next';
import withHandler, { ResponseType } from '../../lib/server/withHandler';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const brands = await client?.brand.findMany();
  res.json({
    ok: true,
    brands,
  });
  res.end();
}

export default withHandler({
  methods: ['GET'],
  handler,
});
