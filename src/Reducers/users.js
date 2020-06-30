const INITIAL_STATE = [];

function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOAD_USERS':
      return state = action.payload;
  
    default:
      return state;
  }
}

export default users;