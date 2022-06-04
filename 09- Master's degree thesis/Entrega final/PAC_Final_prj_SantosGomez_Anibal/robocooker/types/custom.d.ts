import type mongo from "mongodb";

declare global {
  // to cache MongoDB connection for reuse during development
  // (otherwise hot reload creates many connections)
  var mongo: mongo = {
    conn: null,
    promise: null,
  };

  namespace Express {
    interface User {
      _id: string;
    }
  }
}
