import './globals.css'
import {DM_Sans} from 'next/font/google'

const DMsans = DM_Sans({
  subsets:['latin'],  
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})


export const metadata = {
  title: 'Movie-Box',
  description: 'Movie Discovery'
}



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={DMsans.className}>
      <body>{children}</body>
    </html>
  )
}
