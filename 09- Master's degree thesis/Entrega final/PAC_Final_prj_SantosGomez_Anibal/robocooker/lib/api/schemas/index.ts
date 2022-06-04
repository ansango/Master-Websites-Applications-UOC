const AddressSchema = {
  address: { type: "string" },
  city: { type: "string" },
  country: { type: "string" },
  zip: { type: "string" },
};

const AccountSchema = {
  about: { type: "string" },
  avatar: { type: "string" },
  firstName: { type: "string" },
  lastName: { type: "string" },
  phone: { type: "string" },
  birthday: { type: "string" },
};

const UserSchema = {
  username: { type: "string", minLength: 4, maxLength: 20 },
  password: { type: "string", minLength: 8 },
  email: { type: "string", minLength: 1 },
};

const PasswordSchema = {
  oldPassword: { type: "string", minLength: 8 },
  newPassword: { type: "string", minLength: 8 },
};

const RecoveryPasswordSchema = {
  email: { type: "string", minLength: 8 },
  newPassword: { type: "string", minLength: 8 },
};

const PostSchema = {
  content: { type: "string", minLength: 1, maxLength: 280 },
};
const CommentSchema = {
  content: { type: "string", minLength: 1, maxLength: 280 },
};

export {
  UserSchema,
  AccountSchema,
  PasswordSchema,
  RecoveryPasswordSchema,
  PostSchema,
  CommentSchema,
};
