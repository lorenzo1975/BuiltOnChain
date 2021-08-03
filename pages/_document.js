import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Mr+Dafoe&display=swap" rel="stylesheet" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" rel="stylesheet" />

        <Head />
        <body className="bg-gradient-to-r dark:from-gray-700 dark:via-gray-900 dark:to-black
                from-gray-100 to-yellow-100 dark:text-white text-gray-800 ">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument