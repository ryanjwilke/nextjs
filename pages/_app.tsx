import Head from 'next/head'
import '../styles/global.sass'

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="layout">
      <Head>
        <title>Design System</title>
      </Head>
      <nav>
        <h6><a href="/">Design System</a></h6>
        <menu>
          <ul>
            <li><a href="/">Overview</a></li>
            <li><a href="/components/">Components</a></li>
            <li><a href="#">Utilities</a></li>
          </ul>
        </menu>
      </nav>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  )
}
