import Image from 'next/image'
export default function HomeContent() {
    return (
        <>
        <section className="container mx-auto">
            <div className="flex flex-wrap">
                <div className="w-full p-4 mt-12 lg:w-1/3 ">
                    <div className="h-full overflow-hidden shadow-3xl">
                        <div className="p-2">
                            <div className="inline-flex items-center mb-1">
                                <strong className="text-xs font-medium tracking-widest text-yellow-500 uppercase ">outrun</strong>
                                <p className="ml-4 text-xs text-gray-300">01.04.21</p>
                            </div>
                            <h3
                                className="mb-8 text-lg leading-relaxed tracking-widest uppercase text-shadow-glitchText lg:text-4xl md:text-3xl ">
                                What is the Web Anyway?.
                            </h3>
                            <p className="mb-3 text-base leading-relaxed md:text-xl lg:text-base">In order to understand what the web3 has to offer it is
                            fundamentally important to understand the web as we know and use today. Let&#39;s deep dive into what the web is.
                            </p>

                            <a className="inline-flex items-center mt-2">
                                <Image
                                    alt="blog"
                                    width={80}
                                    height={80}
                                    src="https://pbs.twimg.com/profile_images/1315223444729065472/24GP8wBe_400x400.jpg"
                                    className="flex-shrink-0 object-cover object-center w-12 h-12 rounded-full"

                                />
                                <span className="flex flex-col flex-grow ml-8 lg:ml-16">
                                    <span className="text-xs font-medium">Michael J. Fox</span>
                                    <span className="text-cyan-300 text-sm tracking-widest mt-0.5 font-dafoe"> skater</span>
                                </span>
                            </a>
                            <div className="flex flex-wrap items-center mt-8 ">
                                <a href="./blog-post.html"
                                    className="inline-flex items-center px-6 py-3 text-base font-semibold uppercase transition duration-500 ease-in-out transform border border-white hover:shadow-glitchBox md:mb-2 lg:mb-0">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full p-4 mt-12 lg:w-1/3 ">
                    <div className="h-full overflow-hidden shadow-3xl">
                        <div className="p-2">
                            <div className="inline-flex items-center mb-1">
                                <strong className="text-xs font-medium tracking-widest text-yellow-500 uppercase ">synthwave</strong>
                                <p className="ml-4 text-xs text-gray-300">18.05.21</p>
                            </div>
                            <h3
                                className="mb-8 text-lg leading-relaxed tracking-widest uppercase text-shadow-glitchText lg:text-4xl md:text-3xl ">
                                BlockChain and DLT 101.</h3>
                            <p className="mb-3 text-base leading-relaxed md:text-xl lg:text-base">Bitcoin, Ethereum, XRP, CDBD&#39;s they all share
                            at their core Blockchain technology or also know Distributed Ledger Technology, let&#39;s find out together and unpack the beast.
                            </p>
                            <a className="inline-flex items-center mt-2">
                                <Image
                                    alt="blog"
                                    width={80}
                                    height={80}
                                    src="https://pbs.twimg.com/profile_images/788139354241794049/Lt8aGdaD_400x400.jpg"
                                    className="flex-shrink-0 object-cover object-center w-12 h-12 rounded-full"

                                />
                                <span className="flex flex-col flex-grow ml-8 lg:ml-16">
                                    <span className="text-xs font-medium">Gabriel perales</span>
                                    <span className="text-cyan-300 text-sm tracking-widest mt-0.5 font-dafoe"> All Mighty</span>
                                </span>
                            </a>
                            <div className="flex flex-wrap items-center mt-8 ">
                                <a href="./blog-post.html"
                                    className="inline-flex items-center px-6 py-3 text-base font-semibold uppercase transition duration-500 ease-in-out transform border border-white hover:shadow-glitchBox md:mb-2 lg:mb-0">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full p-4 mt-12 lg:w-1/3 ">
                    <div className="h-full overflow-hidden ">
                        <div className="p-2">
                            <div className="inline-flex items-center mb-1">
                                <strong className="text-xs font-medium tracking-widest text-yellow-500 uppercase ">vaporwave</strong>
                                <p className="ml-4 text-xs text-gray-300">10.03.21</p>
                            </div>
                            <h3
                                className="mb-8 text-lg leading-relaxed tracking-widest uppercase text-shadow-glitchText lg:text-4xl md:text-3xl ">
                                Bitcoin in a nutshell.
                            </h3>
                            <p className="mb-3 text-base leading-relaxed md:text-xl lg:text-base">Just say anything,
                                George, say what ever's natural, the first thing that comes to your mind. Take that you mutated
                                son-of-a-bitch. My pine, why you. You space bastard, you killed a pine.
                            </p>
                            <a className="inline-flex items-center mt-2">
                                <Image
                                    alt="blog"
                                    width={80}
                                    height={80}
                                    src="https://i.pinimg.com/originals/e2/79/5a/e2795adbedb9714bd9335c1f97379f04.jpg"
                                    className="flex-shrink-0 object-cover object-center w-12 h-12 rounded-full"

                                />
                                <span className="flex flex-col flex-grow ml-8 lg:ml-16">
                                    <span className="text-xs font-medium">Alfons Åberg</span>
                                    <span className="text-cyan-300 text-sm tracking-widest mt-0.5 font-dafoe"> Weirdo</span>
                                </span>
                            </a>
                            <div className="flex flex-wrap items-center mt-8 ">
                                <a href="./blog-post.html"
                                    className="inline-flex items-center px-6 py-3 text-base font-semibold uppercase transition duration-500 ease-in-out transform border border-white hover:shadow-glitchBox md:mb-2 lg:mb-0">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        </>
    )
}