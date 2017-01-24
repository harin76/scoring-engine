'use strict';
const fs = require('fs');
const Chance = require('chance')
const chance = new Chance();

if (process.argv.length !== 5) {
  console.log("USAGE: node genAssessments <number of sections> <number of questions> <file name>");
  process.exit(0);
}

const sections = parseInt(process.argv[2]);
const questions = parseInt(process.argv[3]);
const fileName = process.argv[4];

const generateQuestion = function generateQuestion(position) {
  return {
    name: chance.word(),
    text: chance.sentence(),
    id: chance.guid(),
    postion: 1,
    isMandatory: true,
    availableScore: 2,
    penalty: 0,
    ruleType: 'self',
    scoringRule: '',
    type: chance.pickone(['text', 'number', 'percent', 'yesNo', 'dropdown', 'date', 'currency', 'radio', 'multiselect'])
  };
}

const generateSection = function generateSection(option) {
  let section = {
    name: chance.word(),
    description: chance.paragraph(),
    scoringRule: '',
    ruleType: 'notCalculated',
    position: 1,
    questions: chance.n(generateQuestion, option.questions)
  };

  for (let i = 0; i < option.question; i++) {
    section.questions.push(generateQuestion(i))
  }
  return section;
}

const generateSections = function generateSections(sectionCount, questionCount) {
  let sections = [];
  for (let i = 0; i < sectionCount; i++) {
    sections.push(generateSection(i, questions));
  }
  return sections;
}

const assessment = {
  name: chance.word(),
  description: chance.paragraph(),
  author: chance.name(),
  availableScore: 100,
  duration: 60,
  sections: chance.n(generateSection, sections, {questions: questions})
}

fs.writeFile(fileName, JSON.stringify(assessment, null, 2), function (err) {
  if (err) {
    return console.log(err);
  }
  console.log('file written tos ' + fileName);
});
