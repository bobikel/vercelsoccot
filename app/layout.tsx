import Footer from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VII ieme CONGRES ANNUEL',
  description: 'VII ieme CONGRES ANNUEL',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="">
          <div className=" flex justify-between items-center p-[20px] container">

            <div className="brand-container">
              <Link className="brand" href="/">
                <Image
                  src='/assets/images/logo/th.png' width={150} height={70}
                  alt="Ministere de la santé publique" /></Link>
            </div>

            <div className="text-center max-w-[700px]">
              <h2 className=' font-bold lg:text-[60px] md:text-[40px]  text-gradient' >Du 3 au 5 Août 2023</h2>
              <h2 className='text-gradient1 md:text-[30px] font-semibold'>à l&#39;Hôtel La Falaise de Yaoundé</h2>
            </div>
            <div className="brand-container">
              <Link className="brand" href="/">
                <Image
                  src='/assets/images/vlc.png' width={150} height={70}
                  alt="" /></Link>
            </div>
          </div>



        </header>
        <Nav></Nav>
        {children}

        <Footer />
      </body>
    </html>
  )
}
