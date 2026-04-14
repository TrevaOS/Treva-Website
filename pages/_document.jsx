import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google tag (gtag.js) - GA4 + Google Ads — only on production domain */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16476740279"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              if (typeof window !== 'undefined' && window.location.hostname === 'www.treva.in') {
                gtag('config', 'AW-16476740279');
                gtag('config', 'G-4DSTE2JTRL', {
                  linker: {
                    domains: ['treva.in', 'www.treva.in']
                  }
                });
              }
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
