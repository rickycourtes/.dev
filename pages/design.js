import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { attributes, react as DesignContent } from '../content/design.md';

export default function Work() {
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
        <p>Let me know if any of these projects spark your interest!</p>
        <DesignContent />
        <Link href="/">
          <a className='btn'>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><title>home-3</title><g fill="#757575"><path d="M32,7.842,9,26.242V58a3,3,0,0,0,3,3H25V45a1,1,0,0,1,1-1H38a1,1,0,0,1,1,1V61H52a3,3,0,0,0,3-3V26.242ZM37,34a1,1,0,0,1-1,1H28a1,1,0,0,1-1-1V26a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1Z" fill="#757575"></path><path d="M62.625,27.219l-30-24a1,1,0,0,0-1.25,0L17,14.719V8a1,1,0,0,0-1-1H12a1,1,0,0,0-1,1V19.519l-9.625,7.7a1,1,0,0,0,1.25,1.562L32,5.281l29.375,23.5a1,1,0,1,0,1.25-1.562Z"></path></g></svg>
            Go Back Home
          </a>
        </Link>
        <p className="description">
          Sample text with <code>shortcode</code>
        </p>
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
