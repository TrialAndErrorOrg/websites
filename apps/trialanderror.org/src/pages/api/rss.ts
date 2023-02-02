// src/pages/api/rss/index.ts
import { NextApiRequest, NextApiResponse } from 'next'
import { generateRssFeed } from '../../utils/generateRSSFeed'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { type = 'atom' } = req.query

    const typeAsString = Array.isArray(type) ? type[0] : type

    if (typeAsString !== 'rss' && typeAsString !== 'atom' && typeAsString !== 'json') {
      return res.status(400).json({ error: 'Invalid type' })
    }
    const rss = await generateRssFeed(typeAsString)

    // set response content header to xml
    switch (typeAsString) {
      case 'rss':
        res.setHeader('Content-Type', 'application/rss+xml')
      case 'atom':
        res.setHeader('Content-Type', 'application/atom+xml')
      case 'json':
        res.setHeader('Content-Type', 'application/json')
    }
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=3600')

    return res.status(200).send(rss)
  } catch (e: unknown) {
    if (!(e instanceof Error)) {
      throw e
    }

    return res.status(500).json({ error: e.message || '' })
  }
}
