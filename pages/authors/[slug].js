import Image from 'next/image'
import Link from 'next/link'

import { getAllAuthors, getAllPosts, getAuthorBySlug } from '../../lib/api'

export default function Author({ author }) {
  return (
    <div className="author">
      <h1>{author.name}</h1>

      <Image alt={author.name} src={author.profilePictureUrl} height={120} width={120} />

      <h2>Posts</h2>

      <ul>
        {author.posts.map(post => (
          <li key={post.slug}>
            <Link href={post.permalink}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function getStaticProps({ params }) {
  const author = getAuthorBySlug(params.slug)

  return {
    props: {
      author: {
        ...author,
        posts: getAllPosts().filter(post => post.author === author.slug),
      },
    },
  }
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: getAllAuthors().map(author => ({
      params: {
        slug: author.slug,
      }
    }))
  }
}
