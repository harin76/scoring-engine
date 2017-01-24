const getters = {
  assessment: state => state.assessment,
  sections: state => state.assessment.sections.map((s) => s.name),
  isComplete: state => state.isComplete,
  questions: state => {
    const currentSection = state.assessment.sections.find(s => s.name === state.currentSection)
    return currentSection ? currentSection.questions : state.assessment.sections[0].questions
  },
  currentSection: state => state.currentSection || state.assessment.sections[0].name
}

export default getters
