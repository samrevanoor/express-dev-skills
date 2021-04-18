const skills = [
    { id: 1, skill: 'CSS', done: true },
    { id: 2, skill: 'HTML', done: true },
    { id: 3, skill: 'JS', done: true },
    { id: 4, skill: 'jQuery', done: true },
    { id: 5, skill: 'Node', done: false },
    { id: 6, skill: 'Express', done: false }
];

function getAll() {
    return skills;
}

function getOne(id) {
    // Use the Array.prototype.find iterator method
    return skills.find(skill => skill.id === parseInt(id));
}

let lastSkill = skills.length - 1;
let lastSkillId = skills[lastSkill].id;

function create(skill) {
    skill.id = lastSkillId + 1;
    skill.done = false;
    skills.push(skill);
  }

module.exports = {
    getAll,
    getOne,
    create
};