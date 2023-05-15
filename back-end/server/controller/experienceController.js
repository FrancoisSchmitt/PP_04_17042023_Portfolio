const experienceDB = require('../model/experienceModel')

exports.createExperience = (req, res,) => {

    const experience = new experienceDB({
        nameOfCourses: req.body.nameOfCourses,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        description: req.body.description,
        skillsTags: req.body.skillsTags,
    });
    experience
        .save()
        .then(() =>
            res.status(201).json({
                experience,
                message: "experience create",
            })
        )
        .catch((error) => res.status(400).json({ error }));

    };


exports.updateExperience = (req, res,) => {

}
exports.deleteExperience = (req, res,) => {

}