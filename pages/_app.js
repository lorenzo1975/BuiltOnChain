import '../styles/globals.css'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />

      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
