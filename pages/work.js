import Head from 'next/head'
import Link from 'next/link'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Work() {
  return (
    <div className="container">
      <Head>
        <title>Work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Work" />
        <Link href="/">
          <a>Back home</a>
        </Link>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
