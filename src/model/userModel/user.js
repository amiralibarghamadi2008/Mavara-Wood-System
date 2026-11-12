import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      trim: true,
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
      enum: [
        "ADMIN",
        "WOOD",
        "CNC_T",
        "CNC_R",
        "WOODCARVER",
        "ADHESIVE_WORK",
        "REVERSIBLE",
        "STICKY_SHEET",
        "USER",
      ],
      default: "USER",
    },
    account: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
      require: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

UserSchema.virtual("tickets", {
  ref: "ticket",
  localField: "_id",
  foreignField: "user",
});

UserSchema.virtual("userCreators", {
  ref: "creator",
  localField: "_id",
  foreignField: "user",
});

UserSchema.index({ phoneNumber: 1, fullName: 1 }, { unique: true });

UserSchema.index({ createAt: -1 });

UserSchema.index(
  {
    fullName: "text",
    phoneNumber: "text",
  },
  {
    weights: {
      fullName: 10,
      phoneNumber: 7,
    },
    default_language: "none",
  },
);

const UserModel = mongoose.models.user || mongoose.model("user", UserSchema);

export default UserModel;
