import { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { attributes, react as HomeContent } from '../content/home.md';

export default class Home extends Component {
  render() {
    let { title, projects } = attributes;
    return (
      <div className="container">
        <Head>
          <title>{title}</title>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
          {/* Favicon */}
          <link rel="shortcut icon" href="../static/img/favicon/favicon.ico?v=1" />
          <link rel="icon" type="image/png" href="../static/img/favicon/favicon-16x16.png?v=1" sizes="16x16" />
          <link rel="icon" type="image/png" href="../static/img/favicon/favicon-32x32.png?v=1" sizes="32x32" />
          <link rel="apple-touch-icon" href="../static/img/favicon/apple-touch-icon.png?v=1" sizes="180x180" />
          <link rel="mask-icon" href="../static/img/favicon/safari-pinned-tab.svg?v=1" color="#1a1a1a" />
          <link rel="manifest" href="site.webmanifest" />
          <meta name="theme-color" content="#1a1a1a"></meta>
          <Script src="../static/js/main.js" defer />
        </Head>
        <main>
          <Header title={title} />
          <Link href="/work">
            <a>Work</a>
          </Link>
          <HomeContent />
          <ul>
            {projects.map((project, k) => (
              <li key={k}>
                <h2>{project.name}</h2>
                <p className="description"><code>{project.description}</code></p>
              </li>
            ))}
          </ul>
        </main>
        <Footer />
      </div>
    )
  }
}