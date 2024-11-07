import { Schema, Types, model } from "mongoose";

const taskSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: {
      type: String,
      enum: ["completed", "incomplete"],
      default: "incomplete",
    },
    user: { type: Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export default model("task", taskSchema);
