export const count = (state = 0, action) => {
  switch (action.type) {
    case 'ADD': state++; return state
    case 'SUB': state--; return state
    default: return state
  }
}