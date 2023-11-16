import PostPreview from './post-preview'
import type Post from '../interfaces/post'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section className='blog-posts'>
      <h2 className="mb-8 text-2xl md:text-2xl font-bold tracking-tighter leading-tight">
        Blog Posts
      </h2>
      <div className="md:gap-x-32 lg:gap-x-1 gap-y-32 md:gap-y-16 mb-32 ">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}

      </div>

    </section>
  )
}

export default MoreStories
