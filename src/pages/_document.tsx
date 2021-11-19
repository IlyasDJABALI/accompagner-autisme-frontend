import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="fr">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/images/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=optional"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=optional"
            rel="stylesheet"
          />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Site de l'Association Accompagner l'Autisme, créée en octobre 2016, à Orléans."
          />
          <link rel="apple-touch-icon" href="/images/logo-AAA.png" />
          <link rel="manifest" href="/manifest.json" />
          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
