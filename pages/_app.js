import Link from 'next/link'

import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">
                Home
              </Link>
            </li>

            <li>
              <Link href="/posts">
                Posts
              </Link>
            </li>

            <li>
              <Link href="/authors">
                Authors
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}
