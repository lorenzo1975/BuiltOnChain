import { NextSeo } from 'next-seo'
import siteMetadata from '@/data/siteMetadata'
import Hero from '@/components/Hero'
import HomeContent from '@/components/HomeContent'

export default function Home() {
  return (
    <div>
      <NextSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />

      <Hero />

        <section className="justify-center pt-24 body-font">
          <div className="container px-5 mx-auto lg:px-28">
            <div className="flex flex-wrap px-6 lg:px-0 lg:mb-10">
              <h2 className="mb-4 text-2xl font-medium text-fuchsia-400 lg:text-6xl title-font font-dafoe lg:mb-0">
                Why?
              </h2>
            </div>
          </div>
        </section>
        <section className="body-font">
          <div className="container px-5 mx-auto lg:px-28 lg:py-4">
            <div className="flex flex-col gap-6 lg:flex-row">

              <div className="w-full px-4 mt-12 text-lg leading-snug tracking-tight lg:w-1/2 lg:px-0">
                <p className="pb-6">The web as we know has been a revolution that has far exceeded expectations changing our
                  lives in inimaginable ways in the last 20 years. We can now video call from all ends of the world, exchange messages instantly, have some
                  what free information accessible at google search.</p>
                <p className="pb-6">
                  The web namly World Wide Web was supposed to be an inclusive platform for people to exchange information, conduct business at global scale
                  with no boundaries of social status or gender. This has worked well for the first years of its enfant life then things started to change.
                </p>

              </div>
              <div className="w-full px-4 mt-12 text-lg leading-snug tracking-tight lg:w-1/2 lg:px-0">
                <p className="pb-6">Fast forward to {new Date().getFullYear()} and the internet is literally overun by a handful of companies.
                  We have Amazon for shopping online, Booking for holidays, Google for search, Facebook for social interaction, Paypal for payments.
                  In very simple words today&#39;s internet is centralized.</p>
                <p className="pb-6">
                  Web3 projects along with decentralization are the next attempt at bringing the web back into the hands of everyone. This is how big
                  the blockchain revolution is. With these new technologies the web is being re-invented with a more inclusive and democratically set of
                  services and platforms where the individual is back at centre of the web.
                </p>
                <p className="my-12 ml-auto text-xl text-right text-cyan-300 font-dafoe ">Welcome to Web3!</p>

              </div>


            </div>
          </div>
        </section>
        <HomeContent />
    </div>
  )
}
