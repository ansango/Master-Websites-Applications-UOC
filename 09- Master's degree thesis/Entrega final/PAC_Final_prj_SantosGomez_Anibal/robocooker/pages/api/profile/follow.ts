import {
  findIsFollowedById,
  updateFollowersById,
  updateFollowingsById,
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
  const toFollow = req.body.follower as Follower;

  const isFollowing = await findIsFollowedById(
    req.db,
    follower.accountId,
    toFollow.accountId
  );

  if (isFollowing) return res.status(400).json({ error: "Already following" });
  const isSameAccount = follower.accountId === toFollow.accountId;

  if (isSameAccount)
    return res.status(400).json({ error: "Cannot follow self" });

  try {
    await updateFollowingsById(req.db, follower.accountId, toFollow);
    await updateFollowersById(req.db, toFollow.accountId, follower);
    return res.status(200).json({ follower });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default handler;
