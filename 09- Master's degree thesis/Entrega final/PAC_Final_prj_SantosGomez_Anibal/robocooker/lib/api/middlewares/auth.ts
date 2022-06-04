import passport from "@/api/auth/passport";
import session from "@/api/middlewares/session";

const auth = [session, passport.initialize(), passport.session()];

export default auth;
