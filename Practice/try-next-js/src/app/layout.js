import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'], weight: ["100", "300", "400", "500", "700", "900"],
  variable: '--font-roboto'
})

export const metadata = {
  title: 'the nextjs app',
  description: 'the nextjs app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-roboto`} >
        {children}
      </body>
    </html>
  )
}
