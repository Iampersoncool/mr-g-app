import Link from 'next/link'
import styles from '@/styles/PageNotFound.module.css'
import Head from 'next/head'

const Custom404 = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <h1>404 - Page Not Found</h1>
      <Link href="/">Back home</Link>
    </div>
  )
}

export default Custom404
