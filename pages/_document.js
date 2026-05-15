import { Head, Html, Main, NextScript } from 'next/document';

export default function Document(props) {
  const locale = props.__NEXT_DATA__?.locale || 'es';

  return (
    <Html lang={locale}>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/assets/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/assets/logo.svg" />
        <meta name="theme-color" content="#012a4a" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
