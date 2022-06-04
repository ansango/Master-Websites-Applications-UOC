import {
  findIsFollowedById,
  updateUnFollowersById,
  updateUnFollowingsById,
} from "@/api/db/account";
import { database, auth } from "@/api/middlewares";
import { options } from "@/api/nc";
import { Follower, User } from "@/models/user/user";
import nc from "next-connect";

const handler = nc(options);
handler.use(database, ...auth);

handler.post(async (req, res) => {
  if (!req.user) return res.status(401).json({ error: "Unauthorized" });
  if (!req.body.follower) return res.status(400).json({ error: "Bad request" });
  const { accountId, username } = req.user as User;
  const follower = { accountId: accountId.toString(), username } as Follower;
  const toUnFollow = req.body.follower as Follower;

  const isFollowing = await findIsFollowedById(
    req.db,
    follower.accountId,
    toUnFollow.accountId
  );

  if (!isFollowing) return res.status(400).json({ error: "Not following" });
  const isSameAccount = follower.accountId === toUnFollow.accountId;

  if (isSameAccount)
    return res.status(400).json({ error: "Cannot UnFollow self" });

  try {
    await updateUnFollowingsById(req.db, follower.accountId, toUnFollow);
    await updateUnFollowersById(req.db, toUnFollow.accountId, follower);
    return res.status(200).json({ follower });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default handler;
