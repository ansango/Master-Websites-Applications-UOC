import { findRecipeById, updateImageRecipeById } from "@/api/db/recipe";
import { auth, database } from "@/api/middlewares";
import { options } from "@/api/nc";
import multer from "multer";
import nc from "next-connect";
import { v2 as cloudinary } from "cloudinary";

const upload = multer({ dest: "/tmp" });
const handler = nc(options);
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } =
  process.env;

if (CLOUDINARY_CLOUD_NAME && CLOUDINARY_API_KEY && CLOUDINARY_API_SECRET) {
  cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
  });
}
handler.use(database, ...auth);

handler.patch(upload.single("image"), async (req, res) => {
  if (!req.user) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  if (!req.file) {
    return res.status(400).json({ error: "You must attach an image" });
  }
  const { secure_url: img } = await cloudinary.uploader.upload(req.file.path, {
    width: 960,
    height: 480,
    crop: "fill",
    transformation: {
      format: "webp",
    },
    folder: "Recipes",
  });

  if (!img) {
    res.status(400).json({ error: "Error uploading image" });
  }
  const unUpdatedRecipe = await findRecipeById(req.db, req.query.id);
  const imgUpdated = await updateImageRecipeById(req.db, req.query.id, img);
  if (!imgUpdated) {
    res.status(404).json({ error: "Error updating image" });
  }
  res.status(200).json({ recipe: { ...unUpdatedRecipe, img } });
});
export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
