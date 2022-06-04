import { options } from "@/api/nc";
import nc from "next-connect";
import { getClientNotion } from "@/api/issues";
import { Issue } from "@/models/issue";
import { sendIssue } from "@/api/issues/template";

const handler = nc(options);

handler.post(async (req, res) => {
  const config = getClientNotion();
  if (!config.database_id || !config.notion)
    return res.status(500).json({ error: "Notion not configured" });
  const issue = req.body.issue as Issue;
  if (!issue) return res.status(500).json({ error: "Issue not provided" });

  try {
    const response = await sendIssue({ config, issue });
    return res.status(204).end();
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
});

export default handler;
