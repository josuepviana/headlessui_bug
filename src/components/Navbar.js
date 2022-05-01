import React from "react";
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: '〰️ This', href: '#this' },
  { name: '〰️ that', href: '#that' },
  { name: '〰️ those', href: '#those' },
]
export default function Navbar() {

/*  window.onload = function(){ 

    document.getElementById('nav-toggle').onclick = function(){
    document.getElementById("nav-content").classList.toggle("hidden");
  }};*/

  return (
<Popover className={"items-center sticky top-0 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600"}>
            <div className="container  z-auto mx-auto  relative pt-4 px-4 sm:px-6 lg:px-8 pb-7">
              <nav className=" relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                      <span className="sr-only">HeadlessUiBug</span>
                      <img
                        className="h-20 mt-2"
                        src="placeholder.png"
                        alt="Logo"
                      />
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-white rounded-md p-2 mr-10 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Abrir menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="menu-options hidden md:block md:ml-10 md:pr-2 md:space-x-8 ">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="btn p-2 font-black hover:shadow-xl rounded-full  focus:outline-none hover:text-white hover:bg-gray-100 hover:text-gray-800 rounded text-lg">
                      {item.name}
                    </a>
                  ))}
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-12 w-auto"
                        src="placeholder.png"
                        alt="Logo"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Fechar menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
  );
}
