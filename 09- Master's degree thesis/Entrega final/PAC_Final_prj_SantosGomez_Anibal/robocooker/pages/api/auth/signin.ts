import passport from "@/api/auth/passport";
import { auth, database } from "@/api/middlewares";
import { options } from "@/api/nc";
import nc from "next-connect";

const handler = nc(options);

handler.use(database, ...auth);

handler.post(passport.authenticate("local"), async (req, res) => {
  return res.json({ user: req.user });
});

export default handler;
