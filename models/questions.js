"use strict";
const mongoose = require("mongoose");
const { Schema } = mongoose;
const {
    Types: { ObjectId },
} = Schema;

const questionSchema = new Schema(
    {
        writer: { type: ObjectId, required: true, ref: "User" },
        questionType: {
            type: String,
            enum: ["balance", "discuss"],
            default: "balance",
        },
        title: { type: String, required: true },
        content: { type: String, required: true },
        comments: [{ type: ObjectId, ref: "Comment" }],
        pros: [{ type: ObjectId, ref: "User" }],
        cons: [{ type: ObjectId, ref: "User" }],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Question", questionSchema);
