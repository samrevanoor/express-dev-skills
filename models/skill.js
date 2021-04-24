const skills = [
    { id: 1, skill: 'CSS' },
    { id: 2, skill: 'HTML' },
    { id: 3, skill: 'JS' },
    { id: 4, skill: 'jQuery' },
    { id: 5, skill: 'Node' },
    { id: 6, skill: 'Express' }
];

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}

function create(skill) {
    skills.push(skill);
    skill.id = skills.length;
}

function updateSkill(value, id) {
    const idx = skills.findIndex(s => s.id === parseInt(id));
    skills[idx].skill = value.skill;
}

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update: updateSkill
};