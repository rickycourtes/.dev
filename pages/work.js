import Head from 'next/head'
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
        <Header title="Welcome to my app!" />
        <a href="/">
          Back home
        </a>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
