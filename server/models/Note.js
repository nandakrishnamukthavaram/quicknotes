const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        tag: {
            type: String,
            default: 'general',
        },
    },
    { timestamps: true }
);
const Note = mongoose.model('Note',noteSchema);
module.exports = Note;