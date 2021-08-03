import { NextSeo } from 'next-seo';
import siteMetadata from '@/data/siteMetadata'
import ThemeSwitch from '@/components/ThemeSwitch'
import Logo from '@/components/Logo'

export default function Home() {
  return (
    <div className="dark:bg-gradient-to-r from-gray-700 via-gray-900 to-black
                light:bg-gradient-to-3">
        <NextSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <div className="w-full text-yellow-400  backdrop-filter backdrop-blur-3xl">

<div className="flex flex-col w-full px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-32">
    <div className="flex flex-row items-center justify-between p-4">
    <Logo />
    </div>        
    <nav className="flex-col items-center flex-grow hidden px-5 py-3 md:pb-0 md:flex md:justify-end md:flex-row lg:ml-auto">
        <a className="px-4 py-2 mt-2 font-semibold text-yellow-400 uppercase transition duration-500 ease-in-out transform bg-transparent rounded-lg text-md md:mt-0 md:ml-auto hover:text-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 "
            href="./about.html">About</a>
        <a className="px-4 py-2 mt-2 font-semibold text-yellow-400 uppercase transition duration-500 ease-in-out transform bg-transparent rounded-lg text-md md:mt-0 md:ml-4 hover:text-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
            href="./contact.html"> Contact</a>
        <a className="px-4 py-2 mt-2 font-semibold text-yellow-400 uppercase transition duration-500 ease-in-out transform bg-transparent rounded-lg text-md md:mt-0 md:ml-4 hover:text-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
            href="./blog.html">Projects</a>
        <a className="px-4 py-2 mt-2 font-semibold text-yellow-400 uppercase transition duration-500 ease-in-out transform bg-transparent rounded-lg text-md md:mt-0 md:ml-4 hover:text-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
            href="./archive.html">Archive</a>
            <a className="px-4 py-2 mt-2 font-semibold text-yellow-400 uppercase transition duration-500 ease-in-out transform bg-transparent rounded-lg text-md md:mt-0 md:ml-4 hover:text-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                href="./club.html">Club</a>
<ThemeSwitch />
    </nav>
</div>
</div>
      
      <main>
      </main>
    </div>
  )
}
