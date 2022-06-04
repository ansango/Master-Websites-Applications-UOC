import MongoStore from "connect-mongo";
import nextSession, { type Options as SessionOptions } from "next-session";
import { promisifyStore } from "next-session/lib/compat";
import type { ConnectMongoOptions } from "connect-mongo/build/main/lib/MongoStore";
import { getMongoClient } from "@/api/middlewares/database";

const mongoOptions: ConnectMongoOptions = {
  clientPromise: getMongoClient(),
  stringify: false,
};
const mongoStore = MongoStore.create(mongoOptions);

const sessionOptions: SessionOptions = {
  store: promisifyStore(mongoStore),
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 2 * 7 * 24 * 60 * 60, // 2 weeks,
    path: "/",
    sameSite: "strict",
  },
  touchAfter: 1 * 7 * 24 * 60 * 60, // 1 week
};

const getSession = nextSession(sessionOptions);

const session = async (req: any, res: any, next: any) => {
  await getSession(req, res);
  next();
};

export default session;
