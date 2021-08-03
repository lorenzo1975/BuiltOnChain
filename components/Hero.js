import SynthGrid from "./SynthGrid"
export default function Hero() {
    return (
        <>
            <SynthGrid />
            <section>
                <div className="container px-5 mx-auto ">
                    <div className="flex items-center justify-center ">
                        <div className="flex flex-col items-center justify-center h-1/2 lg:-mt-44">
                            <h1 className="mx-auto text-5xl leading-none tracking-tight wicked md:-mb-6 font-monoton blog lg:text-16xl">BUILT on</h1>
                            <h3 className="text-2xl leading-none text-pink-500 transform -skew-y-6 lg:ml-auto lg:-mt-16 wicked lg:text-10xl text-shadow-synthText font-dafoe md:text-4xl">
                                Chain</h3>
                        </div>
                    </div>
                    <div className="py-16">
                        <p className="mx-auto text-base font-medium leading-relaxed text-center dark:text-white text-gray-800 lg:w-1/2">
                            Welcome to Web3, Decentralization, Blockchain Technology, a more inclusive and democratic web. The first internet
                            revolution made possible to exchange information as never possible before. Web3 is making value exchange possible
                            in ways never thought before.
                        </p>
                    </div>
                </div>

            </section>
        </>
    )
}