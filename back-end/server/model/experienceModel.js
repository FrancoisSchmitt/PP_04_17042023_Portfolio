const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    nameOfCourses: {
        type: String,
        required: true,
    },
    startDate: {
        type: String,
        required: true,
    },
    endDate: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    skillsTags: {
        type: String,
        required: true,
    },
});

const experienceDB = mongoose.model("experience", schema);

module.exports = experienceDB;
