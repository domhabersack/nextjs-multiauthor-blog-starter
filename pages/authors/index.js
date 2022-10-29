import Image from 'next/image'
import Link from 'next/link'

import { getAllAuthors, getAllPosts } from '../../lib/api'

export default function Authors({ authors }) {
  return (
    <div className="authors">
      <h1>Authors</h1>

      {authors.map(author => (
        <div key={author.slug}>
          <h2>
            <Link href={author.permalink}>
              {author.name}
            </Link>
          </h2>

          <Image alt={author.name} src={author.profilePictureUrl} height={80} width={80} />

          <p>{author.posts.length} post(s)</p>

          <Link href={author.permalink}>
            Go to profile →
          </Link>
        </div>
      ))}
    </div>
  )
}

export function getStaticProps() {
  return {
    props: {
      authors: getAllAuthors().map(author => ({
        ...author,
        posts: getAllPosts().filter(post => post.author === author.slug),
      })),
    }
  }
}
