import mongoose from "mongoose";

const ProductDevelopmentSchema = new mongoose.Schema(
  {
    isAcceptProduct: {
      type: String,
      enume: ["ACCEPT", "REJECT"],
      default: "REJECT",
    },
    howMuchBuilt: {
      type: Number,
      require: true,
    },
    isBuilted: {
      type: String,
      enume: ["BUILTED", "NOTBUILT"],
      default: "NOTBUILT",
    },
    creatorsProduct: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
      require: true,
    },
    creatorsAccount: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      require: true,
    },
  },
  {
    toJSON: true,
  },
);

const ProductDevelopmentModel = mongoose.models.creator || mongoose.model("creator", ProductDevelopmentSchema);

export default ProductDevelopmentModel;
