import '../styles/globals.css'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
        <Head>
		      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Mr+Dafoe&display=swap" rel="stylesheet" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" rel="stylesheet" />
        
        </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
