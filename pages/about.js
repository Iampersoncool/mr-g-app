import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Pages/About.module.css'

const About = () => {
  return (
    <div>
      <Head>
        <title>About me</title>
      </Head>

      <div className={styles.container}>
        <h1>About me</h1>
        <p>My name is Eduardo Guerena, aka Mr. G</p>

        <Image
          src="https://via.placeholder.com/400"
          width={400}
          height={400}
          title="My image"
          alt="Mr. g"
          priority={true}
        ></Image>

        <p>I currently don&apos;t have a picture of myself</p>
      </div>
    </div>
  )
}

export default About
