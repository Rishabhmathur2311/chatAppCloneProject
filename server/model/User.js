import mongoose from "mongoose";

const UserSchema=mongoose.Schema({
    iss:{
        type: String
    },

    nbf:{
        type: String
    },

    aud:{
        type: String
    },

    sub: {
        type: String,
        required: true
    },

    email: {
        type: String
    },

    email_verified: {
        type: Boolean
    },

    azp:{
        type: String
    },

    name:{
        type: String,
        required: true
    },

    picture:{
        type: String,
        required: true
    },

    family_name: {
        type: String
    },

    iat: {
        type: Number
    },

    exp: {
        type: Number
    },

    jti: {
        type: String
    }

});

const user=mongoose.model('user', UserSchema);
export default user;