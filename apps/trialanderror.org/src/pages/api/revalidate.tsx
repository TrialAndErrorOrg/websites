import { NextApiRequest, NextApiResponse } from 'next'
import { env } from '../../env/server.mjs'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check for secret to confirm this is a valid request
  const { secret, path } = req.query

  if (secret !== env.NEXT_REVALIDATION_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  if (!path) {
    return res.status(400).json({ message: 'Path is required' })
  }

  const stringPath = Array.isArray(path) ? path[0] : path

  try {
    // This should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    await res.revalidate(stringPath)
    return res.json({ revalidated: true })
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating')
  }
}
