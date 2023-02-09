import styles from '@/styles/NavBar.module.css'
import Link from 'next/link'

const NavBar = () => {
  return (
    <ul className={styles.navbar}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/posts">Blog</Link>
      </li>
      <li>
        <Link href="/asked">Who</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
      <li>
        <Link target="_blank" href="https://github.com/Iampersoncool">
          Github
        </Link>
      </li>
    </ul>
  )
}

export default NavBar
