import { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { attributes, react as HomeContent } from '../content/home.md';

// export default function Home() {
//   return (
//     <div className="container">
//       <Head>
//         <title>Next.js Starter!</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main>
//         <Header title="Welcome to my app!" />
//         <Link href="/work">
//           <a>Work</a>
//         </Link>
//         <p className="description">
//           Get started by editing <code>pages/index.js</code>
//         </p>
//       </main>
//       <Footer />
//     </div>
//   )
// }

export default class Home extends Component {
  render() {
    let { title, projects } = attributes;
    return (
      <div className="container">
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
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