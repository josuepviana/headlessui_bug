import React from "react";


export default function Sobre() {
  return (
    <div className="h-full relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative h-full pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

  
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8   ">
            <div className=" sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl pt-10">
                <span className="text-gray-500 leading-tight block xl:inline italic	">MY NAME IS </span>{' '}
                <span></span><span className="welcome block xl:inline">THE WIZARD</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                this is placeholder lol
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-auto object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="placeholder2.png"
          alt=""
        />
      </div>
    </div>
  )
}
