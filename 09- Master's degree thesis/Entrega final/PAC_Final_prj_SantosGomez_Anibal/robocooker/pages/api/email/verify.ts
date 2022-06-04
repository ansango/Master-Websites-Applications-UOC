import { createToken } from "@/api/db/token";
import { sendMail, CONFIG as MAIL_CONFIG } from "@/api/mail";
import rawTemplateVerify from "@/api/mail/rawTemplateVerify";
import { auth, database } from "@/api/middlewares";
import { options } from "@/api/nc";
import nc from "next-connect";

const handler = nc(options);
handler.use(database, ...auth);

handler.post(async (req, res) => {
  if (!req.user) return res.status(401).json({ error: "User not found" });
  try {
    const token = await createToken(req.db, {
      creatorId: req.user._id,
      type: "emailVerification",
      expireAt: new Date(Date.now() + 1000 * 60 * 20),
    });
    await sendMail({
      to: req.user.email,
      from: MAIL_CONFIG.from,
      subject: "[Robocooker] Verifica tu cuenta",
      html: rawTemplateVerify({
        tokenId: token._id.toString(),
        username: req.user.username,
      }),
    });
    return res.status(204).end();
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
});

export default handler;
