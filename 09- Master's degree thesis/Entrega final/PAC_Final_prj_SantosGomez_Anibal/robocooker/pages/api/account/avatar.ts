import { auth, database } from "@/api/middlewares";
import { options } from "@/api/nc";
import nc from "next-connect";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { updateAvatarAccountById } from "@/api/db/account";

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

handler.patch(upload.single("avatar"), async (req, res) => {
  if (!req.user) return res.status(401).json({ error: "Unauthorized" });
  if (!req.file)
    return res.status(400).json({ error: "You must attach an image" });

  const { secure_url: avatar } = await cloudinary.uploader.upload(
    req.file.path,
    {
      width: 200,
      height: 200,
      crop: "fill",
      transformation: {
        format: "webp",
      },
      folder: "Avatars",
    }
  );

  const account = await updateAvatarAccountById(
    req.db,
    req.user.accountId,
    avatar
  );
  if (!account) return res.status(404).json({ error: "Account not found" });
  return res.json({ avatar });
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
