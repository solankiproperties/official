import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          {/* <link rel="shortcut icon" href={favicon} /> */}
          <title>Unboxx Business | Grow Your Business Now</title>
          <link rel="shortcut icon" href="/icon.png" />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
