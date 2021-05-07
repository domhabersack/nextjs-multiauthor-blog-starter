import { getAllPosts, getAuthorBySlug, getPostBySlug } from '../../lib/api'

export default function Post({ post }) {
  return (
    <div className="post">
      <h1>{post.title}</h1>

      <div>
        <img src={post.author.profilePictureUrl} height="40" width="40" />

        <div>
          <strong><a href={post.author.permalink}>{post.author.name}</a></strong>
          <span>{post.createdAt}</span>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </div>
  )
}

export function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug)
  const author = getAuthorBySlug(post.author)

  return {
    props: {
      post: {
        ...post,
        author,
      },
    },
  }
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: getAllPosts().map(post => ({
      params: {
        slug: post.slug,
      },
    })),
  }
}
