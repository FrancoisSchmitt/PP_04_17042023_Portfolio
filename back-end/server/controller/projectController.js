const ProjectDB = require('../model/projectModel')
const fs = require("fs")



exports.createProject = (req, res,) => {

    const project = new ProjectDB({
        nameOfProject: req.body.nameOfProject,
        dateProject: req.body.endDate,
        description: req.body.description,
        skillsTags: req.body.skillsTags,
        githubLink: req.body.githubLink,
        projectLink: req.body.projectLink,
        imageProject: {
            data: fs.readFileSync("uploads/" + req.file.filename),
            contentType: "image/png",
        },

    });
    // if (req.file) {
    //     project.imageProject = req.file.path
    // }
    project
        .save()
        .then(() =>
            res.status(201).json({
                project,
                message: "Project create",
            })
        )
        .catch((error) => res.json({ error }));

};


exports.updateProject = (req, res,) => {

}
exports.deleteProject = (req, res,) => {

}