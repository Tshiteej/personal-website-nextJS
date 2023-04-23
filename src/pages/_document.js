import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

import { GA_TRACKING_ID } from "../lib/gtag";

export default class MyDocument extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
            }}
          />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Fira+Mono:wght@500&family=Roboto+Mono:ital,wght@1,500&display=swap'
            rel='stylesheet'
          />
          <link rel='icon' href='/tb_50.png' type='image/icon type' />
          <meta property='og:url' content='https://www.tshiteej.com/' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='Tshiteej Bhardwaj' />
          <meta name='twitter:card' content='summary' />
          <meta property='og:image' content='https://www.tshiteej.com/tb_50.png' />
          <meta
            property='og:description'
            content='Portfolio site of Tshiteej Bhardwaj.'
          />
          <meta
            name='description'
            content='Portfolio site of Tshiteej Bhardwaj.'
          ></meta>
          <meta
            name='og:keywords'
            content='HTML, CSS, NEXTJS, JavaScript, PHP, Python, Automation, Regex, JS'
          />
          <meta name='og:author' content='Tshiteej Bhardwaj' />
        </Head>
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
