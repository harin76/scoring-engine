const Chance = require('chance')
const chance = new Chance()

const generateQuestion = function generateQuestion (position) {
  return {
    name: chance.first(),
    text: chance.sentence(),
    id: chance.guid(),
    postion: 1,
    isMandatory: true,
    availableScore: 2,
    penalty: 0,
    ruleType: 'self',
    scoringRule: '',
    type: chance.pickone(['text', 'number', 'percent', 'yesNo', 'dropdown', 'date', 'currency', 'radio', 'multiselect'])
  }
}

const generateSection = function generateSection (option) {
  let section = {
    name: chance.first(),
    description: chance.paragraph(),
    scoringRule: '',
    ruleType: 'notCalculated',
    position: 1,
    questions: chance.n(generateQuestion, option.questions)
  }

  for (let i = 0; i < option.question; i++) {
    section.questions.push(generateQuestion(i))
  }
  return section
}

export default {
  getAssessment: (sections, questions) => {
    return {
      name: chance.word(),
      description: chance.paragraph(),
      author: chance.name(),
      availableScore: 100,
      duration: 60,
      sections: chance.n(generateSection, sections, { questions: questions })
    }
  }
}
