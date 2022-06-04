import { createToken, findAndDeleteTokenByIdAndType } from "@/api/db/token";
import { findUserByEmail, updateUserPasswordRecovery } from "@/api/db/user";
import { CONFIG as MAIL_CONFIG, sendMail } from "@/api/mail";
import rawTemplate from "@/api/mail/rawTemplate";
import { database } from "@/api/middlewares";
import { options } from "@/api/nc";
import {
  recoveryEmailValidation,
  recoveryPasswordValidation,
} from "@/api/schemas/validations";

import nc from "next-connect";
import normalizeEmail from "validator/lib/normalizeEmail";

const handler = nc(options);
handler.use(database);

handler.post(recoveryEmailValidation(), async (req, res) => {
  const email = normalizeEmail(req.body.email) || "";
  const user = await findUserByEmail(req.db, email);
  if (!user) return res.status(404).json({ error: "User not found" });
  const token = await createToken(req.db, {
    creatorId: user._id,
    type: "passwordReset",
    expireAt: new Date(Date.now() + 1000 * 60 * 20),
  });
  await sendMail({
    to: email,
    from: MAIL_CONFIG.from,
    subject: "[Robocooker] Cambia tu contraseña",
    html: rawTemplate({
      tokenId: token._id.toString(),
      username: user.username,
    }),
  });
  return res.status(204).end();
});

handler.put(recoveryPasswordValidation(), async (req, res) => {
  const deletedToken = await findAndDeleteTokenByIdAndType(
    req.db,
    req.body.tokenId,
    "passwordReset"
  );
  if (!deletedToken) {
    res.status(403).end();
    return;
  }
  try {
    await updateUserPasswordRecovery(
      req.db,
      deletedToken.creatorId,
      req.body.newPassword
    );
    return res.status(204).end();
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
});

export default handler;
