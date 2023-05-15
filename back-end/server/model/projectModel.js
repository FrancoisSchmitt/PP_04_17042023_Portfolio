const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    nameOfProject: {
        type: String,
        // required: true,
    },
    dateProject: {
        type: String,
        // required: true,
    },
    description: {
        type: String,
        // required: true,
    },
    skillsTags: {
        type: String,
        // required: true,
    },
    githubLink: {
        type: String,
        // required: true,
    },
    projectLink: {
        type: String,
        // required: true,
    },
    imageProject: {
        data: Buffer,
        contentType: String,
        // required: true,
    },

});

const ProjectDB = mongoose.model("project", schema);

module.exports = ProjectDB;
