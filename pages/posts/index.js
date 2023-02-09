import styles from '@/styles/Posts.module.css'
import path from 'path'
import fs from 'fs'
import dayjs from 'dayjs'
import Link from 'next/link'
import { serialize } from 'next-mdx-remote/serialize'

const Posts = ({ posts }) => {
  return (
    <div className={styles.postsContainer}>
      <h1>Posts</h1>

      <div className={styles.posts}>
        {posts.map((post, index) => {
          const { title, date, description } = post.frontMatter

          const formattedDate = dayjs(date).format('DD/MM/YY')

          return (
            <div className={styles.post} key={index}>
              <h1>{title}</h1>
              <p>{description}</p>
              <p>{formattedDate}</p>
              <Link href={`/posts/${post.slug}`}>Read more</Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const fileNames = fs.readdirSync('posts')

  const map = await Promise.all(
    fileNames.map(async (fileName) => {
      const text = fs.readFileSync(path.join('posts', fileName))

      const mdxSource = await serialize(text, {
        parseFrontmatter: true,
      })

      return {
        frontMatter: mdxSource.frontmatter,
        slug: fileName.split('.')[0],
      }
    })
  )

  return {
    props: {
      posts: JSON.parse(JSON.stringify(map)),
    },
  }
}

export default Posts
