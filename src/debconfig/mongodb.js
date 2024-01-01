import mongoose from "mongoose";

const connectToMongoDb = async () => {
    try {
        mongoose.connect("mongodb+srv://shafin:shafin@cluster0.yhuz2xd.mongodb.net/todoWithNext")
    } catch (error) {
        console.log(error)
    }
}

export default connectToMongoDb;