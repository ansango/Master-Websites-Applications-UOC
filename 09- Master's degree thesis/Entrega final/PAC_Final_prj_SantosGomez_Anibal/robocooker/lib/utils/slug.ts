import slugRaw from "slug";

const slug = (text: string) => slugRaw(text, "_");

export { slug };
