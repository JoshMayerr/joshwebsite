import Nav from "../components/Nav";
import { ArrowSmRightIcon } from "@heroicons/react/solid";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import Project from "../components/Project";
import { Disclosure, Transition } from "@headlessui/react";
import AddTag from "../components/AddTag";
import { useState, useEffect } from "react";

const tags = [
  "laravel",
  "react",
  "photoshop",
  "illustrator",
  "nodeJs",
  "year2021",
  "year2020",
  "webDev",
  "design",
];

export default function Worklog({ projects = [] }) {
  const [filter, setFilter] = useState(null);
  const [allProjects, setAllProjects] = useState(projects);
  console.log(projects);

  useEffect(() => {
    console.log(filter, "filter");
    if (filter) {
      console.log("a", filter);
      setAllProjects(
        allProjects.filter(
          (p) =>
            p.fields.title.toLowerCase().indexOf(filter.toLowerCase()) >= 0 ||
            p.fields.blurb.toLowerCase().indexOf(filter.toLowerCase()) >= 0
        )
      );
    } else {
      setAllProjects(projects);
    }
  }, [filter]);

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
                  className="focus:ring-indigo-500 sm:text-md focus:border-indigo-500 block w-full rounded-none tracking-wider py-3 px-4 rounded-l-md border-2 border-r-0  border-black placeholder-black dark:bg-transparent dark:placeholder-white dark:border-white"
                  placeholder="Search to Filter..."
                  onKeyUp={(e) => setFilter(e.target.value)}
                />
              </div>
              <button
                className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border-l-0 border-2 border-gray-900 dark:border-white text-sm font-medium rounded-r-md dark:bg-white text-white dark:text-black bg-black  focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 "
                onClick={() => setFilter(filter)}
              >
                <ArrowSmRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-2">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button>
                      <div className="flex items-center focus:outline-none ml-1">
                        Filter By Tag
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
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      {/*
              Don't forget to add `static` to your Disclosure.Panel!
            */}
                      <Disclosure.Panel static>
                        <div className="mt-2 border-black border-2 shadow-sm dark:border-gray-100 rounded-lg w-full ">
                          <div className="py-2 flex justify-center flex-wrap">
                            {tags.map((tag) => (
                              <AddTag name={tag} key={tag} filter={filter} />
                            ))}
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
            {allProjects.length > 0 ? (
              allProjects.map((project) => (
                <Project
                  key={project.sys.id}
                  title={project.fields.title}
                  blurb={project.fields.blurb}
                  richText={project.fields.richText}
                  thumbnail={project.fields.thumbnail.fields.file.url}
                  photo={project.fields.photos[0].fields.file.url}
                  githubLink={project.fields.githubLink}
                  demoLink={project.fields.demoLink}
                  date={project.fields.date}
                  tags={project.metadata.tags}
                />
              ))
            ) : (
              <div className="text-white text-lg col-span-3 flex justify-center lg:h-48">
                No projects found with this criteria :)
              </div>
            )}
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
    .getEntries({ content_type: "project", order: "-fields.priority" })
    .then((response) => response.items);

  return {
    props: {
      projects,
    },
  };
}
