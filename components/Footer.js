import Logo from "./Logo"
export default function Footer() {
    return (
        <footer className="font-sans body-font font-inter backdrop-filter backdrop-blur-3xl">
            <div className="container flex flex-col items-center px-5 py-8 mx-auto sm:flex-row lg:px-24">
                <a href="https://www.wickedtemplates.com/"
                    className="flex items-center justify-center font-medium text-white title-font md:justify-start ">
                    <Logo />
                </a>
                <p className="text-sm  t-4 sm:ml-4 sm:pl-4 sm:border-l-2 sm:py-2 sm:mt-0">
                    © 2020
                    <a href="https://twitter.com/wickedtemplates" className="ml-1 text-yellowGray-600 hover:text-yellow-500"
                        rel="noopener noreferrer" target="_blank">@wickedtemplates</a>
                </p>
                <span className="inline-flex items-center justify-start gap-2 mt-4 lg:mt-0">
                    <p className="mt-4 text-sm  sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 hover:text-yellow-500">
                        <a href="https://www.wickedtemplates.com/templates.html" rel="noopener noreferrer">Templates</a>
                    </p>
                    <p className="mt-4 text-sm  sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 hover:text-yellow-500">
                        <a href="https://www.wickedtemplates.com/demos.html" rel="noopener noreferrer">Freebies</a>
                    </p>
                    <p className="mt-4 text-sm  sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 hover:text-yellow-500">
                        <a href="https://www.wickedtemplates.com/pricing.html" rel="noopener noreferrer">Pricing</a>
                    </p>
                </span>
                <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
                    <a className="">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5"
                            viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </a>
                    <a className="ml-3 ">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5"
                            viewBox="0 0 24 24">
                            <path
                                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                            </path>
                        </svg>
                    </a>
                    <a className="ml-3 ">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            className="w-5 h-5" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                    </a>
                    <a className="ml-3">
                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                            strokeWdth="0" className="w-5 h-5" viewBox="0 0 24 24">
                            <path stroke="none"
                                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
                            </path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                    </a>
                </span>
            </div>
        </footer>
    )
}