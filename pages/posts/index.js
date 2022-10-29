import Image from 'next/image'
import Link from 'next/link'

import { getAllPosts, getAuthorBySlug } from '../../lib/api'

export default function Posts({ posts }) {
  return (
    <div className="posts">
      <h1>Posts</h1>

      {posts.map(post => {
        const prettyDate = new Date(post.createdAt).toLocaleString('en-US', {
          month: 'short',
          day: '2-digit',
          year: 'numeric',
        })

        return (
          <article key={post.slug}>
            <h2>
              <Link href={post.permalink}>
                {post.title}
              </Link>
            </h2>

            <p>{post.excerpt}</p>

            <div>
              <Image alt={post.author.name} src={post.author.profilePictureUrl} height={40} width={40} />

              <div>
                <strong>{post.author.name}</strong>
                <time dateTime={post.createdAt}>{prettyDate}</time>
              </div>
            </div>

            <Link href={post.permalink}>
              Read more →
            </Link>
          </article>
        )
      })}
    </div>
  )
}

export function getStaticProps() {
  return {
    props: {
      posts: getAllPosts().map(post => ({
        ...post,
        author: getAuthorBySlug(post.author),
      })),
    }
  }
}
