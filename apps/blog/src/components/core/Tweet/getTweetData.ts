export interface PublishTweet {
  url: string
  author_name: string
  author_url: string
  html: string
  width: number
  height?: any
  type: string
  cache_age: string
  provider_name: string
  provider_url: string
  version: string
}

export const getTweet = async (url: string): Promise<string> => {
  const tweetUrl = `https://publish.twitter.com/oembed?dnt=1&url=${url}`
  const response = await fetch(tweetUrl)
  try {
    const data = (await response.json()) as PublishTweet

    return data.html
  } catch (error) {
    console.error(error)
    return ''
  }
}
