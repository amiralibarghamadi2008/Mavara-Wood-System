import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      require: true,
      maxLength: 50,
    },
    phoneNumber: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      match: /09[0-9]{9}$/,
    },
    phoneNumber: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      match: /09[0-9]{9}$/,
    },
    role: {
      type: String,
      enum : ["ADMIN" , "WOOD" , "CNC" , "WOODCARVER" , "ADHESIVE_WORK" , "REVERSIBLE" , "STICKY_SHEET" , "USER"],
      default : "USER",
    },
  },
  {
    timestamps: true,
  },
);

const UserModel = mongoose.models.user || mongoose.model("user" , UserSchema)

export default UserModel
