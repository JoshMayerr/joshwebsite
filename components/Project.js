import { ArrowRightIcon, ExternalLinkIcon } from "@heroicons/react/solid";
import { PhotographIcon } from "@heroicons/react/outline";
import Modal from "../components/Modal";
import { useState } from "react";
import Image from "next/image";
import Tag from "../components/Tag";
import Date from "../components/DateTag";

export default function Project({
  title,
  description,
  thumbnail,
  photo,
  githubLink,
  demoLink,
  date,
  tags,
}) {
  const [open, setOpen] = useState(false);

  return (
    <li className="col-span-1 flex flex-col text-center rounded-lg border-2 border-black dark:border-white  transition ease-in-out ">
      <div className="flex-1 flex flex-col p-6 hover:border-indigo-500">
        <div className="flex justify-between">
          <span>
            <Date date={date} />
          </span>
          <button className="-mt-1 -mr-1" onClick={() => setOpen(!open)}>
            <PhotographIcon
              className="h-6 w-6  hover:text-indigo-500 transition duration-500 ease-in-out"
              aria-hidden="true"
            />
          </button>
          <Modal open={open} setOpen={setOpen} photo={photo} />
        </div>
        <div className="mt-4 ">
          <div
            onClick={() => setOpen(!open)}
            className="aspect-w-16 aspect-h-9 shadow-md hover:shadow-none transition ease-in-out cursor-pointer rounded-lg"
          >
            <Image
              className="object-cover rounded-lg hover:opacity-75 transition ease-in-out"
              src={`https:${thumbnail}`}
              alt=""
              layout="fill"
            />
          </div>
        </div>
        <h3 className="mt-4  text-5xl">{title}</h3>
        <dl className="mt-4 flex-grow flex flex-col justify-between ">
          <dt className="sr-only">Title</dt>
          <dd className="text-gray-600 dark:text-gray-400 text-sm">
            {description}
          </dd>
          <dt className="sr-only">Role</dt>
          <dd className="mt-1 space-x-2  flex flex-wrap justify-center">
            {tags.map((tag) => (
              <Tag name={tag.sys.id} key={tag.sys.id} />
            ))}
          </dd>
          <dd className="mt-6 text-md flex justify-between">
            {githubLink && (
              <a
                target="_blank"
                href={githubLink}
                className="flex items-center hover:text-indigo-500 transition duration-500 ease-in-out"
              >
                GitHub
                <span className="">
                  <ArrowRightIcon
                    className="h-4 w-4 transform -rotate-45 ml-1"
                    aria-hidden="true"
                  />
                </span>
              </a>
            )}
            {demoLink && (
              <a
                target="_blank"
                href={demoLink}
                className="flex items-center hover:text-indigo-500 transition duration-500 ease-in-out"
              >
                Demo
                <span className="">
                  <ArrowRightIcon
                    className="h-4 w-4  transform -rotate-45 ml-1"
                    aria-hidden="true"
                  />
                </span>
              </a>
            )}
          </dd>
        </dl>
      </div>
    </li>
  );
}
