import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/posts">Posts</a>
            </li>

            <li>
              <a href="/authors">Authors</a>
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

export default MyApp
