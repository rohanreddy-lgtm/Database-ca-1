import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB is connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
    }
};

export default connectDB;





