import mongoose from "mongoose";

const WOOD = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
      maxLength: 50,
    },
    price: {
      type: Number,
      trim: true,
      require: true,
    },
    entiti: {
      type: Number,
      trim: true,
      require: true,
    },
    part: {
      type: String,
      trim: true,
      require: true,
    },
  },
  {
    timestamps: true,
  },
);

const CNC_T = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
      maxLength: 50,
    },
    price: {
      type: Number,
      trim: true,
      require: true,
    },
    entiti: {
      type: Number,
      trim: true,
      require: true,
    },
    part: {
      type: String,
      trim: true,
      require: true,
    },
  },
  {
    timestamps: true,
  },
);

const CNC_R = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
      maxLength: 50,
    },
    price: {
      type: Number,
      trim: true,
      require: true,
    },
    entiti: {
      type: Number,
      trim: true,
      require: true,
    },
    part: {
      type: String,
      trim: true,
      require: true,
    },
  },
  {
    timestamps: true,
  },
);

const WOODCARVER = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
      maxLength: 50,
    },
    price: {
      type: Number,
      trim: true,
      require: true,
    },
    entiti: {
      type: Number,
      trim: true,
      require: true,
    },
    part: {
      type: String,
      trim: true,
      require: true,
    },
  },
  {
    timestamps: true,
  },
);

const ADHESIVE_WORK = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
      maxLength: 50,
    },
    price: {
      type: Number,
      trim: true,
      require: true,
    },
    entiti: {
      type: Number,
      trim: true,
      require: true,
    },
    part: {
      type: String,
      trim: true,
      require: true,
    },
  },
  {
    timestamps: true,
  },
);

const REVERSIBLE = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
      maxLength: 50,
    },
    price: {
      type: Number,
      trim: true,
      require: true,
    },
    entiti: {
      type: Number,
      trim: true,
      require: true,
    },
  },
  {
    timestamps: true,
  },
);

const STICKY_SHEET = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
      maxLength: 50,
    },
    price: {
      type: Number,
      trim: true,
      require: true,
    },
    entiti: {
      type: Number,
      trim: true,
      require: true,
    },
  },
  {
    timestamps: true,
  },
);

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
      maxLength: 50,
    },
    slug: {
      type: String,
      trim: true,
      require: true,
      uniqe: true,
    },
    mainImage: {
      type: String,
      trim: true,
      require: true,
    },
    images: {
      type: [String],
      default: [],
    },
    description: {
      type: String,
      trim: true,
    },
    wood: {
      type: [WOOD],
      require: true,
    },
    cncT: {
      type: [CNC_T],
      require: true,
    },
    cncR: {
      type: [CNC_R],
      require: true,
    },
    woodCarver: {
      type: [WOODCARVER],
      require: true,
    },
    adhesiveWork: {
      type: [ADHESIVE_WORK],
      require: true,
    },
    reversible: {
      type: [REVERSIBLE],
      require: true,
    },
    stickySheet: {
      type: [STICKY_SHEET],
      require: true,
    },
  },
  {
    timestamps: true,
  },
);

ProductSchema.index({ slug: 1 }, { unique: true });

ProductSchema.index({ name: 1 });

ProductSchema.index({ createAt: -1 });

ProductSchema.index(
  {
    name: "text",
    description: "text",
  },
  {
    weights: {
      name: 10,
      description: 3,
    },
    default_language: "none",
  },
);

const ProductModel =
  mongoose.models.product || mongoose.model("product", ProductSchema);

export default ProductModel;
