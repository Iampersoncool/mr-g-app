import '@/styles/globals.css'
import NavBar from '@/components/NavBar'
import { useRouter } from 'next/router'

function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
      {router.pathname !== '/404' && <NavBar />}
      <Component {...pageProps} />
    </>
  )
}

export default App
