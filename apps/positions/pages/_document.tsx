import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Favicon } from '../core/Favicon'
import { ColorModeScript } from '../utils/ColorModeScript'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* eslint-disable-next-line */}
          <ColorModeScript />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Overpass:wght@400;700;900&display=swap"
            rel="stylesheet"
          />
          <Favicon />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
