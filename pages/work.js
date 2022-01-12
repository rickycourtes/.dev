import Head from 'next/head'
import Link from 'next/link'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Work() {
  return (
    <div className="container">
      <Head>
        <title>Work</title>
        <link rel="icon" href="static/favicon.ico" />
      </Head>

      <main>
        <Header title="Work" />
        <Link href="/">
          <a>Back home</a>
        </Link>
        <p className="description">
          Sample text with <code>shortcode</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
