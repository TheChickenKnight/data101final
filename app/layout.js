import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TheChickenKnight',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + "h-screen flex flex-row justify-start"}>
        <Sidebar/>
        <div className='h-screen px-4 pt-8 pb-4 flex justify-between flex-col w-20'/>
        <div className='flex-1 p-4'>{children}</div>
      </body>
    </html>
  )
}
