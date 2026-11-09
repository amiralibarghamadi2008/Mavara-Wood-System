import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema(
  {
    titel: {
      type: String,
      require: true,
      trim: true,
      maxLength: 50,
    },
    titcketMessage: {
      type: String,
      require: true,
      trim: true,
      maxLength: 400,
    },
    status: {
      type : String,
      enume : ["pending" , "answered"],
      default : "pending",
    },
    user : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "user",
      require : true,
    }
  },
  {
    timestamps: true,
  },
);

TicketSchema.index({subject : 1})

TicketSchema.index({user : 1})

TicketSchema.index({ createdAt: -1 });

TicketSchema.index(
    {
        subject : "text",
        user : "text"
    },
    {
        weights : {
            subject : 10,
            user : 7
        },
        default_language: "none",
    }
)

const TicketModel = mongoose.models.ticket || mongoose.model("ticket" , TicketSchema)

export default TicketModel