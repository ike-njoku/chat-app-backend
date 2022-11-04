import mongoose, { Schema } from "mongoose";
const schema = mongoose.Schema;

export const UserModel: mongoose.Schema = new Schema({

  userName:{
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
}, {timestamps: true});


export const User = mongoose.model('User', UserModel);
