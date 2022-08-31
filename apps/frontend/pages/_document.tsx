import Document, { Html, Head, Main, NextScript } from "next/document"
import { ColorModeScript } from "../utils/ColorModeScript"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* eslint-disable-next-line */}
          <ColorModeScript />
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
