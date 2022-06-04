import { Blender } from "@/models/blender";

const blenders: Blender[] = [
  {
    _id: "1",
    name: "mambo",
    company: "cecotec",
    description: "El robot de cocina de Cocotec",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650064979/Blenders/Frame_4_z8zvjh.avif",
  },
  {
    _id: "2",
    name: "thermomix",
    company: "vorkwerk",
    description: "El robot de cocina de Vorkwerk",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650064979/Blenders/Frame_5_uugqbq.avif",
  },
  {
    _id: "3",
    name: "kcook",
    company: "kenwood",
    description: "El robot de cocina de Kenwood",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650064979/Blenders/Frame_6_g2n6cw.avif",
  },
  {
    _id: "4",
    name: "maxichef",
    company: "moulinex",
    description: "El robot de cocina de Moulinex",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650064979/Blenders/Frame_7_ostaxn.avif",
  },
  {
    _id: "5",
    name: "mycook",
    company: "taurus",
    description: "El robot de cocina de Taurus",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650064979/Blenders/Frame_8_peuhov.avif",
  },
  {
    _id: "6",
    name: "monsieur cuisinie",
    company: "lidl",
    description: "El robot de cocina de Lidl",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650064979/Blenders/Frame_9_cleeau.avif",
  },
];

const blendersSelectMapper = blenders.map(({ name }) => {
  return {
    label: name,
    value: name,
  };
});

const getBlender = (
  name: string | string[] | undefined
): Blender | undefined => {
  if (!name || (Array.isArray(name) && name.length === 0)) {
    return undefined;
  }
  return blenders
    .map((blender) => {
      return {
        ...blender,
        name: blender.name.split(" ").join("-"),
      };
    })
    .find((blender) => blender.name === name);
};

export { blenders, blendersSelectMapper, getBlender };
