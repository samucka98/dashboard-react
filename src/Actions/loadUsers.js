const loadUsers = (list) => {
  return {
    type: 'LOAD_USERS',
    payload: list
  }
}

export default loadUsers;