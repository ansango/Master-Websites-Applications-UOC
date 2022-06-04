import {
  deleteUserById,
  findUserByEmail,
  findUserByUsername,
  updateUserAccountDataById,
} from "@/api/db/user";
import { auth, database } from "@/api/middlewares";

import { options } from "@/api/nc";
import { updateUserValidation } from "@/api/schemas/validations";

import nc from "next-connect";

const handler = nc(options);
handler.use(database, ...auth);

handler.get(async (req, res) => {
  if (!req.user) return res.json({ user: null });
  return res.json({ user: req.user });
});

handler.patch(updateUserValidation(), async (req, res) => {
  if (!req.user) return res.status(401).json({ error: "Unauthorized" });

  if (req.body.username && req.body.username !== req.user.username) {
    const existingUser = await findUserByUsername(req.db, req.body.username);
    if (existingUser)
      return res.status(400).json({ error: "Username already exists" });
  }

  if (req.body.email && req.body.email !== req.user.email) {
    const existingUser = await findUserByEmail(req.db, req.body.email);
    if (existingUser)
      return res.status(400).json({ error: "Email already exists" });
  }
  await updateUserAccountDataById(req.db, req.user._id, req.body);

  return res.json({
    user: req.body,
  });
});

handler.delete(async (req, res) => {
  if (!req.user) return res.status(401).json({ error: "Unauthorized" });
  if (!req.body.password)
    return res.status(400).json({ error: "Password is required" });
  try {
    const userIsDeleted = await deleteUserById(
      req.db,
      req.user._id,
      req.body.password
    );
    if (!userIsDeleted) {
      return res.status(400).json({ error: "Error deleting user" });
    }
    await req.session.destroy();
    res.status(204).end();
  } catch (error) {
    throw error;
  }
});

export default handler;
