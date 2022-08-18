"use strict";
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        nickname: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        bookmark: [
            {
                type: Schema.Types.ObjectId,
                ref: "Question",
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
