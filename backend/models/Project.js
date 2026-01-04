import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title:{
        type: String,
    },
    description :{
        type: String,
    },
    tech: [String],
    github: String,
    live: String

})

export default mongoose.model("Project",projectSchema);