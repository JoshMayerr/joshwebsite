function TagSwitch(name) {
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
        bgSelected: "bg-blue-500 border border-transparent",
        text: "text-blue-500",
        textSelected: "text-white",
        name: "React",
      };
    case "laravel":
      return {
        bg: "border-red-500 border",
        bgSelected: "bg-red-500 border border-transparent",
        text: "text-red-500",
        textSelected: "text-white",
        name: "Laravel",
      };
    case "nodeJs":
      return {
        bg: "border-green-500 border",
        bgSelected: "bg-green-500 border border-transparent",
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

export default TagSwitch;
