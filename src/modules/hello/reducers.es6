import * as A from 'modules/hello/actions'

export const message = (state = '', action) => {
  if (action.type === A.CHANGE_MESSAGE) {
    return action.message
  }

  return state
}
