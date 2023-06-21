import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";
import { PT_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";


const font = PT_Serif({
  weight: "400",
  subsets: ["latin"],
});
export default function App({ Component, pageProps }: AppProps) {
  return <>

    <main className={font.className}>
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
      <Analytics />
    </main>
  </>
}
