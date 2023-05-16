// src/pages/api/rss/index.ts
import { generateRssFeed } from '../../utils/generateRSSFeed'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    const type = req.nextUrl.searchParams.get('type') || 'atom'

    const typeAsString = Array.isArray(type) ? type[0] : type

    if (typeAsString !== 'rss' && typeAsString !== 'atom' && typeAsString !== 'json') {
      return NextResponse.json({ error: 'Invalid type' }, { status: 400 })
    }

    const rss = await generateRssFeed(typeAsString)

    let headers: RequestInit['headers'] = {}
    // set response content header to xml
    switch (typeAsString) {
      case 'rss':
        headers['Content-Type'] = 'application/rss+xml'
      case 'atom':
        headers['Content-Type'] = 'application/atom+xml'
      case 'json':
        headers['Content-Type'] = 'application/json'
    }

    headers['Cache-Control'] = 'max-age=0, s-maxage=3600'

    return new Response(rss, { headers })
  } catch (e: unknown) {
    console.error(e)
    if (!(e instanceof Error)) {
      throw e
    }

    return NextResponse.json({ error: e.message || '' }, { status: 500 })
  }
}
