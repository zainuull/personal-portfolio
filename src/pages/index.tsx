import Image from 'next/image'
import { Inter } from 'next/font/google'
import AboutPage from './about'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <AboutPage/>
  )
}
