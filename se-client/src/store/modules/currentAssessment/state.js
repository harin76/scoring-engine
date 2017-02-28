import assessment from '../../../api/assessment'

const state = {
  assessment: assessment.getAssessment(10, 5),
  isComplete: false,
  currentSection: null
}

export default state
