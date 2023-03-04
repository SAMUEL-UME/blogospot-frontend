import Login from '@/src/components/template/Login'
import Signup from '@/src/components/template/Signup'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <><Component {...pageProps} />
    <Signup/>
    </>
  )
}
