import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar';
import { SpeedInsights } from "@vercel/speed-insights/next";
import DarkModeButton from '@/components/ui/DarkModeButton';

const inter = Inter({ subsets: ['latin'] })
var currColor = false;

export const metadata = {
  title: 'TheChickenKnight',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SpeedInsights/>
      <body id="body" className={inter.className + "h-screen flex flex-row justify-start" + (currColor ? " dark" : "")}>
        <Sidebar/>
        <DarkModeButton/>
        <div className='h-screen px-4 pt-8 pb-4 flex justify-between flex-col w-20'/>
        <div className='flex-1 p-4 dark:bg-black'>{children}</div>
      </body>
    </html>
  )
}
