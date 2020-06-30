const load = (list) => {
  return {
    type: 'LOAD_USERS',
    payload: list
  }
}

const loadUsers = () => {
  return (dispatch) => {
    fetch('http://localhost:5000/dashboard/admin/users')
      .then(response => response.json())
      .then(data => dispatch(load(data)));
  }
}

export default loadUsers;