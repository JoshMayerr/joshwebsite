/* This example requires Tailwind CSS v2.0+ */
import { Children, Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  DotsVerticalIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import Footer from "./Footer";
import DarkToggle from "../components/DarkToggle";
import Meta from "../components/Meta";

const navigation = [{ name: "My Worklog", href: "/worklog", current: false }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav(props) {
  return (
    <>
      <Meta />
      <div className="font-mon transition-all">
        <Disclosure as="nav" className=" ">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between mt-8 text-center">
                  <div className="text-4xl">
                    <Link href="/">
                      <a>JM</a>
                    </Link>
                  </div>
                  <div className="flex">
                    <div className="hidden sm:flex sm:items-center sm:space-x-8">
                      {navigation.map((item) => (
                        <Link href={item.href} key={item.name}>
                          <a
                            className={classNames(
                              item.name === props.activeLink
                                ? " border-b-2 border-indigo-300"
                                : "hover:border-indigo-300 hover:border-b-2 ",
                              "inline-flex items-center px-1 pt-1  text-xl"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        </Link>
                      ))}
                      <div className="w-6 h-6 transition duration-100 ease-in-out cursor-pointer">
                        <DarkToggle />
                      </div>
                    </div>
                  </div>

                  <div className="-mr-2 flex items-center sm:hidden z-50">
                    {/* Mobile menu button */}
                    <Menu as="div" className="relative inline-block text-left">
                      {({ open }) => (
                        <>
                          <div>
                            <Menu.Button className="inline-flex justify-center items-center w-full rounded-md  px-4 py-2  text-lg font-medium  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                              Menu
                              <DotsVerticalIcon
                                className="-mr-1  ml-1 h-6 w-6"
                                aria-hidden="true"
                              />
                            </Menu.Button>
                          </div>

                          <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items
                              static
                              className="origin-top-right absolute right-0 mt-2 w-44 bg-white dark:text-black rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                            >
                              <div className="py-1">
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link href="/worklog">
                                      <a
                                        className={classNames(
                                          active && "text-indigo-500",
                                          "block px-4 py-2 text-lg"
                                        )}
                                      >
                                        My Worklog
                                      </a>
                                    </Link>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link href="https://notes.joshmayer.net">
                                      <a className="block px-4 py-2 text-lg">
                                        Writing
                                      </a>
                                    </Link>
                                  )}
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </>
                      )}
                    </Menu>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.name === props.activeLink
                          ? " border-indigo-500 text-indigo-700"
                          : "border-transparent ",
                        "block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className="sm:py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-0">
            <main>{props.children}</main>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
