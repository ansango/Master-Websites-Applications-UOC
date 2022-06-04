import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { findUserForAuth, findUserWithEmailAndPassword } from "../db/user";

passport.serializeUser((user, done) => done(null, user._id));

passport.deserializeUser((req: any, id: string, done: any) =>
  findUserForAuth(req.db, id).then(
    (user) => done(null, user),
    (err) => done(err)
  )
);

passport.use(
  new LocalStrategy(
    { usernameField: "email", passReqToCallback: true },
    async (req: any, email: string, password: string, done: any) => {
      const user = await findUserWithEmailAndPassword(req.db, email, password);
      if (user) {
        done(null, user);
      } else {
        done(null, false, { message: "Incorrect email or password." });
      }
    }
  )
);

export default passport;
