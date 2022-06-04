import nc from "next-connect";
import { database } from "@/api/middlewares";
import { options } from "@/api/nc";
import { findQueryRecipesPopulated } from "@/api/db/recipe";

const handler = nc(options);
handler.use(database);

handler.post(async (req, res) => {
  const q = req.body.query
    .replace(/\r\n/g, "")
    .replace(/^\s+|\s+$/, "")
    .replace(/[^a-z\s]+/gi, "")
    .replace(/\s+$/, "");

  const parts = q.split(/\s/);
  const terms = parts.map((part: string) => ({
    $regex: part,
    $options: "i",
  }));

  const query = terms.reduce((acc: any, term: string) => {
    return {
      $or: [
        { name: term },
        { description: term },
        { ingredients: { $elemMatch: { name: term } } },
        { blenders: term },
        { categories: term },
      ],
    };
  }, {});

  try {
    const results = await findQueryRecipesPopulated(req.db, query);
    return res.json({ results });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

export default handler;
