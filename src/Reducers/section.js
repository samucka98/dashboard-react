import store from "../store/store";

const INITIAL_STATE = false;

function section(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN':
      return state = action.payload;

    case 'LOGOUT':
      return state = action.payload;
  
    default:
      return state;
  }
}

export default section;