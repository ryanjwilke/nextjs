import Head from 'next/head'
import Link from 'next/link'
import routes from '../data/routes.yml'
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
              {routes.map((route, index) => {
                return (
                  <li key={`nav-${index}`}>
                    <Link href={route.path}>
                      <a>{route.name}</a>
                    </Link>
                  </li>
                )
              })}
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
