import { Html, Head, Main, NextScript } from "next/document";
import NoSsr from "utils/NoSsr";

export default function Document() {
  return (
    <Html lang="tr">
      <Head>
        <link rel="icon" href="/assets/images/logo/logoBlack.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/assets/images/logo/logoBlack.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/assets/images/logo/logoBlack.svg" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Yeryüzü Doktorları - Yönetim Paneli" />
        <link href="https://fonts.googleapis.com/css?family=Rubik:400,400i,500,500i,700,700i&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900&display=swap" rel="stylesheet" />
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
