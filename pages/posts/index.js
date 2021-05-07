import { getAllPosts, getAuthorBySlug } from '../../lib/api'

export default function Posts({ posts }) {
  return (
    <div className="posts">
      <h1>Posts</h1>

      {posts.map(post => (
        <article key={post.slug}>
          <h2>
            <a href={post.permalink}>{post.title}</a>
          </h2>

          <p>{post.excerpt}</p>

          <div>
            <img src={post.author.profilePictureUrl} height="40" width="40" />

            <div>
              <strong>{post.author.name}</strong>
              <span>{post.createdAt}</span>
            </div>
          </div>

          <a href={post.permalink}>Read more →</a>
        </article>
      ))}
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
