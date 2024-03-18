import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: [true, "Please Provide Unique Username"],
        unique: [true, "username already Existes"]
    },
    password: {
        type: String,
        require: [true, "Please Provide a Password"],
        unique: false
    },
    email: {
        type: String,
        require: [true, "Please Provide a Unique Email"],
        unique: true
    },
    firstName: { type: String },
    lastname: { type: String },
    mobile: { type: Number },
    address: { type: String },
    profile: { type: String }
});

export default mongoose.model.Users || mongoose.model('User', UserSchema)