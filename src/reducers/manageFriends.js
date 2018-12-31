const initialState = {
  friends: []
}

export function manageFriends(state = initialState, action){
  switch (action.type) {
    case "ADD_FRIEND":
      return { ...state, friends:[...state.friends, action.friend] }
    case "REMOVE_FRIEND":
      const newArray = state.friends.filter(f => f.id !== action.id)
      return {...state, friends: newArray }
    default: return state

  }
}
