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

function editSkill(req, res){
    res.render('skills/edit', {
        skill: Skill.getOne(req.params.id)
    })
}

function updateSkill(req, res){
    const editedValue = req.body;
    Skill.update(req.body, req.params.id);
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
    })
}

module.exports = {
    index: allSkills,
    new: newSkill,
    show,
    create,
    delete: deleteSkill,
    edit: editSkill,
    update: updateSkill
}