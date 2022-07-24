import mongoose from "mongoose";

const bugSchema = mongoose.Schema({
  project: String,
  type: String,
  assignee: String,
  reporter: String,
  state: String,
  priority: String,
  summary: String,
  description: String,
  date: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const bug = mongoose.model("Bug", bugSchema);

export default bug;
