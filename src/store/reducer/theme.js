export const themeColor = (state, action) => {
  if (!state) return 'red'
  switch (action.type) {
    case 'CHANGE_COLOR':
      return action.themeColor
    default:
      return state
  }
}