import Link from 'next/link'

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/authors">
                <a>Authors</a>
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
