import Head from 'next/head'
import Link from 'next/link'
import '../styles/global.sass'

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Design System</title>
      </Head>
      <header>
        <nav>
          <h6>
            <Link href="/">
              <a>Design System</a>
            </Link>
          </h6>
          <menu>
            <ul>
              <li>
                <Link href="/">
                  <a>Overview</a>
                </Link>
              </li>
              <li>
                <Link href="/components/">
                  <a>Components</a>
                </Link>
              </li>
              <li>
                <Link href="/utilities/">
                  <a>Utilities</a>
                </Link>
              </li>
            </ul>
          </menu>
        </nav>
      </header>
      <div className="content">
        <Component {...pageProps} />
      </div>
    </div>
  )
}
