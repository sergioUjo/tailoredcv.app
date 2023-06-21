import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>TailoredCV</title>
      <meta
          name="description"
          content="The ultimate app designed to elevate your job application game. Empowers you to create personalized résumés and cover letters for each specific position you apply to."
      />
      <meta property="og:image" content="/tailoredBite.png"/>
      <meta
          property="og:description"
          content="The ultimate app designed to elevate your job application game. Empowers you to create personalized résumés and cover letters for each specific position you apply to."
      />
      <meta property="og:title" content="TailoredCV"/>
      <link rel="icon" href="/logo.svg"/>
    </Head>
    <Component {...pageProps} />
  </>
}
