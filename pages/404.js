import Head from 'next/head'
import Link from 'next/link'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function _404() {
  return (
    <div className="container">
      <Head>
        <title>Not Found</title>
        <link rel="icon" href="static/favicon.ico" />
      </Head>

      <main>
        <Header title="Not Found" />
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
