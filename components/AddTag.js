import { useState } from "react";
import { PlusSmIcon, CheckIcon } from "@heroicons/react/solid";

function AddTagSwitch(name) {
  if (name.substring(0, 4) === "year") {
    return {
      bg: "border border-black dark:border-white",
      bgSelected: "bg-black border border-transparent",
      text: "text-black dark:text-white",
      textSelected: "text-white",
      name: name.substring(4, 8),
    };
  }
  switch (name) {
    case "react":
      return {
        bg: "border border-blue-500 ",
        bgSelected: "border bg-blue-500  border-transparent",
        text: "text-blue-500",
        textSelected: "text-white",
        name: "React",
      };
    case "laravel":
      return {
        bg: "border border-red-500 ",
        bgSelected: "border bg-red-500  border-transparent",
        text: "text-red-500",
        textSelected: "text-white",
        name: "Laravel",
      };
    case "nodeJs":
      return {
        bg: "border border-green-500 ",
        bgSelected: "border bg-green-500  border-transparent",
        text: "text-green-500",
        textSelected: "text-white",
        name: "NodeJS",
      };
    case "photoshop":
      return {
        bg: "border-blue-400 border",
        bgSelected: "bg-blue-400 border border-transparent",
        text: "text-blue-400",
        textSelected: "text-white",
        name: "Photoshop",
      };
    case "illustrator":
      return {
        bg: "border-red-300 border",
        bgSelected: "bg-red-300 border border-transparent",
        text: "text-red-300",
        textSelected: "text-white",
        name: "Illustrator",
      };
    case "webDev":
      return {
        bg: "border-indigo-400 border",
        bgSelected: "bg-indigo-400 border border-transparent",
        text: "text-indigo-400",
        textSelected: "text-white",
        name: "WebDev",
      };
    case "design":
      return {
        bg: "border-indigo-400 border",
        bgSelected: "bg-indigo-400 border border-transparent",
        text: "text-indigo-400",
        textSelected: "text-white",
        name: "Design",
      };
    default:
      return {
        bg: "border-indigo-400 border",
        bgSelected: "bg-indigo-400 border border-transparent",
        text: "text-indigo-400",
        textSelected: "text-white",
        name: name,
      };
  }
}

export default function AddTag({ name, filter, setFilter }) {
  const nam = AddTagSwitch(name);
  const [clicked, setclicked] = useState(false);
  return (
    <button
      className={`px-2 py-1 inline-flex ml-1 mr-1 mt-1 mb-1 focus:outline-none transition duration-500 ease-in-out ${
        clicked ? nam.bgSelected : nam.bg
      } text-xs font-medium ${
        clicked ? nam.textSelected : nam.text
      }  rounded-full`}
      onClick={() => {
        setclicked(!clicked);
        setFilter(!clicked ? name : "");
      }}
    >
      <div className="ml-1">{nam.name}</div>
      <div className="ml-1">
        {clicked ? (
          <CheckIcon className="h-4 w-4" aria-hidden="true" />
        ) : (
          <PlusSmIcon className="h-4 w-4" aria-hidden="true" />
        )}
      </div>
    </button>
  );
}
