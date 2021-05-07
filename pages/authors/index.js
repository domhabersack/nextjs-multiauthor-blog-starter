import { getAllAuthors, getAllPosts } from '../../lib/api'

export default function Authors({ authors }) {
  return (
    <div className="authors">
      <h1>Authors</h1>

      {authors.map(author => (
        <div key={author.slug}>
          <h2>
            <a href={author.permalink}>
              {author.name}
            </a>
          </h2>

          <img src={author.profilePictureUrl} height="80" width="80" />

          <p>{author.posts.length} post(s)</p>

          <a href={author.permalink}>Go to profile →</a>
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
