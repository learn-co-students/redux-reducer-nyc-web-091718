export function manageFriends(state = {friends: [],
  }, action){
  switch (action.type){
    case 'ADD_FRIEND':
      return {...state, friends: [...state.friends, action.friend] }
    case 'REMOVE_FRIEND':
    const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
      return (
        {...state,
            friends: [
              ...state.friends.slice(0, removalIndex),
              ...state.friends.slice(removalIndex + 1)
            ]
        }
      )
    default:
      return state;
  }
}

// function todoApp(state = initialState, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return Object.assign({}, state, {
//         visibilityFilter: action.filter
//       })
//     default:
//       return state
//   }
// }
