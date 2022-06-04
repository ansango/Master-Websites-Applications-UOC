import nc from "next-connect";
import { signUpValidation } from "@/api/schemas/validations";
import { slug } from "@/utils/slug";
import { isEmail, normalizeEmail } from "@/utils/validations";
import { auth, database } from "@/api/middlewares";
import {
  findUserByEmail,
  findUserByUsername,
  insertUser,
} from "@/api/db/user";

const handler = nc();
handler.use(database);

handler.post(signUpValidation(), ...auth, async (req, res) => {
  let { username, email, password } = req.body;
  username = slug(req.body.username);
  email = normalizeEmail(req.body.email);
  if (!isEmail(email)) {
    return res
      .status(400)
      .json({ error: { message: "The email you entered is invalid." } });
  }
  if (await findUserByEmail(req.db, email)) {
    return res
      .status(403)
      .json({ error: { message: "The email has already been used." } });
  }
  if (await findUserByUsername(req.db, username)) {
    return res
      .status(403)
      .json({ error: { message: "The username has already been taken." } });
  }
  const user = await insertUser(req.db, {
    email,
    originalPassword: password,
    username,
  });
  req.logIn(user, (err: any) => {
    if (err) {
      throw err;
    }
    res.status(201).json({
      user,
    });
  });
});

export default handler;
