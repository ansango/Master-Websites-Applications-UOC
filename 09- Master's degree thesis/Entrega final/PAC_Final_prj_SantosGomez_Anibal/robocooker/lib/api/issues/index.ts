import { Client } from "@notionhq/client";

export const getClientNotion = () => {
  const notion = new Client({ auth: process.env.NOTION_KEY });
  const databaseId = process.env.NOTION_DATABASE_ID ?? "";
  return {
    notion,
    database_id: databaseId,
  };
};
