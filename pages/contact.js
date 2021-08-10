export default function contact() {
  return (
    <>
      <section className="justify-center pt-24 ">
        <div className="container px-10 mx-auto lg:px-28">
          <div className="flex flex-wrap lg:mb-10">
            <h2 className="mb-4 text-2xl font-medium text-fuchsia-400 lg:text-6xl lg:mb-0 font-dafoe">
              Contact.
            </h2>
          </div>
        </div>
      </section>
      <section>
        <div className="container px-10 py-12 mx-auto md:px-10 lg:px-20">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
              <div className="relative flex flex-col h-full overflow-hidden lg:p-6 ">
                <h3 className="mb-8 text-lg leading-relaxed tracking-widest text-white uppercase text-shadow-glitchText lg:text-5xl">
                  Let us know what you think.
                </h3>

                <p className="flex items-start mb-2 text-base text-gray-200 lg:text-2xl text-light">
                  They wanted me to build them a bomb, so I took their plutonium
                  and in turn gave them a shiny bomb case full of used pinball
                  machine parts. Uh listen, do you know where Riverside Drive
                  is? Uh, I think so.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-4">
              <div className="p-6 border border-cyan-300">
                <div className="items-center -mx-2 md:flex">
                  <div className="w-full mx-2">
                    <label className="block mb-2 text-xs font-medium tracking-widest text-yellow-500 uppercase">
                      Name
                    </label>

                    <input
                      className="block w-full px-4 py-2 text-lg leading-relaxed tracking-widest text-white uppercase transition-all duration-500 ease-in-out transform bg-transparent border-b border-cyan-300 backdrop-filter backdrop-blur-3xl focus:border-pink-500 focus:outline-none focus:ring text-shadow-glitchText lg:text-4xl "
                      type="text"
                    />
                  </div>

                  <div className="w-full mx-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-xs font-medium tracking-widest text-yellow-500 uppercase">
                      E-mail
                    </label>

                    <input
                      className="block w-full px-4 py-2 text-lg leading-relaxed tracking-widest text-white uppercase transition-all duration-500 ease-in-out transform bg-transparent border-b border-cyan-300 backdrop-filter backdrop-blur-3xl focus:border-pink-500 focus:outline-none focus:ring text-shadow-glitchText lg:text-4xl "
                      type="email"
                    />
                  </div>
                </div>

                <div className="w-full mt-8">
                  <label className="block mb-2 text-xs font-medium tracking-widest text-yellow-500 uppercase texta-xs">
                    Message
                  </label>

                  <textarea className="block w-full h-40 px-4 py-2 text-lg leading-relaxed tracking-widest text-white uppercase transition-all duration-500 ease-in-out transform bg-transparent border-b border-cyan-300 backdrop-filter backdrop-blur-3xl focus:border-pink-500 focus:outline-none focus:ring text-shadow-glitchText lg:text-4xl "></textarea>
                </div>

                <div className="flex justify-center">
                  <button className="flex justify-center w-full px-8 py-3 mx-auto mt-4 text-2xl font-black text-white uppercase transition-all duration-500 ease-in-out transform border hover:border-cyan-300 focus:outline-none hover:shadow-glitchBox hover:text-shadow-glitchText">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
