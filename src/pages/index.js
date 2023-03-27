import Head from 'next/head'
import { useSession } from 'next-auth/react'

export default function Home() {

  return (
    <>
      <Head>
        <title>Next Auth Template</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>Landing</p>
      </main>
    </>
  )
}