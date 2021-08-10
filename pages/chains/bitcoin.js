import { NextSeo } from 'next-seo';
export default function bitcoin() {
  return (
    <>
      <NextSeo
        title="What is bitcoin, explained simple"
        description="The best explanation of bitcoin"
      />
      <section className="justify-center pt-24 body-font">
        <div className="container px-5 mx-auto lg:px-28">
          <div className="flex flex-wrap px-6 lg:px-0 lg:mb-10">
            <h2 className="mb-4 text-2xl font-medium text-fuchsia-400 lg:text-6xl title-font font-dafoe lg:mb-0">
              What is Bitcoin?
            </h2>
          </div>
        </div>
      </section>
      <article className="prose dark:prose-dark lg:prose-xl">
        <h1>
          Bticoin, a new monetary system: a World and Interplanetary self
          sovreign bank!
        </h1>
        <p>
          Explaining bitcoin does not have to be complex. We can skip all the
          economy and math basics and grasp the ideas and concepts behind it.
        </p>
        <p>Bitcoin was created</p>
      </article>
    </>
  );
}
