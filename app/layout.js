import './globals.scss'
import Context from './comp/Context'
import { Inter } from 'next/font/google'
import Footer from './comp/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '장보러 가자',
  description: 'hehe',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
      </head>
      <body >
        <Context>
          <header></header>
          <main>
            {children}
          </main>
          <footer>
          <Footer/>
          </footer>
        </Context>
      </body>
    </html>
  )
}
