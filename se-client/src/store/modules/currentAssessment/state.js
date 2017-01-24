import assessment from '../../../api/assessment'

const state = {
  assessment: assessment.getAssessment(5, 20),
  isComplete: false,
  currentSection: null
}

export default state
