import Nav from "../components/Nav";
import { ArrowSmRightIcon } from "@heroicons/react/solid";
import {
  MailIcon,
  PhoneIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/solid";
import Project from "../components/Project";
import Tag from "../components/Tag";
import { Disclosure, Transition } from "@headlessui/react";

export default function Worklog({ projects = [] }) {
  return (
    <Nav activeLink={"My Worklog"}>
      <div className="flex flex-col items-center mb-24">
        <h1 className="font-body text-8xl tracking-wide text-center mt-4 sm:mt-8">
          My Worklog
        </h1>
        <p className="mt-4 sm:mt-6 sm:w-3/4 md:w-1/2 w-full text-lg justify-self-center text-center ">
          All of my work, ever made, all in one place. Search or filter by tools
          used, skill, or year made.
        </p>
        <div className="mt-4 sm:mt-6 sm:w-3/4 w-full  ">
          <div>
            <div className="mt-1 flex rounded-md shadow-sm">
              <div className="relative flex items-stretch flex-grow focus-within:z-10">
                <input
                  type="text"
                  name="filter"
                  id="filter"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none py-3 px-4 rounded-l-md border-2 border-r-0 sm:text-sm border-black placeholder-black dark:bg-transparent dark:placeholder-white dark:border-white"
                  placeholder="Search to Filter..."
                />
              </div>
              <button className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border-l-0 border-2 border-gray-900 dark:border-white text-sm font-medium rounded-r-md dark:bg-white text-white bg-black  focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 ">
                <ArrowSmRightIcon className="h-5 w-5 " aria-hidden="true" />
              </button>
            </div>
            <div className="mt-2">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button>
                      <div className="flex items-center ">
                        Filter By
                        <span className="ml-1 w-5 h-5">
                          {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
                        </span>
                      </div>
                    </Disclosure.Button>

                    {/*
            Use the Transition + open render prop argument to add transitions.
          */}
                    <Transition
                      show={open}
                      enter="transition duration-100 ease-out"
                      enterFrom="transform  opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform  opacity-50"
                    >
                      {/*
              Don't forget to add `static` to your Disclosure.Panel!
            */}
                      <Disclosure.Panel static>
                        <div className="mt-2 bg-gray-100 rounded-lg w-full ">
                          <div className="flex flex-wrap p-4 space-x-3">
                            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800">
                              Laravel
                            </span>
                            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                              Badge
                            </span>
                            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                              Badge
                            </span>
                            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                              Badge
                            </span>
                            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                              Badge
                            </span>
                            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                              Badge
                            </span>
                            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
                              Badge
                            </span>
                            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium border border-black">
                              2019
                            </span>
                            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium border border-indigo-500 text-indigo-500">
                              WebDev
                            </span>
                            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium border border-indigo-500 text-indigo-500">
                              Design
                            </span>
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>

        <div className="mt-10 w-full">
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
            {projects.map((project) => (
              <Project
                key={project.sys.id}
                title={project.fields.title}
                description={project.fields.description}
                thumbnail={project.fields.thumbnail.fields.file.url}
                photo={project.fields.photos[0].fields.file.url}
                githubLink={project.fields.githubLink}
                demoLink={project.fields.demoLink}
                date={project.fields.date}
                tags={project.metadata.tags}
              />
            ))}
          </ul>
        </div>
      </div>
    </Nav>
  );
}

export async function getStaticProps() {
  // Create an instance of the Contentful JavaScript SDK
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  // Fetch all entries of content_type `tv`
  const projects = await client
    .getEntries({ content_type: "project" })
    .then((response) => response.items);

  return {
    props: {
      projects,
    },
  };
}
