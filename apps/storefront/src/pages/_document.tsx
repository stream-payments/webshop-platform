import { MEDUSA_BACKEND_URL } from "@lib/config"
import Document, { Head, Html, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    const { hostname } = new URL(MEDUSA_BACKEND_URL)

    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href={`//${hostname}`} />
          <link rel="dns-prefetch" href={`//${hostname}`} />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
            rel="stylesheet"
          />
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
