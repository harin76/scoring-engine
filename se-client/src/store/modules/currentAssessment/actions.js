import { SAVE_ANSWER, SELECT_SECTION } from '../../mutation-types'

const actions = {
  saveAnswer: (context, value) => {
    context.commit(SAVE_ANSWER, value)
  },
  selectSection: (context, value) => {
    console.log(value)
    context.commit(SELECT_SECTION, value)
  }
}

export default actions
