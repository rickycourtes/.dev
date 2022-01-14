import { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Card from '@components/Card'
import { attributes, react as HomeContent } from '../content/home.md';

export default class Home extends Component {
  render() {
    let { title, theme, projects } = attributes;
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
          <meta name="theme-color" content={theme == 'dark' ? '#000' : '#fff' }></meta>
          <Script src="../static/js/main.js" defer />
        </Head>
        <main>
          <Header title={title} />
          <Link href="/me">
            <a className='btn avatar' aria-label='About Me'>
              <img src='/static/img/favicon/android-chrome-192x192.png'/>
            </a>
          </Link>
          <p>Check out my latest projects!</p>
          {/* <ul className='list'>
            {projects.map((project, k) => (
              <Card key={k}>
                <h2>{project.name}</h2>
                <p className="description"><code>{project.description}</code></p>
              </Card>
            ))}
          </ul> */}
          <Link href="/design">
            <a className='btn'>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><title>blueprint</title><g fill="#757575"><path d="M39,30a1,1,0,0,0,1,1h1a6.989,6.989,0,0,1,6,3.408V8a7,7,0,0,0-7.011-7A1,1,0,0,0,39,2Z"></path><path d="M41,33H39.777A2.777,2.777,0,0,1,37,30.223V7H2A1,1,0,0,0,1,8V42a1,1,0,0,0,1,1H41a5,5,0,0,0,0-10Zm-9,3a1,1,0,0,1-1,1H15a1,1,0,0,1-1-1V32a1,1,0,0,1,2,0v3H30V15H21v9a1,1,0,0,1-1,1H15a1,1,0,0,1,0-2h4V15H8V36a1,1,0,0,1-2,0V14a1,1,0,0,1,1-1H31a1,1,0,0,1,1,1Z" fill="#757575"></path></g></svg>
              View UI Shots
            </a>
          </Link>
          <Link href="/work">
            <a className='btn'>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><title>blueprint</title><g fill="#757575"><path d="M39,30a1,1,0,0,0,1,1h1a6.989,6.989,0,0,1,6,3.408V8a7,7,0,0,0-7.011-7A1,1,0,0,0,39,2Z"></path><path d="M41,33H39.777A2.777,2.777,0,0,1,37,30.223V7H2A1,1,0,0,0,1,8V42a1,1,0,0,0,1,1H41a5,5,0,0,0,0-10Zm-9,3a1,1,0,0,1-1,1H15a1,1,0,0,1-1-1V32a1,1,0,0,1,2,0v3H30V15H21v9a1,1,0,0,1-1,1H15a1,1,0,0,1,0-2h4V15H8V36a1,1,0,0,1-2,0V14a1,1,0,0,1,1-1H31a1,1,0,0,1,1,1Z" fill="#757575"></path></g></svg>
              View Frontend Pens
            </a>
          </Link>
          <HomeContent />
        </main>
        <Footer />
        <style jsx global>
          {`
            body, html {
              background-color: ${theme == 'dark' ? '#000' : '#fff'};
              color: ${theme == 'dark' ? '#fff' : '#000'};
            }
          `}
        </style>
      </div>
    )
  }
}