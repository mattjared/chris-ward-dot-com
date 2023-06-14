import Image from 'next/image'
import Tiles from "./Tiles"
import Contact from "./Contact"
import Footer from "./Footer"

export default function Home() {
  return (
    <main className='bg-cyan-500'>
      <section className="py-10 md:pt-24 md:pb-12 container max-w-screen-xl mx-auto px-4 text-center">
        <Image src="/CJ Cookie.jpg" alt="" width="350" height="350" className="mx-auto mb-16 rounded-full" />
        <h1 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">Chris Ward</h1>
        <h2 className='text-6xl font-bold'>Sales Guy @ Vercel</h2>
        <p className="font-bold text-teal-300 text-md md:text-xl my-16">I love Julie</p>
      </section>
      <Contact />
      <Tiles />
      <Footer />
    </main>
  )
}
