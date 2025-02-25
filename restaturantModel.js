import mongoose from "mongoose";
 const restaturantSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
    },
    { timestamps: true } 
 );

const restaturantModel = mongoose.model("restaturant", restaturantSchema);
export default restaturantModel;