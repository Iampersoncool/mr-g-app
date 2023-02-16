import fs from 'fs'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import dayjs from 'dayjs'
import styles from '@/styles/Pages/Post.module.css'
import Head from 'next/head'
import rehypeHighlight from 'rehype-highlight'

import 'highlight.js/styles/atom-one-dark.css'

const ShowPage = ({ mdxSource }) => {
  const frontMatter = mdxSource.frontmatter
  const date = dayjs(frontMatter.date).format('DD/MM/YY')

  return (
    <div className={`${styles.center} ${styles.post}`}>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>

      <main className={styles.center}>
        <h1>{frontMatter.title}</h1>
        <p>{date}</p>
        <p>{frontMatter.description}</p>
        <hr className={styles.wMax} />
      </main>
      <article className={styles.center}>
        <MDXRemote {...mdxSource} />
      </article>
    </div>
  )
}

export async function getStaticPaths() {
  const fileNames = fs.readdirSync('posts')

  return {
    paths: fileNames.map((fileName) => {
      return {
        params: { slug: fileName.split('.')[0] },
      }
    }),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const fullPath = path.join('posts', `${params.slug}.mdx`)
  const text = fs.readFileSync(fullPath)
  const mdxSource = await serialize(text, {
    parseFrontmatter: true,
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
    },
  })

  return {
    props: {
      mdxSource: JSON.parse(JSON.stringify(mdxSource)),
    },
  }
}

export default ShowPage
