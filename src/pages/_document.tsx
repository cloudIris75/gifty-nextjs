import { Html, Head, Main, NextScript } from 'next/document';

function MyDocument() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="https://gifty-bucket.s3.ap-northeast-2.amazonaws.com/favicon/favicon_created_by_logaster.ico"
        />
        <title>GIFTY</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
