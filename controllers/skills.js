const Skill = require("../models/skill");
const { render } = require("../server");

function allSkills(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: "Express Dev Skills"
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    });
}

function newSkill(req, res) {
    res.render('skills/new', {
        title: "Express Dev Skills"
    });
}

function create(req, res) {
    Skill.create(req.body);
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

module.exports = {
    index: allSkills,
    new: newSkill,
    show,
    create,
    delete: deleteSkill
}