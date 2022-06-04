import { IssueStatus } from "@/models/issue";
import { Client } from "@notionhq/client";

export type NotionObjectTemplate = {
  config: {
    notion: Client;
    database_id: string;
  };
  issue: {
    title: string;
    description: string;
    email: string;
  };
};

export const sendIssue = async ({
  config,
  issue: { title, email, description },
}: NotionObjectTemplate) => {
  const { notion, database_id } = config;
  const status: IssueStatus = "Not Started";
  return await notion.pages.create({
    parent: {
      database_id,
    },
    icon: {
      emoji: "🔥",
    },
    properties: {
      Title: {
        title: [
          {
            text: {
              content: title,
            },
          },
        ],
      },
      Email: {
        email: email,
      },
      Status: {
        select: {
          name: status,
        },
      },
    },
    children: [
      {
        object: "block",
        type: "heading_2",
        heading_2: {
          rich_text: [
            {
              type: "text",
              text: {
                content: "Descripción",
              },
            },
          ],
        },
      },
      {
        object: "block",
        type: "paragraph",
        paragraph: {
          rich_text: [
            {
              type: "text",
              text: {
                content: description,
              },
            },
          ],
        },
      },
    ],
  });
};
