import mongoose, {Schema} from "mongoose";

const listSchema = new Schema(
    {
        name: String,
        description: String
    },
    {
        timestamps: true
    }
)

const item = mongoose.models.item || mongoose.model("item", listSchema);

export default item;

