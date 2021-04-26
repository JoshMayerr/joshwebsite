const TagSwitch = (name) => {
  if (name.substring(0, 4) === "year") {
    return [
      "border border-black dark:border-white",
      "text-black dark:text-white",
      name.substring(4, 8),
    ];
  }
  switch (name) {
    case "react":
      return ["bg-blue-100", "text-blue-800", "React"];
    case "laravel":
      return ["bg-red-100", "text-red-800", "Laravel"];
    case "nodeJs":
      return ["bg-green-100", "text-green-800", "NodeJS"];
    case "photoshop":
      return ["bg-blue-200", "text-blue-800", "Photoshop"];
    case "webDev":
      return ["border border-indigo-500", "text-indigo-500", "WebDev"];
    case "design":
      return ["border border-indigo-500", "text-indigo-500", "Design"];
    default:
      return ["border border-indigo-500", "text-indigo-500", name];
  }
};

export default function Tag({ name }) {
  const nam = TagSwitch(name);
  return (
    <div
      className={`px-2 py-1 mt-2 ${nam[0]} text-xs font-medium ${nam[1]} rounded-full`}
    >
      {nam[2]}
    </div>
  );
}
