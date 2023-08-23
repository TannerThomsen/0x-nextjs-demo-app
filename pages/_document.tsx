import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Memswap</title>
        <meta property="og:title" content="Memswap App" key="title" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
