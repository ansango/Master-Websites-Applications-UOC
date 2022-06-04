type Colors = "blue" | "sky" | "violet" | "purple";

const generateGradient = (color: Colors) => {
  const colors = {
    blue: "bg-gradient-to-r from-cyan-500 to-blue-500",
    sky: "bg-gradient-to-r from-sky-500 to-indigo-500",
    violet: "bg-gradient-to-r from-violet-500 to-fuchsia-500",
    purple: "bg-gradient-to-r from-purple-500 to-pink-500",
  };

  return colors[color];
};

export { generateGradient, type Colors };
