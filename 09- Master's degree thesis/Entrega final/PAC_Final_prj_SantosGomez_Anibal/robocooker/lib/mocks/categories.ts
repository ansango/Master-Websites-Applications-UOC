import { Category } from "@/models/recipe/category";

const categories: Category[] = [
  {
    _id: "1",
    name: "carne",
    description:
      "¿Estás buscando una receta de carne? Aquí están las recetas más populares de carne.",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050635/Categories/image_1_tpsbd9.avif",
  },
  {
    _id: "2",
    name: "pescado",
    description:
      "¿Quieres algo del mar? En esta categoría encontrarás recetas para todos los marineros.",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050635/Categories/image_1-1_totovv.avif",
  },
  {
    _id: "3",
    name: "pasta",
    description:
      "¿Hoy te sientes italiano? Aquí encontrarás recetas para que te sientas como en Italia.",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050636/Categories/image_2_ssoal8.avif",
  },
  {
    _id: "4",
    name: "arroz",
    description:
      "¿Quieres una receta de arroz? Aquí encontrarás recetas para todos los amantes de la comida.",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050635/Categories/image_1-2_rkuidy.avif",
  },
  {
    _id: "5",
    name: "postres",
    description:
      "El final siempre es lo mejor para una buena comida. Aquí encontrarás recetas para acabar bien tu menú.",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050635/Categories/image_1-3_jkwidp.avif",
  },
  {
    _id: "6",
    name: "dulces",
    description:
      "Postre, merienda, cualquier momento es bueno para un buen dulce.",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050636/Categories/image_2-1_hqyp3x.avif",
  },
  {
    _id: "7",
    name: "básicas",
    description:
      "¿No quieres complicarte mucho? Aquí encontrarás recetas básicas, para que no pierdas tiempo.",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050635/Categories/image_1-4_q0qsxl.avif",
  },
  {
    _id: "8",
    name: "entrantes",
    description: "Un buen aperitivo siempre abre una buena comida.",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050635/Categories/image_1-5_d4i2do.avif",
  },
  {
    _id: "9",
    name: "acompañamientos",
    description: "Guarniciones para todo tipo de comida.",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050636/Categories/image_2-2_trvzdl.avif",
  },
  {
    _id: "10",
    name: "bebidas",
    description: "No todo es masticar, aquí encontrarás recetas para beber.",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050635/Categories/image_1-6_extf5b.avif",
  },
  {
    _id: "11",
    name: "cremas",
    description: "Fáciles y en poco tiempo, disfruta de algo caliente.",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050636/Categories/image_1-7_trmazb.avif",
  },
  {
    _id: "12",
    name: "sopas",
    description:
      "¿Quieres una sopa? Dicho y hecho, aquí encontrarás las mejores sopas.",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050636/Categories/image_2-3_lk2nqo.avif",
  },
  {
    _id: "13",
    name: "legumbres",
    description:
      "Lentejas, garbanzos, legumbres, todo lo que necesites para tu menú.",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050635/Categories/image_1-8_uhaqfk.avif",
  },
  {
    _id: "14",
    name: "verduras",
    description:
      "De la huerta a tu robot, aquí encontrarás recetas con muchas verduras.",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050635/Categories/image_1-9_mqedue.avif",
  },
  {
    _id: "15",
    name: "pan",
    description: "Llenemos la cocina de harina, es el momento de preparar pan.",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050636/Categories/image_2-4_rfh7ms.avif",
  },
  {
    _id: "16",
    name: "masas",
    description:
      "¿Pizza, pan, bollería? Aquí encontrarás recetas para todo tipo de masas.",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050635/Categories/image_1-10_ootlpu.avif",
  },
  {
    _id: "17",
    name: "bollería",
    description:
      "Lo justo que necesitabas para un desayuno o una buena merienda.",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050636/Categories/image_1-11_eyzi2a.avif",
  },
  {
    _id: "18",
    name: "salsas",
    description: "Salsas para todo tipo de comida.",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050637/Categories/image_2-5_vgyjgr.avif",
  },
  {
    _id: "19",
    name: "vegetarianas",
    description:
      "Las alternativas vegetarianas para tu robot favorito de cocina.",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050636/Categories/image_1-12_s6anpa.avif",
  },
  {
    _id: "20",
    name: "veganas",
    description: "Las alternativas veganas para tu robot favorito de cocina.",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050636/Categories/image_1-13_dg8cf8.avif",
  },
  {
    _id: "21",
    name: "sin gluten",
    description: "Recetas sin gluten para tu robot favorito de cocina.",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050637/Categories/image_2-6_mtycja.avif",
  },
];

const categoriesSelectMapper = categories.map(({ name }) => {
  return {
    label: name,
    value: name,
  };
});

const getCategory = (
  name: string | string[] | undefined
): Category | undefined => {
  if (!name || (Array.isArray(name) && name.length === 0)) {
    return undefined;
  }
  return categories
    .map((category) => {
      return {
        ...category,
        name: category.name.split(" ").join("-"),
      };
    })
    .find((category) => category.name === name);
};

export { categories, categoriesSelectMapper, getCategory };
